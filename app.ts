// app banco

// name, accountNumber
// deposit, withdraw

// quel, fer moda, mayara, julinho, marta, theo, bianca

import { BusinessAccount } from './class/businessaccount'
import { CurrentAccount } from './class/currentaccount'
import { BonusAccount } from './class/bonusaccount'


const currentAccount: CurrentAccount = new CurrentAccount(12312312312, 'Pessoa Física', 11)
currentAccount.deposit(100)
currentAccount.withdraw(20)
console.log(currentAccount)

const businessAccount: BusinessAccount = new BusinessAccount(12123123000112, 'Pessoa Jurídica', 21)
businessAccount.deposit(50)
businessAccount.withdraw(60)
console.log(businessAccount)

const bonusAccount: BonusAccount = new BonusAccount(32132132112, 'Conta Bônus PF', 31)
bonusAccount.bonusdeposit(100)
console.log(bonusAccount)

