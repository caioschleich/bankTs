export abstract class BankAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  
  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
/*
  setName = (name: string): void => { // método setter
    this.name = name
    console.log('Nome alterado com sucesso')
  }
*/
  getName(): string { // método getter
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + deposit
      console.log('Você depositou com sucesso')
      console.log('Saldo em conta: ', this.balance)
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus()){
      if(this.balance >= withdraw){
        this.balance = this.balance - withdraw
        console.log('Você sacou com sucesso')
        console.log('Saldo em conta: ', this.balance)
      } else console.log('Não foi possível sacar: saldo insuficiente') 
    }
  }

  bonusdeposit = (bonusdeposit: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + bonusdeposit + 100
      console.log('Você depositou com sucesso na conta Bonus')
      console.log('Saldo em conta: ', this.balance)
    }
  }

  getBalance = (): void => console.log(this.balance)

  private validateStatus(): boolean {
    if(this.status){
      return this.status
    }
    throw new Error('Conta inativa')
  }

}