import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { GoodsService } from "../../goods.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import {MatDialog} from '@angular/material/dialog';
import { BadgeService } from "../../badge.service";

import { Good } from "../../types";

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.sass']
})
export class GoodComponent implements OnInit {

  goods: Good[];
  good: Good;
  goodsSlider: Good[];

  mainphoto: string;
  
  sumincard = 0;

  message: string;
  editedmsg: string;


  selectedGood = {
    id: '',
    name: '',
    size: '',
    price: '',
    image: '',
    quantity: 0,
    allprice: 0,
    sale: false
  };
  
  allGoods = [];

  activeSize: string;
  sizes: string[];
  arrorSize = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private goodsService: GoodsService,
    public dialog: MatDialog,
    private counter: BadgeService
    // public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.getGood();
    this.getMainPhoto();
    this.setLocalstorage();
    this.getLocal();
    this.getGoods();
    this.getSumInCard();
    console.log('я перезагрузилась');

  };

  inc() {
    if (this.activeSize) {
      this.counter.incCounter();
    }
    
  }


  reload(goodroute){
    console.log(goodroute.id);
    // this.getGood();
    this.arrorSize = false;
    this.goodsService.getGoods().subscribe(goods => console.log(this.good = goods["goods"].find(good => good.id === goodroute.id)));
    this.goodsService.getGoods().subscribe(goods => console.log(this.mainphoto = goods["goods"].find(good => good.id === goodroute.id).image.thumb[0]));

    this.router.navigate(["/catalog/good/"+goodroute.id]);

  };


  openDialog() {
    if (this.activeSize) {
      const dialogRef = this.dialog.open(GoodModalComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
      this.arrorSize = false
    } else {
      this.arrorSize = true
    }
    
  };

  getDiscount(price, num): any {
    return this.roundTo(price * (1 - num));

  };

  changeMainPhoto(image) {
    this.mainphoto = image;
  }

  roundTo(num, n = '0'): any {
    return Math.round( num * (10 ** parseInt(n)) ) / (10 ** parseInt(n));
  };

  getGood() {
    const id = this.route.snapshot.paramMap.get('id');

    this.goodsService.getGoods().subscribe(goods => console.log(this.good = goods["goods"].find(good => good.id === id)));
  };

  getGoods() {
    this.goodsService.getGoods().subscribe(goods => {
      console.log(this.goodsSlider = goods["goods"]);
      this.getRandomGood();
    });

  }

  getMainPhoto() {
    let id = this.route.snapshot.paramMap.get('id');

    this.goodsService.getGoods().subscribe(goods => console.log(this.mainphoto = goods["goods"].find(good => good.id === id).image.thumb[0]));
  }

  getSize(size) {
    this.activeSize = size
    this.selectedGood.size = size;
    console.log(size);
    console.log(this.selectedGood);

  };

  addToCard(good) { 
    console.log('я активный размер при добавлении в карту', this.activeSize)
    if (this.activeSize) {
      if (!this.allGoods.length) {
        this.selectedGood.id = good.id;
        this.selectedGood.name = good.name;
        this.selectedGood.price = good.price;
        this.selectedGood.image = good.image.thumb[0];
        this.selectedGood.quantity = 1;
        this.selectedGood.allprice = +good.price;
        this.selectedGood.sale = good.sale
        this.allGoods.push(this.selectedGood);
        this.getSumInCard();
  
        console.log('сработала функция с нуля')
      } else  if (this.allGoods.find(el => good.id == el.id && this.selectedGood.size == el.size )) {
        console.log('начало перебора...')
        this.allGoods.find(el => {
          if (good.id == el.id && this.selectedGood.size == el.size) {
            console.log(el.id);
            console.log(good.id);
            el.quantity = el.quantity + 1;
            el.allprice = +el.allprice + +el.price;
            this.getSumInCard();
            console.log(el);
            console.log('сработала функция увеличения кол-ва')
          }
        });
        console.log('сработала функция увеличения кол-ва')
      } else {
            this.selectedGood.id = good.id;
            this.selectedGood.name = good.name;
            this.selectedGood.price = good.price;
            this.selectedGood.image = good.image.thumb[0];
            this.selectedGood.quantity = 1;
            this.selectedGood.allprice = +good.price;
            this.selectedGood.sale = good.sale;
            this.allGoods.push(this.selectedGood);
            this.getSumInCard();
            console.log('сработало добавление нового товара, совпадений не найдено')
      }
      console.log('Добавлено ли новое в allGoods: ', this.allGoods);
      this.setLocalstorage();
    }
    
  };



  setLocalstorage() {
    
    localStorage.setItem('allgoods', JSON.stringify(this.allGoods));
    let newgoods = localStorage.getItem('allgoods');
    console.log(newgoods);
 
  }

  getLocal() {
    let goods;
    goods = localStorage.getItem('allgoods');

    console.log('Из локала', goods);
    console.log('Находится в переменной allGoods: ', this.allGoods);

    this.allGoods = JSON.parse(localStorage.getItem('allgoods'));
    console.log('Теперт находится в переменной allGoods: ', this.allGoods);
    
  };

  getRandomGood(): Good[] {
    return this.goodsSlider.sort(function() {
      return Math.random() - 0.5;
    });

  };

  getSumInCard() {
    this.allGoods.forEach(el => {
      this.sumincard = this.sumincard + el.quantity;
      console.log('в корзине сейчас столько товаров', this.sumincard);
    })
  };


  
}



@Component({
  selector: 'app-good-modal',
  templateUrl: './good-modal.component.html',
})
export class GoodModalComponent {}