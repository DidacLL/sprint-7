import {WEBService} from "../../classes/WEBService";

export interface NumberInputProps {
    service: WEBService;
    id: number;
    text: string
    minVal: number | 1
    onChange: (val: number) => void
}