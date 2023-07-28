export abstract class DioAccount {
    name: string
    age: number
    balance: number = 0
    status : boolean =  true
   
    constructor(name : string, age: number){
        this.name = name;
        this.age = age;
    }

    deposit = (value : number)=>{
        if(this.status === true){
            this.balance = value
        }
    }

    withdraw = (withdraw: number)=>{
        if(this.status === true && this.balance >= withdraw){
            const subtration: number = this.balance - withdraw
            this.balance = subtration

            console.log("Saque realizado com sucesso!")
            console.log(`Saldo atual ${this.balance}`)

        }
        
    }

    getBalance = ()=>{
        console.log(this.balance)
    }
}