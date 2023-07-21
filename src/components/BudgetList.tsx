import {StyledContainer} from "./styled/StyledContainer";
import React, {useEffect, useState} from "react";
import {BudgetRow} from "./BudgetRow";
import {IconButton, Tooltip} from "@mui/material";
import {CalendarMonth, DateRange, DeleteForever, Refresh, SortByAlpha} from "@mui/icons-material";
import {ITBudget} from "../classes/ITBudget";
import {SearchBudget} from "./forms/SearchBudget";


interface BudgetListProps {
    map: Map<string, ITBudget>,
    changeBudget: (name: string) => void,
    setSearchQuery: (value: string) => void,
    deleteBudget: (name: string) => void
}

export function BudgetList(props: BudgetListProps) {
    // const savedData = localStorage.getItem("saved_budgets");
    // const list = savedData ?
    //     JSON.parse(savedData) : []

    const [order, setOrder] = useState(0);


    useEffect(() => {
        setRefresh(true);
    }, [order]);
    useEffect(() => {

        setRefresh(!refresh)
    }, [props.map.size]);

    const [refresh, setRefresh] = useState(false);

    function deleteBudget(name : string) {
        setRefresh(true);
        props.deleteBudget(name)
    }

    const sortByName=(a:ITBudget, b:ITBudget) => a.name.localeCompare(b.name);
    const sortByNameAlt=(a:ITBudget, b:ITBudget) => b.name.localeCompare(a.name);
    const sortByDate=(a:ITBudget, b:ITBudget) => a.date.getTime() - b.date.getTime()
    const sortByDateAlt=(a:ITBudget, b:ITBudget) => b.date.getTime() - a.date.getTime()

    const budgets=() =>{
        switch (order) {
            case(1):
                return Array.from(props.map.values()).sort(sortByName);
            case 2:
                return Array.from(props.map.values()).sort(sortByDate);
            case 3:
                return Array.from(props.map.values()).sort(sortByNameAlt);
            case 4:
                return Array.from(props.map.values()).sort(sortByDateAlt)
            default:
                return Array.from(props.map.values());
        }
    }
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

            {budgets().map((el) => {
                return (
                    <BudgetRow budget={el} onSelect={props.changeBudget} delete={deleteBudget}/>
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

            <Tooltip title={"ResetOrder"}>
                <IconButton onClick={()=>setOrder(0)}><Refresh/></IconButton>
            </Tooltip>
            <Tooltip title={"Order By Name"}>
                <IconButton onClick={()=> {
                    setOrder(order===1?3:1);
                }}><SortByAlpha/></IconButton>
            </Tooltip>
            <Tooltip title={"Order By Date"}>
                <IconButton onClick={()=>setOrder(order===2?4:2)}><DateRange/></IconButton>
            </Tooltip>
            <Tooltip title={"Delete All Data"}>
                <IconButton><DeleteForever/></IconButton>
            </Tooltip>
            <SearchBudget search={props.setSearchQuery}/>
        </div>
    </StyledContainer>;
}