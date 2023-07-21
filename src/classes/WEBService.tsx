import {ITService} from "./ITService";

export class WEBService extends ITService {
    pages: number;
    lang: number;

    constructor(name: string, cost: number, text: string, pages: number, lang: number, hint: string, isChecked?: boolean) {
        super(name, cost, text, hint, isChecked);
        this.pages = pages;
        this.lang = lang;
    }

    public equals:(service: ITService) => boolean=(service: ITService)=>{
        return  service instanceof WEBService && this.pages===service.pages && this.lang===service.lang && this.hint===service.hint &&
            this.isChecked===service.isChecked &&
            this.name===service.name &&
            this.text===service.text &&
            this.cost===service.cost;
    }
}