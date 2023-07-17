export interface NumberInputProps {
    id:number;
    text: string
    minVal: number | 1
    onChange: (val:number) => void
}