import React, {useEffect, useState} from "react";
import {CheckInputProps} from "../props/CheckInputProps";
import {StyledList} from "../styled/StyledList";
import {NumberInput} from "./NumberInput";
import {WEBService} from "../../classes/WEBService";
import {InfoButton} from "./InfoButton";


export const CheckInput = (props: CheckInputProps) => {
    //-------------------------------------------------------------------------------------------------------STATE HOOKS
    const [isChecked, setIsChecked] = useState(props.service.isChecked);
    const [languages, setLanguages] = useState(
        props.service instanceof WEBService ? props.service.pages : 0
    );
    const [pages, setPages] = useState(
        props.service instanceof WEBService ?
            props.service.lang : 0
    );
    //------------------------------------------------------------------------------------------------------REF HOOKS
    //------------------------------------------------------------------------------------------------------EFFECT HOOKS


    useEffect(() => {
        // localStorage.setItem("checked_" + props.service.name, JSON.stringify(isChecked))
        props.service.isChecked = isChecked;
        if (!isChecked) {
            setPages(0);
            setLanguages(0);
            const service = props.service;
            if (service instanceof WEBService) {
                service.pages = 1;
                service.lang = 1;
            }
            props.updateAmount();
        } else {
            if (props.service instanceof WEBService && (pages === 0 || languages === 0)) {
                setPages(1);
                setLanguages(1)
                props.service.pages = pages;
                props.service.lang = languages;

            }
            // const totalCost = props.service.cost + pages * languages * 30;
            props.updateAmount();
        }
        if (props.service instanceof WEBService) {
            // localStorage.setItem("pages_" + props.service.name, JSON.stringify(pages))
            // localStorage.setItem("languages_" + props.service.name, JSON.stringify(languages))
        }

    }, [pages, languages, isChecked]);
    useEffect(() => {
        setLanguages(props.service instanceof WEBService ? props.service.lang : 0)
        setIsChecked(props.service.isChecked)
        setPages(props.service instanceof WEBService ? props.service.pages : 0)
    }, [props.service])
    //----------------------------------------------------------------------------------------------------------HANDLERS
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const addPages = (val: number) => {
        if (props.service instanceof WEBService) props.service.pages = val;
        setPages(val);
    };
    const addLanguages = (val: number) => {
        if (props.service instanceof WEBService) props.service.lang = val;
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
                <NumberInput id={1} text={"Número de páginas: "} onChange={addPages} minVal={1}
                             service={props.service}/>
                <InfoButton message={"Numero de paginas que conforman el proyecto (Mínimo 1)"}
                            title={"Numero de paginas"}/>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <NumberInput id={2} text={"Número de idiomas: "} onChange={addLanguages} minVal={1}
                             service={props.service}/>
                <InfoButton
                    message={"Numero de idiomas que estaran disponibles para traducir los textos en el proyecto (Mínimo 1)"}
                    title={"Numero de idiomas"}/>
            </div>

        </div> : ""}
    </>;
};
