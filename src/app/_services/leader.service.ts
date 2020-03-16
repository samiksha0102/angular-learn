import { Injectable } from '@angular/core';
import { LEADERS } from '../_shared/leaders';
import { Leader } from '../_shared/leader';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor() { }
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }
  getLeader(id: string): Observable<Leader> {
    let resultLeader: Leader = LEADERS.filter((leader) => leader.id == id)[0]
    return of(resultLeader).pipe(delay(2000));

  }
  getFeaturedLeader(): Observable<Leader> {
    let resultLeader: Leader = LEADERS.filter((leader) => leader.featured)[0]
    return of(resultLeader).pipe(delay(2000));
  }
}
