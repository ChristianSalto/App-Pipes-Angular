import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any): any {
    const result = data.filter((value: any) => value.status === 'ACTIVE')
    return result;
  }
}
