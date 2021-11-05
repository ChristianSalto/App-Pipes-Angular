import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { data } from './objeto'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent implements OnInit{
  setMayusculas: boolean = true;
  orderBy:string = '';

  data = data.records.alerts;

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];


  ngOnInit() {
    console.log(data)
  }


  handleSetMayusculas(): void {
    this.setMayusculas = !this.setMayusculas;
  }


  handleChangeOrder( value: string){
    this.orderBy = value;
  }
}
