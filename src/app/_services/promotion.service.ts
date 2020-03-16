import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../_shared/promotions';
import { Promotion } from '../_shared/promotion';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }
  getPromotion(id: string): Observable<Promotion> {
    let resultPromo: Promotion = PROMOTIONS.filter((promotion) => promotion.id == id)[0]
    return of(resultPromo).pipe(delay(2000));

  }
  getFeaturedPromotion(): Observable<Promotion> {
    let resultPromo: Promotion = PROMOTIONS.filter((promotion) => promotion.featured)[0]
    return of(resultPromo).pipe(delay(2000));
  }
}
