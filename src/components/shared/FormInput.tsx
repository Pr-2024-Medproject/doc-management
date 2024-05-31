import { FormikProps } from "formik";
import Input from "./Input";
import { FieldMetaData } from "../../types/SchemaFactory";
import DropDown from "./DropDown";
import { InputType } from "../../types/Input";
import EditableDropDown from "./EditableDropDown";

interface FormInputProps<T> {
    disabled?: boolean;
    className?: string;
    fieldName: keyof T;
    fieldMeta: FieldMetaData;
    form: FormikProps<Partial<T>>;
}

function FormInput<FieldsType>({
    disabled,
    className,
    fieldName,
    fieldMeta,
    form,
}: FormInputProps<FieldsType>) {
    if (fieldMeta.type === "select" && fieldMeta.options) {
        return (
            <DropDown
                name={fieldName as string}
                value={form.values[fieldName] as string}
                label={fieldMeta.placeholder}
                values={fieldMeta.options}
                defaultValue={"Оберіть варіант"}
                error={form.errors[fieldName] as string}
                onChange={form.handleChange}
            />
        );
    } else if (fieldMeta.type === "editableSelect" && fieldMeta.options) {
        return (
            <EditableDropDown
                name={fieldName as string}
                value={form.values[fieldName] as string}
                placeholder={fieldMeta.placeholder}
                defaultOption={"Оберіть варіанти"}
                options={fieldMeta.options}
                error={form.errors[fieldName] as string}
                setValue={(value: string) => form.setFieldValue(fieldName as string, value)}
                onChange={form.handleChange}
            />
        );
    } else {
        return (
            <Input
                type={(fieldMeta.type as InputType) || "text"}
                label={fieldMeta.placeholder}
                value={form.values[fieldName] as string | number}
                name={fieldName as string}
                placeholder={fieldMeta.placeholder}
                error={form.errors[fieldName] as string}
                disabled={disabled}
                className={className}
                onChange={form.handleChange}
            />
        );
    }
}

export default FormInput;
