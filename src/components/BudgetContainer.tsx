import {Form} from "./forms/Form";
import {ButtonGroup, IconButton, Tooltip} from "@mui/material";
import {Delete, SaveAsRounded, Share} from "@mui/icons-material";
import {ITBudget} from "../classes/ITBudget";
import {StyledContainer} from "./styled/StyledContainer";
import React, {useEffect, useState} from "react";
import {ITModal} from "./forms/ITModal";

interface CurrentBudgetProps {
    initialBudget: ITBudget
}

export function BudgetContainer({initialBudget}: CurrentBudgetProps) {


    const [budget, setBudget] = useState(initialBudget);
    const [saveAs, setSaveAs] = useState({name: "", client: ""});
    const [reset, setReset] = useState(false);


    useEffect(() => {
        if(reset){

            // setReset(false);
        }
    }, [reset]);
    const handleReset = () => {setReset(!reset);};
    const handleSaveAs = () => {
        //todo
        // 1- open modal
        // 2- capture title and client
        // 3-add budget to local storage  by saveAs state
        // 3.1- recover localStorage
        // 3.2 - add new value
        // 3.3- save to localStorage
    };
    return <StyledContainer>
        <div style={{padding: "0.5em", borderRadius: "1em", minHeight: "90%"}}>

            <Form budget={budget}></Form>
        </div>
        <ButtonGroup style={{width: "100%", justifyContent: "space-around"}}>
            <Tooltip title={"Save Budget"}>
                <IconButton onClick={handleSaveAs}><SaveAsRounded> </SaveAsRounded></IconButton>
            </Tooltip>
            <Tooltip title={"Reset Formulary"}>
                <IconButton onClick={()=>setReset(true)} aria-label="info" ><Delete></Delete> </IconButton>
            </Tooltip>
                <ITModal
                    open={reset}
                    onClose={()=>setReset(false)}
                    title={"Reset Data"}
                    message={"All you sure you want to clear current formulary?"}
                    onConfirm={handleReset}/>

            <Tooltip title={"Share Budget"}>
                <IconButton><Share> Share </Share></IconButton>
            </Tooltip>
        </ButtonGroup>
    </StyledContainer>;
}