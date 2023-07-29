import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
    doc_id: number;

    constructor(doc_id: number, name: string, age: number, balance: number){
        super(name, age, )
        this.doc_id = doc_id;
    }
}