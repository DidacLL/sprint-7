import {ITService} from "../classes/ITService";
import Typography from "@mui/material/Typography";
import {ButtonGroup, IconButton} from "@mui/material";
import {Delete, Share} from "@mui/icons-material";
import React from "react";

export const BudgetRow = (props: { el: ITService }) => <div style={{display: "flex", flexDirection: "row"}}>
    <Typography>{props.el.name}</Typography>
    <ButtonGroup style={{justifyContent: "space-around"}}>
        <IconButton><Delete></Delete></IconButton>
        <IconButton><Share></Share></IconButton>
    </ButtonGroup>
</div>;