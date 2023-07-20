import {ITService} from "../classes/ITService";
import {WEBService} from "../classes/WEBService";
import {ITBudget} from "../classes/ITBudget";

export function reconstructBudget(proto: { services: any[], name?: string, client?: string; }) {
    const services: ITService[] = [];
    for (let i = 0; i < proto.services.length; i++) {
        const current = proto.services[i];
        services[i] = current.pages ?
            new WEBService(current.name, current.cost, current.text, current.pages, current.lang, current.hint, current.isChecked)
            : new ITService(current.name, current.cost, current.text, current.hint, current.isChecked);
    }
    const retVal = new ITBudget(services);
    retVal.name = proto.name || "NoName";
    retVal.customer = proto.client
    return retVal;
}

export const parseLoadedBudget = (savedData: string) => {
    const proto = JSON.parse(savedData);
    return reconstructBudget(proto);
};
export const parseBudgetMap = (savedData: string): Map<string, ITBudget> => {
    const proto: any[] = JSON.parse(savedData);
    const map = new Map<string, ITBudget>();
    proto.forEach(current => {
        map.set(current.name, reconstructBudget(current));
    });
    return map;

}


export function clearCurrentData(all: boolean) {
    all ? localStorage.clear() : localStorage.removeItem("current_budget");
}

export function saveBudget(budget: ITBudget, map: Map<string, ITBudget>) {
    map.set(budget.name, budget);
    localStorage.setItem("saved-budgets", JSON.stringify(map.values()))
}

export function deleteBudget(budgetName: string, map: Map<string, ITBudget>) {
    map.delete(budgetName);
    localStorage.setItem("saved-budgets", JSON.stringify(map.values()))
}

export const printShortDate = (date: Date) => date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
