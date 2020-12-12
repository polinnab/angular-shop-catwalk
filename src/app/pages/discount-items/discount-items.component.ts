import { Component, OnInit, Input } from '@angular/core';
import { GoodsService } from "../../goods.service";

import { Good } from "../../types";


@Component({
  selector: 'app-discount-items',
  templateUrl: './discount-items.component.html',
  styleUrls: ['./discount-items.component.sass']
})
export class DiscountItemsComponent implements OnInit {

  filtered: Good[];
  goods: Good[];
  
  getFiltered(goods) {
    this.filtered = goods;
    console.log('Отфильтрованные в Алл-итемс', goods);
  }

  constructor(
    private goodService: GoodsService) { }

  ngOnInit(): void {
    this.getGoods();
  };

  getGoods(): void {
    this.goodService.getGoods().subscribe(data => {
      this.goods = data["goods"];
      this.goods = this.getSale();
      this.getRandomGood();
      console.log(this.filtered = this.goods.map(el => el));

    });
  };

  getSale(): Good[] {
    return this.goods.filter(el => el.sale);
  }; 

  getRandomGood(): Good[] {
    return this.goods.sort(function() {
      return Math.random() - 0.5;
    });

  };




}
