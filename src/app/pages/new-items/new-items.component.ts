import { Component, Input, OnInit } from '@angular/core';
import { GoodsService } from "../../goods.service";

import { Good } from "../../types";

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.sass']
})
export class NewItemsComponent implements OnInit {

  goods: Good[];
  filtered: Good[];

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
      this.goods = this.getNew();
      this.getRandomGood();
      console.log(this.filtered = this.goods.map(el => el));

    });
  };

  getNew(): Good[] {
    return this.goods.filter(el => el.new);
  }; 

  getRandomGood(): Good[] {
    return this.goods.sort(function() {
      return Math.random() - 0.5;
    });

  };


}
