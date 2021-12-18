import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OneComponent } from '../one/one.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  //The data from one component I want to access in second component..by using decorator @ViewChild
  // @ViewChild(OneComponent,{static:true})
  // private _obj: OneComponent;

  // ClickMe(){
  //   this._obj.var_one = "Welcome_1";
  //   this._obj.var_two = "Welcome_2";
  // }

  @ViewChildren(OneComponent)
  private _map: QueryList<OneComponent> = new QueryList();
  private _myArr: Array<any>; //for iterations

  //whenever my View is getting initiated and whatever the data we are having in my map function and just converting that into Array.
  //Only after my View is getting Initialized, whatever the data we are having in this map (_map) function.. _map It contains all the component differences and I am trying to copy that into Array ( _myArr)..  _myArr will contains iteration process.. but QueryList is not having any kind of iteration so because of that I am using.
  ngAfterViewInit(): void {
    this._myArr = this._map.toArray();
  }

  ClickMe() {
    //this._obj.var_one = "Welcome_1";
    //this._obj.var_two = "Welcome_2";
    //forEach conatins element (el) reference..
    this._myArr.forEach(
      (el) => {
        el.var_one = "Welcome_1";  //If its "var_one" changing element to "Welcome_1
        el.var_two = "Welcome_2";
      }
    );
  }

}
