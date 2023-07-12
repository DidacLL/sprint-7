import React, {useEffect, useRef, useState} from "react";
import {CheckInputProps} from "../props/CheckInputProps";
import {StyledList} from "../styled/StyledList";
import {NumberInput} from "./NumberInput";
import {WEBService} from "../classes/WEBService";


export const CheckInput = (props: CheckInputProps) => {
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const [isChecked, setIsChecked] = useState(false);
    const [pages, setPages] = useState(0);
    const [languages, setLanguages] = useState(0);
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS
    const index=useRef(props.index);
    const service=useRef(props.service);
    useEffect(() => {
        if (!isChecked) {
            setPages(0);
            setLanguages(0);
            props.updateAmount(0, index.current);
        } else {
            if(service.current instanceof WEBService && (pages===0||languages===0)){
                setPages(1);
                setLanguages(1)
            }
            const totalCost = service.current.cost + pages * languages * 30 ;
            props.updateAmount(totalCost, index.current);
        }

    }, [pages, languages, isChecked]);
    //----------------------------------------------------------------------------------------------------------HANDLERS
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const addPages = (val:number) => {
        setPages(val);
    };
    const addLanguages = (val:number) => {
        setLanguages(val);
    };
    //----------------------------------------------------------------------------------------------------RETURN DISPLAY
    return <>
        <StyledList>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}/>
            <label>{service.current.text}</label>
        </StyledList>
        
        {isChecked && service.current instanceof WEBService ? <div style={{
            border: "4px solid black",
            maxWidth:"fit-content",
            borderRadius: " 10px",
            padding: "2em",
            display: "flex",
            flexDirection: "column"
        }}>
            <NumberInput text={"Número de páginas: "} onChange={addPages} minVal={1}/>
            <NumberInput text={"Número de idiomas: "} onChange={addLanguages} minVal={1}/>

        </div> : ""}
    </>;
};
