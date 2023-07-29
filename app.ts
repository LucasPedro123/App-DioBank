import {CampanyAccount } from './class/CampanyAccount'
import {PeopleAccount} from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(2, "Caio", 26, 1500)

const campanyAccount: CampanyAccount = new CampanyAccount("André", 32, 12.426)

campanyAccount.deposit(10000)
console.log(campanyAccount)
campanyAccount.withdraw(2000)
console.log("< ================================= >")

