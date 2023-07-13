export class ITService {
	constructor(name: string,cost:number,text:string, hint:string) {
		this.text=text;
		this.name=name;
		this.cost=cost;
		this.hint=hint;
	}
	name: string;
	cost: number;
	text:string;
	hint: string;


}

