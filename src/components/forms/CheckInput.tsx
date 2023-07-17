import React, {useEffect, useState} from "react";
import {CheckInputProps} from "../props/CheckInputProps";
import {StyledList} from "../styled/StyledList";
import {NumberInput} from "./NumberInput";
import {WEBService} from "../../classes/WEBService";
import {InfoButton} from "./InfoButton";


export const CheckInput = (props: CheckInputProps) => {
    //-----------------------------------------------------------------------------------------------------LOCAL STORAGE
    const savedPages = localStorage.getItem("pages_" + props.service.name)
    const savedLanguages = localStorage.getItem("languages_" + props.service.name)
    // const savedChecked = localStorage.getItem('checked_' + props.service.name);


    
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const [isChecked, setIsChecked] = useState(props.service.isChecked);
    const [languages, setLanguages] = useState(savedLanguages ? JSON.parse(savedLanguages) : 0);
    const [pages, setPages] = useState(savedPages ? JSON.parse(savedPages) : 0);
    //------------------------------------------------------------------------------------------------------REF HOOKS
    // const service = useRef(props.service);
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS
    useEffect(() => {
        // localStorage.setItem("checked_" + props.service.name, JSON.stringify(isChecked))
        props.service.isChecked=isChecked;
        if (!isChecked) {
            setPages(0);
            setLanguages(0);
            props.updateAmount();
        } else {
            if (props.service instanceof WEBService && (pages === 0 || languages === 0)) {
                setPages(1);
                setLanguages(1)
            }
            // const totalCost = props.service.cost + pages * languages * 30;
            props.updateAmount();
        }
        if (props.service instanceof WEBService) {
            localStorage.setItem("pages_" + props.service.name, JSON.stringify(pages))
            localStorage.setItem("languages_" + props.service.name, JSON.stringify(languages))
        }

    }, [pages, languages, isChecked]);
    //----------------------------------------------------------------------------------------------------------HANDLERS
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const addPages = (val: number) => {
        setPages(val);
    };
    const addLanguages = (val: number) => {
        setLanguages(val);
    };
    //----------------------------------------------------------------------------------------------------RETURN DISPLAY
    return <>
        <StyledList>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}/>
            <label>{props.service.text} ({props.service.cost}€)</label>
            <InfoButton title={props.service.text} message={props.service.hint}/>
        </StyledList>

        {isChecked && props.service instanceof WEBService ? <div style={{
            border: "4px solid black",
            maxWidth: "fit-content",
            borderRadius: " 10px",
            padding: "2em",
            display: "flex",
            flexDirection: "column"
        }}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <NumberInput text={"Número de páginas: "} onChange={addPages} minVal={1}/>
                <InfoButton message={"Numero de paginas que conforman el proyecto (Minimo 1)"}
                            title={"Numero de paginas"}/>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <NumberInput text={"Número de idiomas: "} onChange={addLanguages} minVal={1}/>
                <InfoButton
                    message={"Numero de idiomas que estaran disponibles para traducir los textos en el proyecto (Minimo 1)"}
                    title={"Numero de idiomas"}/>
            </div>

        </div> : ""}
    </>;
};
