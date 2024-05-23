import { FormikHelpers, useFormik } from "formik";
import { FieldMetaData, Fields } from "../types/SchemaFactory";
import { AnyObject, ObjectSchema } from "yup";

interface UseCustomFormikProps<T> {
    fields: Fields<T>;
    schema: ObjectSchema<AnyObject>;
    onSubmit: (values: Partial<T>, formikHelpers: FormikHelpers<Partial<T>>) => void | Promise<any>
}

function useCustomFormik<FieldsType>({ fields, schema, onSubmit }: UseCustomFormikProps<FieldsType>) {
    const initialValues = Object.entries(fields).reduce((acc, [key, value]) => {
        (acc as any)[key as keyof FieldsType] = (value as FieldMetaData).initial;
        return acc;
    }, {} as Partial<FieldsType>);

    const form = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit,
    });

    return form;
}

export default useCustomFormik;
