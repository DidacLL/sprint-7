import {ITService} from "./ITService";

export class WEBService extends ITService {
    pages: number;
    lang: number;

    constructor(name: string, cost: number, text: string, pages: number, lang: number, hint:string) {
        super(name, cost, text,hint);
        this.pages = pages;
        this.lang = lang;
    }
}