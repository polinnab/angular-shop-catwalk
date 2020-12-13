import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { element } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { GoodsService } from "../../../goods.service";
import { ActivatedRoute, Router } from "@angular/router";



import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Good } from "../../../types";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  goods$: Observable<Good[]>;
  goods: Good[];
  keyWord: string;
  private searchTerms = new Subject<string>();



  faSearch = faSearch;
  constructor(
    private goodService: GoodsService,
    private route: ActivatedRoute,
    private router: Router

    ) { }
    

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.goods$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.goodService.searchGoods(term)),
    );
  };


  


  




}

