import React, {useEffect, useState} from "react";
import {CheckInput} from "./CheckInput";
import {ITService} from "../../classes/ITService";
import {ITBudget} from "../../classes/ITBudget";

interface FormParams {
    budget: ITBudget,
    updateTotal: () => void
}

export const Form = (props: FormParams) => {
    const savedAmount = localStorage.getItem('total_amount');
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const [totalAmount, setTotalAmount] = useState(savedAmount ? JSON.parse(savedAmount) : 0);
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS
    useEffect(() => {
        localStorage.setItem("current_budget", JSON.stringify(props.budget))
        localStorage.setItem('total_amount', JSON.stringify(totalAmount))
    }, [totalAmount]);
    useEffect(() => {
        setTotalAmount(props.budget.totalAmount());
    }, [props.budget])
    //----------------------------------------------------------------------------------------------------------HANDLERS
    const updateAmount = () => {
        setTotalAmount(props.budget.totalAmount)
        props.updateTotal();
    };


    //----------------------------------------------------------------------------------------------------RETURN DISPLAY
    return <form
        style={{
            textAlign: "left",
            padding: "5em"
        }}>
        <label>
            Select desired services:
        </label>
        <ul>
            {props.budget.services.map((el: ITService) => {
                return <CheckInput service={el} updateAmount={updateAmount}/>
            })}
        </ul>
        {/*todo move to styled component*/}
        <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "flex-end"}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "40%"
            }}>
                <label>Price:</label> <label>{totalAmount}€</label>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "40%"
            }}>
                <label>Taxes(10%): </label> <label>{totalAmount * 0.1}€</label>
            </div>
        </div>

    </form>;
};
