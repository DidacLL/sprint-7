import {ITService} from "./ITService";
import {WEBService} from "./WEBService";

export class ITBudget {
    services!: ITService[];
    date: Date;
    name!: string;
    customer: string | undefined;

    constructor(itServices: ITService[], name?: string, date?: Date, customer?: string) {
        this.services = itServices;
        this.date = date ? date : new Date();
        this.name = name || "NoName";
        this.customer = customer;
    }

    totalAmount = () => {
        let retVal = 0;
        for (let i = 0; i < this.services.length; i++) {
            const current = this.services[i];
            retVal += current.isChecked ? (current instanceof WEBService) ? current.cost + (current.pages * current.lang * 30) : current.cost : 0

        }
        return retVal;
    };


    clone = (newDate?:boolean): ITBudget => {
        const newServ: ITService[] = [];
        for (let i = 0; i < this.services.length; i++) {
            const current = this.services[i];
            newServ.push(current instanceof WEBService ?
                new WEBService(current.name, current.cost, current.text, current.pages, current.lang, current.hint, current.isChecked)
                : new ITService(current.name, current.cost, current.text, current.hint, current.isChecked))
        }
        return new ITBudget(newServ, this.name, newDate?new Date():this.date, this.customer)
    }
    equals=(budget : ITBudget):boolean=>{
        let eq=true;
        for (let i = 0; i < budget.services.length; i++) {
            eq=eq&&this.services[i].equals(budget.services[i])
        }
        return eq && this.name===budget.name && this.customer===budget.customer;
    }
}

