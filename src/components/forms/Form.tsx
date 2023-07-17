import React, {useEffect, useState} from "react";
import {CheckInput} from "./CheckInput";
import {ITService} from "../../classes/ITService";
import {ITBudget} from "../../classes/ITBudget";

interface FormParams {
    budget: ITBudget;
}

export const Form = (props: FormParams) => {
    // const jsonPrices = localStorage.getItem('prices');
    const savedAmount = localStorage.getItem('total_amount');
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    // const [prices, setPrices] = useState( jsonPrices ? JSON.parse(jsonPrices) : [0, 0, 0])
    const [totalAmount, setTotalAmount] = useState(savedAmount? JSON.parse(savedAmount):0);
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS
    useEffect(() => {
        // setTotalAmount(prices.reduce((a:number, b:number) => a + b))
        // localStorage.setItem('prices', JSON.stringify(prices))
        localStorage.setItem("current_budget",JSON.stringify(props.budget))
        localStorage.setItem('total_amount', JSON.stringify(totalAmount))
    }, [totalAmount]);
    //----------------------------------------------------------------------------------------------------------HANDLERS
    const updateAmount = () => {
        // let newArr = [...prices];
        // newArr[index] = value;
        // setPrices(newArr)
        setTotalAmount(props.budget.totalAmount)
    };


    //----------------------------------------------------------------------------------------------------RETURN DISPLAY
    return <form
        style={{
            textAlign: "left",
            padding: "5em"
        }}>
        <label>
            ¿Qué quieres hacer?:
        </label>
        <ul>
            {props.budget.services.map((el: ITService) => {
                return <CheckInput service={el} updateAmount={updateAmount}/>
            })}
        </ul>
        <label>Preu: ${totalAmount}€</label>
    </form>;
};
