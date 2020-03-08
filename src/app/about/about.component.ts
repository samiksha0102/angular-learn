import { Component, OnInit } from '@angular/core';
import { Leader } from '../_shared/leader';
import { LeaderService } from '../_services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders:Leader[];
    constructor(private leaderService:LeaderService) { }
    ngOnInit(): void {
      this.leaders = this.leaderService.getLeaders();
    }
}
