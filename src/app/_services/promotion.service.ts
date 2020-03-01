import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../_shared/promotions';
import { Promotion } from '../_shared/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }
  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => { promo.id == id })[0];
  }
  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }
}
