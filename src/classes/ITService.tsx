export class ITService {
    isChecked: boolean
    name: string;
    cost: number;
    text: string;
    hint: string;

    constructor(name: string, cost: number, text: string, hint: string, isChecked?: boolean) {
        this.text = text;
        this.name = name;
        this.cost = cost;
        this.hint = hint;
        this.isChecked = isChecked || false;

    }
    public equals:(service: ITService) => boolean = (service: ITService)=>{
        return this.hint===service.hint &&
            this.isChecked===service.isChecked &&
            this.name===service.name &&
            this.text===service.text &&
            this.cost===service.cost;
    }
}

