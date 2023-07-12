import {ITService} from "../classes/ITService";

export interface CheckInputProps {
    service:ITService;
    updateAmount: (value: number,index:number) => void;
    index:number;
}