import { Component, OnInit } from '@angular/core';
import { DishService } from '../_services/dish.service';
import { PromotionService } from '../_services/promotion.service';
import { Promotion } from '../_shared/promotion';
import { Dish } from '../_shared/dish';
import { LeaderService } from '../_services/leader.service';
import { Leader } from '../_shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader:Leader;
  constructor(private dishService: DishService, private promotionService: PromotionService,private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();
  }

}
