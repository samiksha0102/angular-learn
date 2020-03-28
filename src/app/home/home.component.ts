import { Component, OnInit, Inject } from '@angular/core';
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
  dishErrMessage: string;
  constructor(private dishService: DishService, private promotionService: PromotionService,private leaderService:LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish, errmessage => this.dishErrMessage = <any>errmessage);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
    
  }

}
