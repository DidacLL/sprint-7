import React, {Fragment} from "react";
import {Category, Component, Palette, Variant,} from "@react-buddy/ide-toolbox";
import {NumberInput} from "../components/forms/NumberInput";
import {InfoButton} from "../components/forms/InfoButton";
import MUIPalette from "@react-buddy/palette-mui";
import {WEBService} from "../classes/WEBService";


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
                    <NumberInput service={new WEBService("", 0, "", 1, 1, "")} onChange={() => {
                    }} text={"Label text"} minVal={0} id={0}/>
                </Variant>
            </Component>
            <Component name="InfoButton">
                <Variant>
                    <InfoButton message={"Hint to show"} title={"item title"}/>
                </Variant>
            </Component>
        </Category>
        <MUIPalette/>
    </Palette>
);

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    );
}