import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  observer: any;
  observable: Observable<string>;

  constructor() {
    this.observable = new Observable(observer => {
      this.observer = observer
  
      this.observer.next(this.getCount());
    });
  };

  getCount():string {
    let num = sessionStorage.getItem('sumgoods');
  
    if (!num) num = '0';

    return num;
  };

  incCounter() {
    sessionStorage.setItem('sumgoods', String( Number( this.getCount() ) + 1) );

    this.observer.next(this.getCount());
  };

  incCounterMinus() {
    sessionStorage.setItem('sumgoods', String( Number( this.getCount() ) - 1) );
    this.observer.next(this.getCount());

  }

  clearCounter() {
    sessionStorage.setItem('sumgoods', String(0) );
    this.observer.next(this.getCount());

  }

//  getSum(summa: string) {
//    const sumfrom = sessionStorage.getItem('sumgoods');
//     this.sum$.next(sumfrom); // тут мы поставим
//   }


}
