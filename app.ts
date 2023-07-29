import {CampanyAccount } from './class/CampanyAccount'
import {PeopleAccount} from './class/PeopleAccount'
import {AdminAccount} from './class/AdminAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(2, "Caio", 26)
const campanyAccount: CampanyAccount = new CampanyAccount("André", 32)
// Instanciando Admin:
const adminAccount: AdminAccount = new AdminAccount("Ariana", 27)
adminAccount.depositAdmin(500)



