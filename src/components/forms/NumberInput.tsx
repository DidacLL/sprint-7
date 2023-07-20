import React, {useEffect, useState} from "react";
import {NumberInputProps} from "../props/NumberInputProps";

export const NumberInput = (props: NumberInputProps) => {


    let service = props.service;

    //-------------------------------------------------------------------------------------------------------STATE HOOKS

    const [showVal, setShowVal] = useState(service.pages ? (props.id === 1 ? service.pages : service.lang) : props.minVal);

    //------------------------------------------------------------------------------------------------------EFFECT HOOKS


    useEffect(() => {
        props.onChange(Math.max(showVal, props.minVal))
        // localStorage.setItem("number_input_"+props.id,JSON.stringify(showVal))
    }, [showVal]);
    useEffect(() => {
        if (service.isChecked) setShowVal(props.id === 1 ? (service.pages || props.minVal) : (service.lang || props.minVal));
        // return setShowVal(props.minVal)
    }, [props.service.isChecked])

    //----------------------------------------------------------------------------------------------------------HANDLERS
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowVal(e.currentTarget.name === "add" ? Math.max(showVal + 1, props.minVal) : Math.max(showVal - 1, props.minVal));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setShowVal(Math.max(parseInt(e.target.value), props.minVal))
    }


    //----------------------------------------------------------------------------------------------------RETURN DISPLAY
    return <div style={{padding: "1em"}}>
        <label>{props.text} </label>
        <button
            name="add"
            onClick={handleClick}
        >+
        </button>
        <input
            value={showVal}
            type="number"
            min={1}
            onChange={handleChange}
        />
        <button
            name="sub"
            onClick={handleClick}
        >-
        </button>
    </div>;
};