import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  nameLower:string = 'christian';
  nameUpper: string = 'CHRISTIAN';
  nameFull: string = 'chRiSTIan SALto pErEz';

  fecha: Date = new Date();

}
