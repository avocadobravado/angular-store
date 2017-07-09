import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storePipe'
})
export class StorePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
