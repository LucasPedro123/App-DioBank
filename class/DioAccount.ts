export abstract class DioAccount {
    private name: string
    private age: number
    private balance: number = 0
    private status : boolean =  true
   
    constructor(name : string, age: number){
        this.name = name;
        this.age = age;
    }

    deposit = (value : number)=>{
        if(this.status === true){
            this.balance = value
            console.log(`Valor do deposito de: ${value}, realizado com sucesso!`)
            console.log(`Saldo atual: ${this.balance}`)
        }
    }
    depositAdmin = (value: number)=>{
        if(this.status === true){
            this.balance = value + 10
            console.log(`Deposito de: ${value}, realizado com sucesso!`)
            console.log(`Saldo atual: ${this.balance}`)

        }
    }

    getLoan = (value : number)=>{
        if(this.status === true){
            const summation: number = this.balance + value;
            this.balance = summation;

            console.log(`Transfêrencia do empréstimo de: ${value}, realizado com sucesso!`)
            console.log(`Saldo atual: ${this.balance}`)
        }
    }
    withdraw = (withdraw: number)=>{
        if(this.status === true && this.balance >= withdraw){
            const subtraction: number = this.balance - withdraw
            this.balance = subtraction

            console.log(`Saque de: ${withdraw}, realizado com sucesso!`)
            console.log(`Saldo atual ${this.balance}`)

        }
        
    }

    getBalance = ()=>{
        console.log(this.balance)
    }
}