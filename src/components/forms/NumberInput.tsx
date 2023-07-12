import React from "react";
import {NumberInputProps} from "../props/NumberInputProps";

export const NumberInput = (props: NumberInputProps) => {
    return <div style={{padding: "1em"}}>
        <label>{props.text} </label>
        <input
            defaultValue={1}
            type="number"
            min="1"
            onChange={props.onChange}
        />
    </div>;
};