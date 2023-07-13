import React, {Fragment} from "react";
import {Category, Component, Palette, Variant,} from "@react-buddy/ide-toolbox";
import {NumberInput} from "../components/forms/NumberInput";


export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
        </Category>
        <Category name="Forms">
            <Component name="NumberInput">
                <Variant name="buttons">
                    <NumberInput onChange={()=>{}} text={"Label text"} minVal={0}/>
                </Variant>
            </Component>
        </Category>
    </Palette>
);

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    );
}