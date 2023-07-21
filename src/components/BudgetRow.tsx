import Typography from "@mui/material/Typography";
import {Button, ButtonGroup, IconButton} from "@mui/material";
import {ArrowRight, Delete, Share} from "@mui/icons-material";
import React from "react";
import {ITBudget} from "../classes/ITBudget";
import {printShortDate} from "../utils/utils";


interface BudgetRowProps {
    budget: ITBudget,
    onSelect: (name: string) => void
}


export const BudgetRow = (props: BudgetRowProps) =>
    <div style={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "1em",
        marginBottom: "1em",
        padding: "1em",
        flexGrow: "1"
    }}>
        <Button style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: "1",
            justifyContent: "space-between",
            // width: "95%",
            alignItems: "center"
        }}
                onClick={() => props.onSelect(props.budget.name)}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexGrow: "1"}}>
                <ArrowRight/>
                <div style={{flexGrow: "1", textAlign: "left", paddingLeft: "1em"}}>
                    <Typography>{props.budget.name}</Typography>
                </div>
                <div style={{textAlign: "right", paddingRight: "1em"}}>
                    <Typography>{printShortDate(props.budget.date)}</Typography>
                </div>
            </div>
        </Button>
        <ButtonGroup style={{justifyContent: "space-around"}}>
            <IconButton><Delete></Delete></IconButton>
            <IconButton><Share></Share></IconButton>
        </ButtonGroup>
    </div>;
