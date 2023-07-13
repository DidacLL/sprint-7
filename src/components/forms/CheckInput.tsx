import React, {useEffect, useRef, useState} from "react";
import {CheckInputProps} from "../props/CheckInputProps";
import {StyledList} from "../styled/StyledList";
import {NumberInput} from "./NumberInput";
import {WEBService} from "../classes/WEBService";
import {InfoButton} from "./InfoButton";


export const CheckInput = (props: CheckInputProps) => {
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const savedPages= localStorage.getItem("pages_"+props.service.name)
    const savedLanguages= localStorage.getItem("languages_"+props.service.name)
    const savedChecked = localStorage.getItem('checked_' +props.service.name);
    const [isChecked, setIsChecked] = useState(savedChecked?JSON.parse(savedChecked):false);
        const [languages, setLanguages] = useState(savedLanguages? JSON.parse(savedLanguages):0);
        const [pages, setPages] = useState(savedPages? JSON.parse(savedPages):0);
    //------------------------------------------------------------------------------------------------------REF HOOKS
    const index=useRef(props.index);
    const service=useRef(props.service);
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS
    useEffect(() => {
        localStorage.setItem("checked_"+service.current.name,JSON.stringify(isChecked))
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
        if(service.current instanceof WEBService){
            localStorage.setItem("pages_"+service.current.name,JSON.stringify(pages))
            localStorage.setItem("languages_"+service.current.name,JSON.stringify(languages))
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
            <label>{service.current.text} ({service.current.cost}€)</label>
            <InfoButton title={props.service.text} message={props.service.hint}/>
        </StyledList>
        
        {isChecked && service.current instanceof WEBService ? <div style={{
            border: "4px solid black",
            maxWidth:"fit-content",
            borderRadius: " 10px",
            padding: "2em",
            display: "flex",
            flexDirection: "column"
        }}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <NumberInput text={"Número de páginas: "} onChange={addPages} minVal={1}/>
                <InfoButton message={"Numero de paginas que conforman el proyecto (Minimo 1)"} title={"Numero de paginas"}/>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <NumberInput text={"Número de idiomas: "} onChange={addLanguages} minVal={1}/>
                <InfoButton message={"Numero de idiomas que estaran disponibles para traducir los textos en el proyecto (Minimo 1)"} title={"Numero de idiomas"}/>
            </div>

        </div> : ""}
    </>;
};
