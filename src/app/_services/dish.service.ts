import { Injectable } from '@angular/core';
import { DISHES } from '../_shared/dishes';
import { Dish } from '../_shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Dish[] {
    return DISHES;
  }
  getDish(id: string): Dish {
    return DISHES.filter((dish) => dish.id == id)[0];
    
  }
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
