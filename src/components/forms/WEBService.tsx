import {ITService} from "./ITService";
export class WEBService extends ITService {
    pages: number;
    lang: number;

    constructor(name: string, cost: number, text: string, pages: number, lang: number) {
        super(name, cost, text);
        this.pages = pages;
        this.lang = lang;
    }
}