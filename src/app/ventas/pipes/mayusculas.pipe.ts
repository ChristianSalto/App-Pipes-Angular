import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

  transform( value : string, mayuscula : boolean = true): string {
    return mayuscula ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }

}
