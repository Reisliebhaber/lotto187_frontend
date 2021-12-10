import { TipService } from './../service/tip.service';
import { Observable, tap, catchError, of, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Tip } from '../interface/Tip';

@Component({
  selector: 'app-usertips',
  templateUrl: './usertips.component.html',
  styleUrls: ['./usertips.component.css']
})
export class UsertipsComponent implements OnInit {
  tips$: Observable<Tip[]> | undefined;
  tests: Observable<Tip> | null;
  test: Tip | null;

  constructor(private tipService: TipService) {
    this.tests = null;
    this.test = null;
    this.getTips();
   }

  ngOnInit(): void {
    this.tips$ = this.tipService.tips$;/*this.tipService.getTips()
    .pipe(
      tap(console.log),
      map(response => return {response});
      catchError((error: String) => {
        return of({id: null, tips: error, superNumber: 0, tippingTime: null, payout: 0, users: null})
      })
    )*/
    //this.tips$.subscribe(tip => this.test = tip);
  }

  //TODO Liste tips mit den Tips des Users befüllen
  tips: Tip[] = [
    {
      id: 1,
      tips: "1,2,3,4,5,6",
      superNumber: 7,
      tippingTime: new Date(),
      payout: 10.5,
      users: []
    },
    {
      id: 2,
      tips: "2,3,4,5,6,7,",
      superNumber: 8,
      tippingTime: new Date(),
      payout: 20.5,
      users: []
    }
  ]

  tabKey:any = [];
  tabValue:any = [];
  getTips(){
    this.tips.forEach((tip:Tip) =>{
      this.tabKey = Object.keys(tip);
      this.tabValue.push(Object.values(tip));
    })
    
    
  }
}
