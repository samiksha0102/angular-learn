import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../_shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../_services/dish.service';
@Component({
    selector: 'app-dishdetail',
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    dish: Dish;
    constructor(private dishService: DishService, private location: Location, private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.dish = this.dishService.getDish(id);
    }
goBack():void{
this.location.back();
}
}
