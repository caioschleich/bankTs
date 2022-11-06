import { BankAccount } from "./bankaccount"

export class BusinessAccount extends BankAccount {
  private business_id: number

  constructor(business_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.business_id = business_id
  }

  getLoan = (): void => console.log('Você contratou um empréstimo')

  // deposit = (): void => console.log('A empresa fez um depósito')
}