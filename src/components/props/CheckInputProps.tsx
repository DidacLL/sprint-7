import {ITService} from "../forms/ITService";

export interface CheckInputProps {
    service:ITService;
    updateAmount: (value: number,index:number) => void;
    index:number;
}