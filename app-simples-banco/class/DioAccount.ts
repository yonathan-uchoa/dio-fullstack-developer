export abstract class DioAccount {

  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.setBalance(valor)
      console.log(`Deposito: ${valor}, Total: ${this.getBalance()}`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus() && valor <= this.balance){
      this.setBalance(-valor)
      console.log(`Saque: ${valor}, Total: ${this.getBalance()}`)
    }   
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (valor: number): void => {
    this.balance += valor
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
