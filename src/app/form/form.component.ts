import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

//Somar
    onClickSomar(){
      this.resultado = this.num1 + this.num2;
    }


      // Subtrair
  onClickSubtrair() {
    this.resultado = this.num1 - this.num2;
  }

  // Multiplicar
  onClickMultiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  // Dividir
  onClickDividir() {
      this.resultado = this.num1 / this.num2;
  }

  // Potenciação
  onClickPotenciar() {
    this.resultado = Math.pow(this.num1, this.num2);
  }

  // Média
  onClickMediar() {
    this.resultado = (this.num1 + this.num2) / 2;
  }
}

