import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangedpipe'
})
export class RangedpipePipe implements PipeTransform {

  transform(input:any[] , from_range:number , to_range:number): any[]{
    if(from_range == 0 || to_range == 0){
      return input;
    }
    else{
      return input.filter(item => item.esalary >= from_range && item.esalary <= to_range);
    }
    
  }

}
