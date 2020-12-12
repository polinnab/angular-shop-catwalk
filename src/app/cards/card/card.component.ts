import { Component, OnInit, Input } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() goodInfo;
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {

  }
 
  getDiscount(price, num): any {
    return this.roundTo(price * (1 - num));

  };

  roundTo(num, n = '0'): any {
    return Math.round( num * (10 ** parseInt(n)) ) / (10 ** parseInt(n));
  };


}
