export interface CheckInputProps {
    name: String;
    cost: number;
    amount: number;
    updateAmount: (newAmount: number) => void;
}