import React from "react";

export interface NumberInputProps {
    text: string
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}