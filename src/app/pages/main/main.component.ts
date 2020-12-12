import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faRocket, faUnlockAlt, faHeadphonesAlt, faGift, faArrowsAlt, faUndo } from "@fortawesome/free-solid-svg-icons";
import { GoodsService } from "../../goods.service";

import { ByCategory, Discount, Blog } from "../../types";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

 

  faRocket = faRocket;
  faUnlockAlt = faUnlockAlt;
  faHeadphonesAlt = faHeadphonesAlt;
  faGift = faGift;
  faArrowsAlt = faArrowsAlt;
  faUndo = faUndo;

  slideCat: ByCategory[];
  category: '';
  discountslider: Discount[];
  blogs: Blog[];

  discountover = '2020-12-31T00:00:00';
  // datenow = new Date();
  // hh = '';
  // mm = '';
  // ss = '';

  // id: any;

  constructor(private goodService: GoodsService) { }

  ngOnChanges() {

  }

  ngOnInit(): void {
    this.getSliderCat();
    this.getDiscountSlide();
    this.getBlog();
    // this.tick();
    // this.id = setInterval(() => {
    //   this.tick(); 
    // }, 1000);
    
  };

  ngOnDestroy() {
    // if (this.id) {
    //   clearInterval(this.id);
    // }
  };

  // tick() {
  //   // const date = new Date();
  //   this.hh = `0${this.datenow.getHours()}`.slice(-2);
  //   this.mm = `0${this.datenow.getMinutes()}`.slice(-2);
  //   this.ss = `0${this.datenow.getSeconds()}`.slice(-2);


  // }

  getSliderCat() {
    this.goodService.getByCat().subscribe(data => this.slideCat = data["go-to-category"]);
  };

  getDiscountSlide() {
    this.goodService.getDiscount().subscribe(data => console.log(this.discountslider = data["discount"]));

  };

  getBlog() {
    this.goodService.getBlogs().subscribe(data => console.log(this.blogs = data["blogs"]));

  }

  getCategory(slide) {
    this.category = slide.subCategory;
    this.setSessionstorage();
    console.log('Я записала в sessinstorage это: ', this.category);
  };

  setSessionstorage() {
    sessionStorage.setItem('category', this.category);
    console.log(sessionStorage.getItem('category'))
  };

  getDiscount(price, num): any {
    return this.roundTo(price * (1 - num));

  };
  roundTo(num, n = '0'): any {
      return Math.round( num * (10 ** parseInt(n)) ) / (10 ** parseInt(n));
    };


  // getDateNow() {
  //   this.datenow = Date.now();
  //   console.log(this.datenow);
  // };

  

}
