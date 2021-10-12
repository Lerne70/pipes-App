import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'luis';
  nombreUpper: string = 'LUIS';
  nombreCompleto: string = 'lUiS ErNEstO';

  fecha: Date = new Date();

}
