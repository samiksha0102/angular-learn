import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../_shared/dish';
import { DishService } from '../_services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMessage: string;
  constructor(private dishService: DishService, @Inject('BaseURL') public BaseURL) { }
  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes, errmessage => this.errMessage = <any>errmessage);
  }
}
