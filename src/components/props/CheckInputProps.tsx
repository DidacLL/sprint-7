import {ITService} from "../../classes/ITService";

export interface CheckInputProps {
    service: ITService;
    updateAmount: () => void;
}