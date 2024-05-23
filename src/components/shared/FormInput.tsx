import { FormikProps } from "formik";
import Input from "./Input";
import { Fields } from "../../types/SchemaFactory";


interface FormInputProps<T> {
    type?: "text" | "number" | "email" | "password" | "date";
    disabled?: boolean;
    className?: string;
    fields: Fields<T>;
    fieldName: keyof T;
    form: FormikProps<Partial<T>>;
}

function FormInput<FieldsType>(props: FormInputProps<FieldsType>) {
    return (
        <Input
            type={props.type || "text"}
            label={props.fields[props.fieldName].placeholder}
            value={props.form.values[props.fieldName] as string | number}
            name={props.fieldName as string}
            placeholder={props.fields[props.fieldName].placeholder}
            error={!!props.form.errors[props.fieldName]} // TODO :: should be visible formik error
            disabled={props.disabled}
            className={props.className}
            onChange={props.form.handleChange}
        />
    );
}

export default FormInput;

