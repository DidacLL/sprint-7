import React, {useEffect, useState} from "react";
import {NumberInputProps} from "../props/NumberInputProps";

export const NumberInput = (props: NumberInputProps) => {

    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const [showVal, setShowVal]= useState(1)

    //------------------------------------------------------------------------------------------------------EFFECT HOOKS

    useEffect(() => {
        props.onChange(Math.max(showVal,1))
    },[showVal]);

    //----------------------------------------------------------------------------------------------------------HANDLERS
    const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setShowVal(e.currentTarget.name==="add"? Math.max(showVal+1,1):Math.max(showVal-1,1));
    }

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setShowVal(Math.max(parseInt(e.target.value),1))
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