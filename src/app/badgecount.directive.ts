import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBadgecount]'
})
export class BadgecountDirective {

  goods = [];
  sumOfGoods = 0;

  constructor(el: ElementRef) {


      el.nativeElement.innerHTML = `<button matBadgeSize="small" matBadge="{{sumOfGoods}}" matBadgeColor="primary"  class="button-basket"><a routerLink="/basket"><fa-icon  [icon]="faShoppingBasket"></fa-icon></a></button>`
   };

   getFromLocalStorage() {
    this.goods = JSON.parse(localStorage.getItem('allgoods'));
    console.log(this.goods);
    this.countGoods();
  };

  countGoods(): number {
    if (!this.goods.length) {
      this.sumOfGoods = 0;
    } else {
      this.goods.forEach(el => {
        console.log('во мне столько товара: ', el.quantity)
        this.sumOfGoods = this.sumOfGoods + el.quantity;
        console.log('в меня добавили кол-во товара и теперь я:..', this.sumOfGoods)
      })
      console.log(this.sumOfGoods);
      return this.sumOfGoods;
    }
    this.goods.forEach(el => {
      console.log('во мне столько товара: ', el.quantity)
      this.sumOfGoods = this.sumOfGoods + el.quantity;
      console.log('в меня добавили кол-во товара и теперь я:..', this.sumOfGoods)
    })
    console.log(this.sumOfGoods);
    return this.sumOfGoods;
  }


}
