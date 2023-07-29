import {CampanyAccount } from './class/CampanyAccount'
import {PeopleAccount} from './class/PeopleAccount'
import {AdminAccount} from './class/AdminAccount'

console.log("")
console.log("==========================================")

console.log("PeopleAccount:")
    const peopleAccount: PeopleAccount = new PeopleAccount(2, "Caio", 26)
    console.log(peopleAccount)
    // Depositar
    peopleAccount.deposit(12500)
    // Buscar o saldo:
    peopleAccount.getBalance()
    // Realizar empréstimo
    peopleAccount.getLoan(10000)
    // Realizar saque
    peopleAccount.withdraw(10000)
    console.log("")

console.log("CampanyAccount:")
    const campanyAccount: CampanyAccount = new CampanyAccount("André", 32)
    console.log(campanyAccount)
    // Depositar
    campanyAccount.deposit(1000)
    // Buscar o saldo:
    campanyAccount.getBalance()
    // Realizar empréstimo
    campanyAccount.getLoan(500)
    // Realizar saque
    campanyAccount.withdraw(100)
    console.log("")

console.log("AdminAccount:")
    const adminAccount: AdminAccount = new AdminAccount("Ariana", 21)
    console.log(adminAccount)
    // Depositar
    adminAccount.depositAdmin(1330)
    // Buscar o saldo:
    adminAccount.getBalance()
    // Realizar empréstimo
    adminAccount.getLoan(20000)
    // Realizar saque
    adminAccount.withdraw(10000)
    console.log("")

console.log("==========================================")
console.log("")