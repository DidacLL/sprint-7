import React, {useState} from "react";
import {CheckInputProps} from "../props/CheckInputProps";
import {StyledList} from "../styled/StyledList";

export const CheckInput = (props: CheckInputProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        props.updateAmount(isChecked?(-1*props.cost):(props.cost));
        setIsChecked(!isChecked);
    };

    return (
        <StyledList>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}/>
            <label>{props.name}</label>
        </StyledList>
    );
};
