import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }

    deposit = (valor: number): void => {
        if(this.validateStatus()) {
            this.setBalance(valor+10)
            console.log(`Deposito: ${valor}, Total: ${this.getBalance()}`)
        }            
    }
}