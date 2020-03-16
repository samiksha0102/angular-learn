import { Injectable } from '@angular/core';
import { DISHES } from '../_shared/dishes';
import { Dish } from '../_shared/dish';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }
  getDish(id: string): Observable<Dish> {
    let resultDish:Dish  = DISHES.filter((dish) => dish.id == id)[0]
    return of(resultDish).pipe(delay(2000));

  }
  getFeaturedDish(): Observable<Dish> {
    let resultDish:Dish  = DISHES.filter((dish) => dish.featured)[0]
    return of(resultDish).pipe(delay(2000));
  }
}
