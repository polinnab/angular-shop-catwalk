import { Component, OnInit, Input } from '@angular/core';
import { GoodsService } from "../../goods.service";

import { Good } from "../../types";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.sass']
})
export class AllItemsComponent implements OnInit {


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
      this.getRandomGood();
      console.log(this.filtered = this.goods.map(el => el));

    });
  };

  getRandomGood(): Good[] {
    return this.goods.sort(function() {
      return Math.random() - 0.5;
    });

  };
}
