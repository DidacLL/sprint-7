import {ITService} from "../classes/ITService";
import {WEBService} from "../classes/WEBService";
import {ITBudget} from "../classes/ITBudget";

export const parseLoadedData = (savedData: string) => {
    const unBudget = JSON.parse(savedData);
    const services:ITService[]= [];
    for (let i = 0; i < unBudget.services.length; i++) {
        const current= unBudget.services[i];
        services[i]= current.pages?
            new WEBService(current.name,current.cost,current.text,current.pages,current.lang,current.hint,current.isChecked)
            :new ITService(current.name,current.cost,current.text,current.hint,current.isChecked);
    }
    return new ITBudget(services)
};