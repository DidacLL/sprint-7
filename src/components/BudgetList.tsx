import {StyledContainer} from "./styled/StyledContainer";
import React, {useEffect} from "react";
import {BudgetRow} from "./BudgetRow";
import {IconButton, Tooltip} from "@mui/material";
import {DeleteForever, Refresh} from "@mui/icons-material";
import {ITBudget} from "../classes/ITBudget";


interface BudgetListProps {
    map: Map<string, ITBudget>,
    changeBudget: (name: string) => void
}

export function BudgetList({map, changeBudget}: BudgetListProps) {
    // const savedData = localStorage.getItem("saved_budgets");
    // const list = savedData ?
    //     JSON.parse(savedData) : []

    useEffect(() => {
        console.log("map changed")
    }, [map]);
    return <StyledContainer>
        <div style={{
            padding: "0.5em",
            backgroundColor: "cornflowerblue",
            borderRadius: "1em",
            height: "90%",
            overflowY: "scroll"
        }}>

            {Array.from(map.values()).map((el) => {
                return (
                    <BudgetRow el={el}/>
                )
            })}
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "1em 2em 1em 2em",
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