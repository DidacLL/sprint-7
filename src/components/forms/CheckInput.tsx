import React, {useEffect, useState} from "react";
import {CheckInputProps} from "../props/CheckInputProps";
import {StyledList} from "../styled/StyledList";
import {NumberInput} from "./NumberInput";
import {WEBService} from "./WEBService";


export const CheckInput = (props: CheckInputProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [pages, setPages] = useState(0);
    const [languages, setLanguages] = useState(0);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
        console.log("Button " + props.service.name + " has changed to: " + isChecked);
    };
    useEffect(() => {
        console.log("useeffect " + props.service.name);
        if (!isChecked) {
            setPages(0);
            setLanguages(0);
            props.updateAmount(0, props.index);
        } else {
            if(props.service instanceof WEBService && (pages===0||languages===0)){
                setPages(1);
                setLanguages(1)
            }
            const totalCost = props.service.cost + pages * languages * 30 ;
            props.updateAmount(totalCost, props.index);
        }

    }, [pages, languages, isChecked]);
    const addPages = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPages(parseInt(event.target.value));
    };

    const addLanguages = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguages(parseInt(event.target.value));
    };

    return <>
        <StyledList>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}/>
            <label>{props.service.text}</label>
        </StyledList>
        {isChecked && props.service instanceof WEBService ? <div style={{
            border: "4px solid black",
            maxWidth:"fit-content",
            borderRadius: " 10px",
            padding: "2em",
            display: "flex",
            flexDirection: "column"
        }}>
            <NumberInput text={"Número de páginas: "} onChange={addPages}/>
            <NumberInput text={"Número de idiomas: "} onChange={addLanguages}/>

        </div> : ""}
    </>;
};
