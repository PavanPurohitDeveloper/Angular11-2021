import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myDir]'
})
export class MyDirective {

  //to read from HTML.. we are getting data from parent to child here
  @Input() var_one: string = "";
  @Input() var_two: string = "";

  //it will contain ElementReference object.. this is what called dependency Injection
  //This ElementReference will get the reference of the eleemnt where the directive ("myDir") was applied in HTML
  constructor(private _el: ElementRef) { }

  //function
  public myFun(arg: string) {
    this._el.nativeElement.style.backgroundColor = arg;
  }

  //Apply some events.. HostListener is used to apply the events... whenever user click on mouse
  //nativeElement is a element.. Basically ElementReference is a Collection.. In that Collection which element you trying to point out/figure it out that is what called nativeElement.
  @HostListener("mouseenter") onmouseeneter() {
    //this._el.nativeElement.style.backgroundColor = "green";
    //this.myFun('green');
    this.myFun(this.var_one);
  }
  //whenever user remove/leave the mouse
  @HostListener("mouseleave") mouseleave() {
    //this._el.nativeElement.style.backgroundColor = "blue";
    //this.myFun('blue');
    this.myFun(this.var_two);
  }

}
