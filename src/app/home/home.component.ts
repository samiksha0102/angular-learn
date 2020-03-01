import { Component, OnInit } from '@angular/core';
import { DishService } from '../_services/dish.service';
import { PromotionService } from '../_services/promotion.service';
import { Promotion } from '../_shared/promotion';
import { Dish } from '../_shared/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  constructor(private dishService: DishService, private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
