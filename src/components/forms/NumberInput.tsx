import React, {useEffect, useState} from "react";
import {NumberInputProps} from "../props/NumberInputProps";
import {Button} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export const NumberInput = (props: NumberInputProps) => {


    let service = props.service;

    //-------------------------------------------------------------------------------------------------------STATE HOOKS

    const [showVal, setShowVal] = useState(service.pages ? (props.id === 1 ? service.pages : service.lang) : props.minVal);

    //------------------------------------------------------------------------------------------------------EFFECT HOOKS


    useEffect(() => {
        props.onChange(Math.max(showVal, props.minVal))
    }, [showVal]);
    useEffect(() => {
        if (service.isChecked) setShowVal(props.id === 1 ? (service.pages || props.minVal) : (service.lang || props.minVal));
    }, [props])

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
    return <div style={{ display: "flex", flexFlow: "wrap"}}>
        <label>{props.text} </label>
        <div style={{
            flexWrap: "nowrap"
        }}>
            <Button
                name="add"
                onClick={handleClick}
            ><ExpandLess/>
            </Button>
            <input

                value={showVal}
                type="number"
                min={1}
                onChange={handleChange}
                style={{
                    width:"3em",
                    textAlign:"center"
                }}
            />
            <Button
                name="sub"
                onClick={handleClick}
            ><ExpandMore/>
            </Button>
        </div>
    </div>
        ;
};