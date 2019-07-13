import { Component } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { of , from,Subscription} from 'rxjs'; 
import { map } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,OnDestroy {

sourceSubscription  : Subscription
source1Subscription : Subscription

source$ = of(1,2,3) 
source1$ = from([1,2,3])

ngOnInit() {

this.sourceSubscription = this.source$.pipe(
                           map(res => res*2)).subscribe( val => console.log(val))


this.source1Subscription = this.source1$.pipe(
                            map(num => num*2)).subscribe ( val => console.log(val))


}

ngOnDestroy() {
  this.sourceSubscription.unsubscribe()
  this.source1Subscription.unsubscribe()
}

}







              
                          

            