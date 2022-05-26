/*eslint-disable*/

//tipos basicos
let nome: string = 'Luiz';
let idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer');

//arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: string[] = ['a', 'b'];

//objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'alvaro',
}

//funcoes
function soma(x: number, y: number) {
  return x + y;
}