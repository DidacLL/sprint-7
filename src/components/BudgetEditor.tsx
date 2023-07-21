import {Form} from "./forms/Form";
import {ButtonGroup, IconButton, Tooltip} from "@mui/material";
import {Delete, SaveAsRounded, Share} from "@mui/icons-material";
import {ITBudget} from "../classes/ITBudget";
import {StyledContainer} from "./styled/StyledContainer";
import React, {useEffect, useRef, useState} from "react";
import {ITModal} from "./forms/ITModal";
import {SaveModal} from "./forms/SaveModal";
import Typography from "@mui/material/Typography";
import {printShortDate} from "../utils/utils";

interface BudgetEditorProps {
    currentBudget: ITBudget
    saveAs: (name: string, customer: string, overwrite?: boolean) => boolean
    reset: () => void
}

export function BudgetEditor(props: BudgetEditorProps) {

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //------------------------------------------------------------------------ STATE HOOKS
    const [overwriteModal, setOverwriteModal] = useState({name: "", customer: ""});
    const [saveModal, setSaveModal] = useState(false);
    const [resetModal, setResetModal] = useState(false);
    const [finalPrice, setFinalPrice] = useState((props.currentBudget.totalAmount() + props.currentBudget.totalAmount() * 0.1));
    const ref = useRef<HTMLDivElement>(null);
    //------------------------------------------------------------------------ EFFECT HOOKS
    useEffect(() => {
        setSaveModal(false);
        setResetModal(false);
        setFinalPrice((props.currentBudget.totalAmount() + props.currentBudget.totalAmount() * 0.1))
        // let element = window.document.getElementById("editor")
        if(ref.current){
            ref.current.scrollIntoView({ behavior: 'smooth' });
            // element.scrollTo(0,0);
        }
    }, [props.currentBudget]);

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //------------------------------------------------------------------------ HANDLERS
    const handleReset = () => {
        props.reset();
        setResetModal(!resetModal);

    };
    const handleSaveAs = () => {
        setSaveModal(true);
    };
    const handleOverwrite = () => {
        setOverwriteModal({name: "", customer: ""});
        setResetModal(false);
        setSaveModal(false);
        updateNameAndCustomer(overwriteModal.name, overwriteModal.customer, true);
    };
    const updateNameAndCustomer = (name: string, customer: string, overwrite?: boolean) => {
        if (props.saveAs(name, customer, overwrite)) {
            props.reset();
            setSaveModal(false);
        } else {
            setOverwriteModal({name: name, customer: customer});
        }
    }
    const updateTotal = () => {
        setFinalPrice((props.currentBudget.totalAmount() + props.currentBudget.totalAmount() * 0.1))
    }


    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //------------------------------------------------------------------------ HTML
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    return <StyledContainer id={"editor"}>
    <div style={{
        flexGrow:1,
        // height:"100%",
        objectFit:"contain"
    }}>
        <div style={{
            textAlign: "left",
            padding: "0.5em",
            minHeight:"90%",
            // borderRadius: "1em",
            // flexGrow:"9"
            // overflowY: "scroll"
        }}>

            {/*XXXXXXXXXXXXXXXXXXX NAME | CUSTOMER | DATE XXXXXXXXXXXXXXXXXXX*/}
            {props.currentBudget.name && props.currentBudget.name !== "NoName" ?
                    <Typography ref={ref}  >Name: {props.currentBudget.name}</Typography>:
                    <Typography ref={ref}  >New Budget </Typography>
            }

            {props.currentBudget.customer && props.currentBudget.customer !== "" ?
                    <Typography>Customer: {props.currentBudget.customer} </Typography>:""}

            {props.currentBudget.name && props.currentBudget.name !== "NoName" ?
                <Typography>Date Created: {printShortDate(props.currentBudget.date)}</Typography>:""}

            {/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX FORM XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/}
            <Form budget={props.currentBudget} updateTotal={updateTotal}></Form>
        </div>


        {/*XXXXXXXXXXXXXXXXXXXXXXXXXXX BUTTONS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/}
        <div style={{
            display: "flex",
            // flexDirection: "row",
            justifyContent: "space-between",
            // width: "100%",
            alignItems: "flex-end",
            alignSelf:"flex-end",
            flexGrow:"1"
        }}>
            <Typography style={{textAlign: "center", flexGrow: "1"}}>Total: {finalPrice} €</Typography>
            <ButtonGroup style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>

                {/*XXXXXXXXXXXXXXXXXXX SAVE XXXXXXXXXXXXXXXXXXX*/}
                <Tooltip title={"Save Budget"}>
                    <IconButton onClick={handleSaveAs}><SaveAsRounded> </SaveAsRounded></IconButton>
                </Tooltip>
                <ITModal
                    open={overwriteModal.name !== ""}
                    onClose={() => setOverwriteModal({name: "", customer: ""})}
                    title={"Existing Budget Name"}
                    message={"Do you want to overwrite it? "}
                    onConfirm={handleOverwrite}/>
                <SaveModal open={saveModal}
                           onClose={() => setSaveModal(false)}
                           onSubmit={updateNameAndCustomer}
                           values={[props.currentBudget.name, props.currentBudget.customer]}/>

                {/*XXXXXXXXXXXXXXXXXXX RESET XXXXXXXXXXXXXXXXXXX*/}
                <Tooltip title={"Reset Formulary"}>
                    <IconButton onClick={() => setResetModal(true)} aria-label="info"><Delete></Delete> </IconButton>
                </Tooltip>
                <ITModal
                    open={resetModal}
                    onClose={() => setResetModal(false)}
                    title={"Reset Data"}
                    message={"Are you sure you want to clear current formulary?"}
                    onConfirm={handleReset}/>


                {/*XXXXXXXXXXXXXXXXXXX SHARE XXXXXXXXXXXXXXXXXXX*/}
                <Tooltip title={"Share Budget"}>
                    <IconButton><Share> Share </Share></IconButton>
                </Tooltip>
            </ButtonGroup>
        </div>

    </div>

    </StyledContainer>;
}
