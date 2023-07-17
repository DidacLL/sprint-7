import {ITService} from "../classes/ITService";
import {WEBService} from "../classes/WEBService";
import {ITBudget} from "../classes/ITBudget";

export function reconstructBudget(proto: { services: any[]; }) {
    const services: ITService[] = [];
    for (let i = 0; i < proto.services.length; i++) {
        const current = proto.services[i];
        services[i] = current.pages ?
            new WEBService(current.name, current.cost, current.text, current.pages, current.lang, current.hint, current.isChecked)
            : new ITService(current.name, current.cost, current.text, current.hint, current.isChecked);
    }
    return new ITBudget(services)
}

export const parseLoadedData = (savedData: string) => {
    const proto = JSON.parse(savedData);
    return reconstructBudget(proto);
};

export function clearData(all:boolean) {
    all?localStorage.clear(): localStorage.removeItem("current_budget");
}