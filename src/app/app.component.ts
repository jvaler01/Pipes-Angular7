import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre =  'Asdf';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };
  valorPromesa = new Promise(( resolve, reject ) => {
    setTimeout(() => resolve('Llego la data!'), 3500);
  });
  fecha = new Date();

  nombre2 = 'rosi rosita roSario';
  video = "oliCVn7Ic68";
  activar = true;
}
