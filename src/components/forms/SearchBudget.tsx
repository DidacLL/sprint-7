import React, {useEffect, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import {Close, Search} from "@mui/icons-material";

interface SearchBudgetProps {
    search: (value: string) => void
}

export const SearchBudget = (props: SearchBudgetProps) => {
    const [searchText, setSearchText] = useState("");


    // useEffect(() => {
    //     setSearchText("");
    // }, [props]);


    useEffect(() => {
        props.search(searchText);

    }, [searchText]);


    return <form style={{
        display: "flex",
        flexFlow: "nowrap"
    }}>
        <TextField
            style={{
                flexGrow: 4
            }}
            id="search-bar"
            // onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
            // 	props.search(e.currentTarget.value);
            // }}
            onChange={(event) => setSearchText(event.target.value)}
            label="Search "
            value={searchText}
            variant="outlined"
            placeholder="name.."
            size="small"
        />
        <IconButton aria-label="search" style={{
            flexGrow: 1
        }}
                    onClick={() => {setSearchText("")}}
        >
            {searchText.length>0?<Close/>:<Search/>}
        </IconButton>
    </form>
        ;
}