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
  private _myArr: Array<any>;

  ngAfterViewInit(): void {
    this._myArr = this._map.toArray();
  }

  ClickMe() {
    //this._obj.var_one = "Welcome_1";
    //this._obj.var_two = "Welcome_2";
    this._myArr.forEach((el) => {
      el.var_one = "Welcome_1";
      el.var_two = "Welcome_2";
    });
  }

}
