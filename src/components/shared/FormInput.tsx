import { FormikProps } from "formik";
import Input from "./Input";
import { FieldMetaData } from "../../types/SchemaFactory";


interface FormInputProps<T> {
    disabled?: boolean;
    className?: string;
    fieldName: keyof T;
    fieldMeta: FieldMetaData;
    form: FormikProps<Partial<T>>;
}

function FormInput<FieldsType>(props: FormInputProps<FieldsType>) {
    return (
        <Input
            type={props.fieldMeta.type || "text"}
            label={props.fieldMeta.placeholder}
            value={props.form.values[props.fieldName] as string | number}
            name={props.fieldName as string}
            placeholder={props.fieldMeta.placeholder}
            error={props.form.errors[props.fieldName] as string}
            disabled={props.disabled}
            className={props.className}
            onChange={props.form.handleChange}
        />
    );
}

export default FormInput;

