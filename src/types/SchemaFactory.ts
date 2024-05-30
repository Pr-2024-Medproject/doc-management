import { InputType } from "./Input";

export type MetaDataType = InputType | "select";

export type FieldMetaData = {
    min: number;
    max: number;
    placeholder: string;
    initial: string;
    type: MetaDataType;
    options?: string[];
};

export type Fields<T> = {
    [key in keyof T]: FieldMetaData;
};
