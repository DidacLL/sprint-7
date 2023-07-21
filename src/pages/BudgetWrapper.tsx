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
    const mainMap = savedList ? parseBudgetMap(savedList) : new Map<string, ITBudget>();
    const [shownBudgets, setShownBudgets] = useState(mainMap)
    const [searchQuery, setSearchQuery] = useState("");

    function changeBudget(name: string) {
        let obj = shownBudgets.get(name);
        if (obj) setCurrentBudget(obj.clone())
    }

    function resetCurrent() {
        setCurrentBudget(defaultBudget())
    }
    function deleteBudged(name: string){
        mainMap.delete(name.trim().toLowerCase());
        setShownBudgets(mainMap);
        // setSearchQuery("");
        const arr = Array.from(mainMap.values());
        localStorage.setItem("saved_budgets", JSON.stringify(arr));
    }

    useEffect(() => {
        if (searchQuery.length>0) {
            const keys = Array.from(mainMap.keys());
            const selection = new Map<string, ITBudget>();
            const regex = new RegExp(searchQuery.split('').join('.*'), 'i');
            for (let i = 0; i < keys.length; i++) {
                const currentKey = keys[i];
                if (currentKey.match(regex)) {
                    let obj = mainMap.get(currentKey);
                    if (obj) selection.set(currentKey, obj)
                }
            }
            setShownBudgets(selection);
        }else {
            setShownBudgets(mainMap);
        }
    }, [searchQuery]);
    useEffect(() => {
        localStorage.setItem("current_budget", JSON.stringify(currentBudget));
    }, [currentBudget]);
    useEffect(() => {
        // localStorage.setItem("saved_budgets",JSON.stringify(shownBudgets.values()));

    }, [shownBudgets]);

    function saveAs(name: string, customer: string,overwrite?:boolean) {
        const chkName=name.trim().toLowerCase();
        if(mainMap.has(chkName)&&!overwrite) return false;
        const newBudget = currentBudget.clone(true);
        newBudget.name = name;
        newBudget.customer = customer;
        mainMap.set(chkName, newBudget);
        const arr = Array.from(mainMap.values());
        localStorage.setItem("saved_budgets", JSON.stringify(arr));
        setShownBudgets(mainMap)
        return true;
    }

    return <div style={{
        display: "flex",
        flexFlow: "wrap",
        backgroundColor: "cornflowerblue",
        height: "80vh"
    }}>
        <BudgetEditor currentBudget={currentBudget} saveAs={saveAs} reset={resetCurrent}/>
        <BudgetList map={shownBudgets} changeBudget={changeBudget} setSearchQuery={setSearchQuery} deleteBudget={deleteBudged}/>
    </div>;
}