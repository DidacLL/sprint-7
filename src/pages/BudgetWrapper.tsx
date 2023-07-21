import {BudgetEditor} from "../components/BudgetEditor";
import {BudgetList} from "../components/BudgetList";
import React, {useEffect, useState} from "react";
import {ITBudget} from "../classes/ITBudget";
import {parseBudgetMap, parseLoadedBudget} from "../utils/utils";
import {WEBService} from "../classes/WEBService";
import {ITService} from "../classes/ITService";

export const defaultBudget = () => new ITBudget([
    new WEBService("WEB",
        500,
        "Una pàgina web",
        1,
        1,
        "Creamos una web moderna y optimizada. Selecciona el numero de pagina deseado y los idiomas disponibles que necesites."),
    new ITService("SEO",
        300,
        "Una consultoria SEO",
        "Realizamos una consultoria SEO de los servicios y entorno de su empresa"),
    new ITService("ADS",
        200,
        "Una campanya de Google Ads",
        "Realizamos una campaña completa a través de Google Ads, lo que nos permite garantizar un mínimo de visitas aseguradas")
]);

export function BudgetWrapper() {

    //---------current budget load
    const savedData = localStorage.getItem("current_budget")
    //---------Budget Map load
    const savedList = localStorage.getItem("saved_budgets");


    //-----------------------------------------------------------------------------------------------------STATE HOOKS
    const [currentBudget, setCurrentBudget] = useState<ITBudget>(savedData ? parseLoadedBudget(savedData) : defaultBudget);
    const [mapBudgets, setMapBudgets] = useState(savedList ? parseBudgetMap(savedList) : new Map<string, ITBudget>())


    function changeBudget(name: string) {
        let obj = mapBudgets.get(name);
        if (obj) setCurrentBudget(obj.clone())
    }

    function resetCurrent() {
        setCurrentBudget(defaultBudget())
    }

    useEffect(() => {
        localStorage.setItem("current_budget", JSON.stringify(currentBudget));
    }, [currentBudget]);
    useEffect(() => {
        // localStorage.setItem("saved_budgets",JSON.stringify(mapBudgets.values()));

    }, [mapBudgets]);

    function saveAs(name: string, customer: string,overwrite?:boolean) {
        if(mapBudgets.has(name)&&!overwrite) return false;
        const newBudget = currentBudget.clone(true);
        newBudget.name = name;
        newBudget.customer = customer;
        mapBudgets.set(name, newBudget);
        console.log(mapBudgets.get(name));
        const arr = Array.from(mapBudgets.values());
        localStorage.setItem("saved_budgets", JSON.stringify(arr));
        return true;
    }

    return <div style={{
        display: "flex",
        flexFlow: "wrap",
        backgroundColor: "cornflowerblue",
        height: "80vh"
    }}>
        <BudgetEditor currentBudget={currentBudget} saveAs={saveAs} reset={resetCurrent}/>
        <BudgetList map={mapBudgets} changeBudget={changeBudget}/>
    </div>;
}