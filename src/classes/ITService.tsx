export class ITService {
	constructor(name: string,cost:number,text:string, hint:string,isChecked?:boolean) {
		this.text=text;
		this.name=name;
		this.cost=cost;
		this.hint=hint;
		this.isChecked=isChecked||false;

	}
	isChecked:boolean
	name: string;
	cost: number;
	text:string;
	hint: string;


}

