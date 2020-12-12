import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Good, Blog, ByCategory, Discount } from "../app/types";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private goodsUrl = '../assets/data-base/goods.json';

  private blogsUrl = '../assets/data-base/blog.json';
  private bycatUrl = '../assets/data-base/slider-gotocategories-main.json'
  private discount = '../assets/data-base/slider-discount-main.json';

  constructor(private http: HttpClient) { }
  
  getGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.goodsUrl)
  };

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogsUrl)
  };

  getByCat(): Observable<ByCategory[]> {
    return this.http.get<ByCategory[]>(this.bycatUrl)
  };

  getDiscount(): Observable<Discount[]> {
    return this.http.get<Discount[]>(this.discount)
  };



  searchGoods(term: string): Observable<Good[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Good[]>(this.goodsUrl).pipe(
      map(e => {
        const goods = e['goods'];
        return goods.filter(g => g.name.includes(term))
      }),
      catchError(this.handleError<Good[]>('searchHeroes', []))
    );
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };
  
}

