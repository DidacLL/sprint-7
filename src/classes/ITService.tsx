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


}

