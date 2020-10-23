import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

  static numeroDecontas= 0;

  constructor(cliente, agencia){

    super(0,cliente, agencia);
    ContaCorrente.numeroDecontas +=1;
  }
//Sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return super._sacar(valor, taxa)
  }

}
