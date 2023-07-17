import {ITService} from "./ITService";
import {WEBService} from "./WEBService";

export class ITBudget {
	constructor(itServices:ITService[],date?:Date,name?:string,clientName?:string) {
		this.services =itServices;
		this.date=date?date:new Date();
		this.name=name;
		this.clientName=name;

	}

	services!: ITService[];
	date!: Date;
	name: string | undefined;
	clientName:string | undefined;

	totalAmount = () => {
		let retVal=0;
		for (let i = 0; i < this.services.length; i++) {
			const current= this.services[i];
			retVal+= current.isChecked?
				(current instanceof WEBService)?
					current.cost + (current.pages*current.lang*30)
					: current.cost
				:0

		}
		return retVal;
	};


}

