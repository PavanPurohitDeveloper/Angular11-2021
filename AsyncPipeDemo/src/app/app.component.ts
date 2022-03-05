import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  promise: Promise<{}>;

  //to create Observable..Observable variables are created with the help of $ sign.
  observable$: Observable<number>;
  observableData: any;

  constructor() {
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.susbscribeObservable();
  }

  //Promises
  getPromise(): Promise<{}> {

    //resolve object - is used to get the result
    //reject object - is used simply to display error message to user.
    return new Promise((resolve, reject) => {
      //setTimeout is function will get executed every 3 seconds
      setTimeout(() => {
        resolve('Promise is Completed, Data Recived....!');
      }, 3000);
    })

  }

  //Observable is from rxjs library
  getObservable(): Observable<number> {

    //interval is a method available.. interval is also from rxjs library.
    //pipe method - whenever if something is going to happen .. in component itself you want to map before using in the HTML.
    return interval(1000).pipe(
      take(5), map(value => value + 1)
    );
  }

  //whaetevevr we observing, we subscribing it and we are doing it.. pipe is automatically assigned and we retriving the value and that value we assigning. subscribe means Asyncronous call only. subscribe it returns the data in Asyncronous mode.
  susbscribeObservable() {

    this.observable$.subscribe(value => this.observableData = value);
  }

}
