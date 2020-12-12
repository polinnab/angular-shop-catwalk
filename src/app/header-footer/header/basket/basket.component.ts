import { Component, OnInit, Input } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { BadgeService } from "../../../badge.service";




@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.sass']
})
export class BasketComponent implements OnInit {


  // @Input() sumGoods: number;
  goods = [];
  sumOfGoods = '';
  
  faShoppingBasket = faShoppingBasket;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  // faSearch = faSearch;
  constructor(private counter: BadgeService) { }

  // ngOnChanges() {
  //   console.log("Пришли новые данные в arguments в корзине: ", arguments)
  //   // this.countGoods();
  // }

  ngOnInit(): void {

   this.counter.observable.subscribe( summa => this.sumOfGoods = summa);
  };



  // getSumOfGoods(quantity) {
  //   this.sumOfGoods = quantity;
  //   console.log('я сумма товаров в корзине:  ', quantity);
  // };

  getFromLocalStorage() {
    this.goods = JSON.parse(localStorage.getItem('allgoods'));
    console.log(this.goods);
    // this.countGoods();
  };

  // countGoods(): number {
  //   if (!this.goods.length) {
  //     this.sumOfGoods = 0;
  //   } else {
  //     this.goods.forEach(el => {
  //       console.log('во мне столько товара: ', el.quantity)
  //       this.sumOfGoods = this.sumOfGoods + el.quantity;
  //       console.log('в меня добавили кол-во товара и теперь я:..', this.sumOfGoods)
  //     })
  //     console.log(this.sumOfGoods);
  //     return this.sumOfGoods;
  //   }
  //   this.goods.forEach(el => {
  //     console.log('во мне столько товара: ', el.quantity)
  //     this.sumOfGoods = this.sumOfGoods + el.quantity;
  //     console.log('в меня добавили кол-во товара и теперь я:..', this.sumOfGoods)
  //   })
  //   console.log(this.sumOfGoods);
  //   return this.sumOfGoods;
  // }

}

