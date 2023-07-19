import {StyledContainer} from "./styled/StyledContainer";
import {ITService} from "../classes/ITService";
import React from "react";
import {BudgetRow} from "./BudgetRow";
import {IconButton, Tooltip} from "@mui/material";
import {DeleteForever, Refresh} from "@mui/icons-material";


export function BudgetList() {
    const savedData = localStorage.getItem("saved_budgets");
    const list = savedData ?
        JSON.parse(savedData) : []

    return <StyledContainer>
        <div style={{padding: "0.5em", backgroundColor: "cornflowerblue", borderRadius: "1em", minHeight: "90%"}}>

            {list.map((el: ITService) => {
                return (
                    <BudgetRow el={el}/>
                )
            })}
        </div>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            padding:"1em 2em 1em 2em",
        }}>

            <Tooltip title={"Refresh..."}>
                <IconButton><Refresh></Refresh></IconButton>
            </Tooltip>
            <Tooltip title={"Delete All Data"}>
                <IconButton><DeleteForever></DeleteForever></IconButton>
            </Tooltip>
        </div>
    </StyledContainer>;
}