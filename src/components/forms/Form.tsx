import React, {useEffect, useState} from "react";
import {CheckInput} from "./CheckInput";
import {ITService} from "../classes/ITService";

interface FormParams {
    servicesList: ITService[];
}

export const Form = (props: FormParams) => {
    const jsonPrices = localStorage.getItem('prices');
    const savedAmount = localStorage.getItem('total_amount');
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const [prices, setPrices] = useState( jsonPrices ? JSON.parse(jsonPrices) : [0, 0, 0])
    const [totalAmount, setTotalAmount] = useState(savedAmount? JSON.parse(savedAmount):0);
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS
    useEffect(() => {
        setTotalAmount(prices.reduce((a:number, b:number) => a + b))
        localStorage.setItem('prices', JSON.stringify(prices))
        localStorage.setItem('total_amount', JSON.stringify(totalAmount))
    }, [prices]);
    //----------------------------------------------------------------------------------------------------------HANDLERS
    const updateAmount = (value: number, index: number) => {
        let newArr = [...prices];
        newArr[index] = value;
        setPrices(newArr)
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
            {props.servicesList.map((el: ITService, index: number) => {
                return <CheckInput service={el} updateAmount={updateAmount} index={index}/>
            })}
        </ul>
        <label>Preu: ${totalAmount}€</label>
    </form>;
};
