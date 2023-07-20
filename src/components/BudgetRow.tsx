import Typography from "@mui/material/Typography";
import {Button, ButtonGroup, IconButton} from "@mui/material";
import {Delete, Share} from "@mui/icons-material";
import React from "react";
import {ITBudget} from "../classes/ITBudget";
import {printShortDate} from "../utils/utils";


interface BudgetRowProps {
    el: ITBudget
}


export const BudgetRow = (props: BudgetRowProps) => <Button
    style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        margin: "2.5%"
    }}>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between !important", width: "80%"}}>
        <div style={{minWidth: "60%", textAlign: "left"}}>
            <Typography>{props.el.name}</Typography>
        </div>
        <div style={{textAlign: "right"}}>
            <Typography>{printShortDate(props.el.date)}</Typography>
        </div>
    </div>
    <ButtonGroup style={{justifyContent: "space-around", width: "20%"}}>
        <IconButton><Delete></Delete></IconButton>
        <IconButton><Share></Share></IconButton>
    </ButtonGroup>
</Button>;