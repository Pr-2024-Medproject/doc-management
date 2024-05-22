import { AnyObject } from "yup";


export interface Fields {
    [key: string]: {
        min: number;
        max: number;
        placeholder: string;
    }
}

export interface SchemaFactoryData {
    schema: AnyObject;
    fields: Fields;
}

