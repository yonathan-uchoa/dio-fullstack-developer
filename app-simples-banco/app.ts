import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/newAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const newAccount: NewAccount = new NewAccount('New', 30)
peopleAccount.deposit(100)
companyAccount.deposit(100)
newAccount.deposit(100)
peopleAccount.withdraw(100)
companyAccount.withdraw(100)
newAccount.withdraw(110)
companyAccount.getLoan(50)
console.log(companyAccount)