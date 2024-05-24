import { ObjectShape, number, object, string } from "yup";
import { Fields } from "../types/SchemaFactory";
import { ERRORS } from "../constants/Errors";

export function schemaFactory<T extends Object>(fields: Fields<T>) {
    return object().shape(
        Object.entries(fields).reduce((acc, [key, value]) => {
            acc[key] = (
                value.type === "text"
                    ? string()
                    : value.type === "number"
                    ? number()
                    : string()
            )
                .min(value.min, ERRORS.validation.min + value.min)
                .max(value.max, ERRORS.validation.max + value.max)
                .required(ERRORS.validation.required);
            return acc;
        }, {} as ObjectShape),
    );
}
