import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [],
})
export class NoCommonComponent {
  name: string = 'Christian';
  genero: string = 'masculino';

  value1: string = 'invitado';

  generosMap = {
    femenino: 'invitada',
    masculino: 'invitado',
  };

  stateOptions = [
    { label: 'femenino', value: 'invitada' },
    { label: 'masculino', value: 'invitado' },
  ];

  elements: any[] = ['Pepe', ' Carlos', ' Juan', ' Keko', ' Edu'];
  elementsMap = {
    '=0': 'no tenemos ningun elemento',
    '=1': 'tenemos 1 elemento',
    other: 'tenemos # elementos',
  };

  // KeyValue Pipe

  persona = {
    Nombre: ' Christian Salto Perez',
    Direccion: ' Madrid, España',
    Edad: ' 36',
    Sexo: ' Masculino',
    Profesion: ' Programador',
  };

  // Json Pipe

  heroes = [
    {
      Nombre: 'Iron Man',
      Vuela: true,
      Nivel: 700,
    },
    {
      Nombre: 'Thor',
      Vuela: true,
      Nivel: 1700,
    },
    {
      Nombre: 'Hulk',
      Vuela: false,
      Nivel: 1700,
    },
  ];

  // Async Pipe
  miObservable = interval(2500); // 0,1,2,3,4,5,6,7 ...

  miPromesa = new Promise((resolve, reject) => {

    setTimeout(()=> {
      resolve( 'Tenemos data la de promesa' )
    }, 5500);

  })

  @ViewChild('element') inputElement: any;

  setName(e: any) {
    const { value } = e.target;

    this.name = value;
  }

  setGenero(e: any) {
    const { innerText } = e.target;
    this.genero = innerText;
  }

  setElements(e: any) {
    const { value } = e.target;
    this.elements.push(value);

    this.inputElement.nativeElement.value = '';
    console.log(this.elements);
  }

  removeElement() {
    this.elements.pop();
  }
}
