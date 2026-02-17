export interface InputProp {
    placeholder?: string;
    height: number;
    width: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}