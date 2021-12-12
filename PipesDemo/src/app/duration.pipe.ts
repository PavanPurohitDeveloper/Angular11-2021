import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  //args: are nothing but options
  //value is going to read value of 1st parameter before the pipe .. {{videoduration|duration}}
  //unknow is also of type
  transform(value: number, format: string): string {
    var s;
    if (format == "hoursonly") {
      s = value / 60 + 'hrs';
    } else if (format == "hoursandminutes") {
      s = Math.floor(value / 60) + 'hrs' + ((value % 60 > 0) ? (' and ' + value % 60) + 'min' : '');
    } else {
      s = value;
    }
    return s;
  }

}
