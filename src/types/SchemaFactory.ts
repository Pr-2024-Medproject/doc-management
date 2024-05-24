import { InputType } from "./Input";

export type FieldMetaData = {
    min: number;
    max: number;
    placeholder: string;
    initial: string;
    type: InputType;
}

export type Fields<T> = {
    [key in keyof T]: FieldMetaData;
};
