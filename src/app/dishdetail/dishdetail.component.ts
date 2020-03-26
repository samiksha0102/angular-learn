import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Dish } from '../_shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../_services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Comment } from '../_shared/comment';
@Component({
    selector: 'app-dishdetail',
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    commentForm: FormGroup;
    dish: Dish;
    dishIds: string[];
    prev: string;
    next: string;
    comment: Comment;
    @ViewChild('formDirective') private formDirective: NgForm;
    formErrors = {
        'author': '',
        'comment': ''
    };
    validationMessages = {
        'author': {
            'required': 'Name is required.',
            'minlength': 'Name should at least be two characters long.'
        },
        'comment': {
            'required': 'Comment is required.'
        },
    }
    constructor(private dishService: DishService,
        private location: Location,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnInit(): void {
        this.dishService.getDishIds()
            .subscribe(dishIds => this.dishIds = dishIds);
        this.route.params
            .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
            .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }
    createForm() {
        this.commentForm = this.formBuilder.group({
            author: ['', [Validators.required, Validators.minLength(2)]],
            rating: 5,
            comment: ['', Validators.required],
        });
        this.commentForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }
    onValueChanged(data?: any): void {
        if (!this.commentForm) { return; }
        const form = this.commentForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += this.validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
        this.comment = this.commentForm.value;

    }
    setPrevNext(dishId: string) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]

    }
    goBack(): void {
        this.location.back();
    }
    onSubmit() {
        this.comment = this.commentForm.value;
        this.comment.date = new Date().toISOString();//geting current data in ISO String
        this.dish.comments.push(this.comment);
        this.commentForm.reset({
            author: '',
            comment: '',
            rating: 5
        });
        this.formDirective.resetForm();
        this.comment = null;
    }
}
