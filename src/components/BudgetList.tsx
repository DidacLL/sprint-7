import {StyledContainer} from "./styled/StyledContainer";
import React, {useEffect, useState} from "react";
import {BudgetRow} from "./BudgetRow";
import {IconButton, Tooltip} from "@mui/material";
import {DeleteForever, Refresh} from "@mui/icons-material";
import {ITBudget} from "../classes/ITBudget";
import {SearchBudget} from "./forms/SearchBudget";


interface BudgetListProps {
    map: Map<string, ITBudget>,
    changeBudget: (name: string) => void
}

export function BudgetList({map, changeBudget}: BudgetListProps) {
    // const savedData = localStorage.getItem("saved_budgets");
    // const list = savedData ?
    //     JSON.parse(savedData) : []

    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        //todo SEARCH
    }, [searchQuery]);
    useEffect(() => {
        console.log("map changed")
    }, [map]);
    return <StyledContainer>
        <div style={{
            display:"flex",
            flexDirection:"column",
            padding: "1em",
            backgroundColor: "cornflowerblue",
            borderRadius: "1em",
            flexGrow:"1",
            // maxHeight:"85%",
            overflowY: "scroll"
        }}>

            {Array.from(map.values()).map((el) => {
                return (
                    <BudgetRow budget={el} onSelect={changeBudget}/>
                )
            })}
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "1em 2em 1em 2em",
            // minHeight:"4em"
        }}>

            <Tooltip title={"Refresh..."}>
                <IconButton><Refresh></Refresh></IconButton>
            </Tooltip>
            <Tooltip title={"Delete All Data"}>
                <IconButton><DeleteForever></DeleteForever></IconButton>
            </Tooltip>
            <SearchBudget search={setSearchQuery}/>
        </div>
    </StyledContainer>;
}