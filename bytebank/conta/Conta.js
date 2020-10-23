export class Conta {
  constructor(saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
      throw new Error("nao pode instancia objeto do tipo conta diretamente");
    }
        this._saldo= saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

      }

      // propriedade da classe contaCorente
      set cliente (novoValor){
        if (novoValor instanceof Cliente){
          this._cliente =  novoValor;
        }
      }
      
      get cliente(){
        return this._cliente;
      }
      
      get saldo(){
        return this._saldo;
      }
      
    // metodo abstrato
      sacar(valor) {
        throw new Error(" metodo abstrato");
      }

      _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
          this._saldo -=valorSacado;
          return valorSacado;
        }
        return 0;
      }
    
      depositar(valor) {
          if(valor <=100) {
              return;
          }
          this._saldo +=valor;
      }
    
      transferir(valor, conta) {
          const valorSacado = this.sacar(valor);
          conta.depositar(valorSacado)
      }
}