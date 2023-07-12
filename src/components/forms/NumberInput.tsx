import React, {useEffect, useState} from "react";
import {NumberInputProps} from "../props/NumberInputProps";

export const NumberInput = (props: NumberInputProps) => {

    const savedVal=localStorage.getItem(props.onChange.name);

    //-------------------------------------------------------------------------------------------------------STATE HOOKS

    const [showVal, setShowVal]= useState((savedVal)?JSON.parse(savedVal):1);

    //------------------------------------------------------------------------------------------------------EFFECT HOOKS

    useEffect(() => {
        props.onChange(Math.max(showVal,1))
        localStorage.setItem(props.onChange.name,JSON.stringify(showVal))
    },[showVal]);

    //----------------------------------------------------------------------------------------------------------HANDLERS
    const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setShowVal(e.currentTarget.name==="add"? Math.max(showVal+1,props.minVal):Math.max(showVal-1,props.minVal));
    }

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setShowVal(Math.max(parseInt(e.target.value),props.minVal))
    }



    //----------------------------------------------------------------------------------------------------RETURN DISPLAY
    return <div style={{padding: "1em"}}>
        <label>{props.text} </label>
        <button
            name="add"
            onClick={handleClick}
        >+</button>
        <input
            value={showVal}
            type="number"
            min={1}
            onChange={handleChange}
        />
        <button
            name="sub"
            onClick={handleClick}
        >-</button>
    </div>;
};