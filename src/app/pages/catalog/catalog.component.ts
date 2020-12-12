// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GoodsService } from "../../goods.service";

import { Good } from "../../types";



interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  @Input() goodsFiltered: Good[];
  // @Output() selectionChange: EventEmitter<String>;
  // @Input() goodsFiltered: Good[];
  goods: Good[];
  selectedGood: Good;

  filterValue: Filter[] = [
    {value: 'low', viewValue: 'Дешевых к дорогим'},
    {value: 'high', viewValue: 'Дорогих к дешевым'}
  ];

  pageIndex:number = 0;
  pageSize:number = 20;
  lowValue:number = 0;
  highValue:number = 20;       


  constructor() { 
      
      
  }

  ngOnInit(): void {
    //  this.getGoods();
  };

  getPaginatorData(event){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
   else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
}



  getGoods(): void {
    // this.goodService.getGoods().subscribe(data => this.goods = data["goods"]);
  };
  
  onSelect(good: Good) {
    this.selectedGood = good;
    console.log(this.selectedGood);
  }

  
  getByPrice(arr): Good[] {
    if (arr.value == 'high') {
      this.goodsFiltered.sort(function(a, b) {
          return +b.price - +a.price;
        });
    } else {
      this.goodsFiltered.sort(function(a, b) {
        return +a.price - +b.price;
      });
    }

    console.log(this.goodsFiltered);
    return this.goodsFiltered;

  }

}
