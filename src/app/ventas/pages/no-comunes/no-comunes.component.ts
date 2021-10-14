import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Hernando', 'Fernando', 'Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'un cliente esperando',
    '=2': '2 clientes esperando',
    'other': '# clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Luis';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Lius',
    edad: '22',
    direccion: 'Guanajauto, Mexico'
  }

  // JSON pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: true
    },
    {
      nombre: 'aquaman',
      vuela: true
    },
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tenemos data de promesa");
    }, 3500)
  });

}
