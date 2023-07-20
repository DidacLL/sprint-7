import {Form} from "./forms/Form";
import {ButtonGroup, IconButton, Tooltip} from "@mui/material";
import {Delete, SaveAsRounded, Share} from "@mui/icons-material";
import {ITBudget} from "../classes/ITBudget";
import {StyledContainer} from "./styled/StyledContainer";
import React, {useEffect, useState} from "react";
import {ITModal} from "./forms/ITModal";
import {SaveModal} from "./forms/SaveModal";
import Typography from "@mui/material/Typography";
import {printShortDate} from "../utils/utils";

interface BudgetEditorProps {
    currentBudget: ITBudget
    saveAs: (name: string, customer: string) => void
    reset: () => void
}

export function BudgetEditor(props: BudgetEditorProps) {


    // const [budget, setBudget] = useState(props);
    const [save, setSave] = useState(false);
    const [reset, setReset] = useState(false);
    const [finalPrice, setFinalPrice] = useState((props.currentBudget.totalAmount() + props.currentBudget.totalAmount() * 0.1))
    // const [update,setUpdate]=useState(false);
    const handleReset = () => {
        console.log("RESET1");
        props.reset();
        setReset(!reset);
    };

    useEffect(() => {
        setSave(false);
        setReset(false);
        setFinalPrice((props.currentBudget.totalAmount() + props.currentBudget.totalAmount() * 0.1))
        console.log("updating editor")
    }, [props.currentBudget])
    const handleSaveAs = () => {
        setSave(true);
    };
    const updateNameAndCustomer = (name: string, customer: string) => {
        props.saveAs(name, customer);
        setSave(false);
    }
    const updateTotal = () => {
        setFinalPrice((props.currentBudget.totalAmount() + props.currentBudget.totalAmount() * 0.1))
    }
    return <StyledContainer>

        <div style={{textAlign: "left", padding: "0.5em", borderRadius: "1em", height: "90%", overflowY: "scroll"}}>
            {
                props.currentBudget.name && props.currentBudget.name !== "NoNasme" ?
                    <Typography>Name: {props.currentBudget.name}</Typography>
                    :
                    ""
            }

            {
                props.currentBudget.customer && props.currentBudget.customer !== "" ?
                    <Typography>Customer: {props.currentBudget.customer} </Typography> :
                    ""
            }
            {
                props.currentBudget.name && props.currentBudget.name !== "NoNasme" ?
                    <Typography>Date Created: {printShortDate(props.currentBudget.date)}</Typography>
                    :
                    ""
            }
            <Form budget={props.currentBudget} updateTotal={updateTotal}></Form>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "flex-end"
        }}>
            <Typography style={{textAlign: "center", flexGrow: "1"}}>Total: {finalPrice} €</Typography>
            <ButtonGroup style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Tooltip title={"Save Budget"}>
                    <IconButton onClick={handleSaveAs}><SaveAsRounded> </SaveAsRounded></IconButton>
                </Tooltip>
                <SaveModal open={save} onClose={() => setSave(false)} onSubmit={updateNameAndCustomer}/>
                <Tooltip title={"Reset Formulary"}>
                    <IconButton onClick={() => setReset(true)} aria-label="info"><Delete></Delete> </IconButton>
                </Tooltip>
                <ITModal
                    open={reset}
                    onClose={() => setReset(false)}
                    title={"Reset Data"}
                    message={"All you sure you want to clear current formulary?"}
                    onConfirm={handleReset}/>

                <Tooltip title={"Share Budget"}>
                    <IconButton><Share> Share </Share></IconButton>
                </Tooltip>
            </ButtonGroup>
        </div>
    </StyledContainer>;
}