import { FormikHelpers, FormikProps, useFormik } from "formik";
import { FieldMetaData, Fields } from "../types/SchemaFactory";
import { AnyObject, ObjectSchema } from "yup";
import { useState } from "react";

interface UseCustomFormikProps<T> {
    fields: Fields<T>;
    schema: ObjectSchema<AnyObject>;
    initial: T;
    saveCallback: (values: Partial<T>, formikHelpers: FormikHelpers<Partial<T>>) => void;
    printCallback: (values: Partial<T>, formikHelpers: FormikHelpers<Partial<T>>) => void;
}

interface UseCustomFormik<T> {
    form: FormikProps<Partial<T>>;
    saveHandler: () => void;
    printHandler: () => void;
}

function useCustomFormik<FieldsType>({
    fields,
    schema,
    initial,
    saveCallback,
    printCallback,
}: UseCustomFormikProps<FieldsType>): UseCustomFormik<FieldsType> {
    const [saveMode, setSaveMode] = useState(false);

    const initialValues = Object.entries(fields).reduce((acc, [key, value]) => {
        (acc as any)[key as keyof FieldsType] =
            initial[key as keyof FieldsType] || (value as FieldMetaData).initial;
        return acc;
    }, {} as Partial<FieldsType>);

    const form = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: (values, helpers) => {
            saveMode ? saveCallback(values, helpers) : printCallback(values, helpers);
        },
        enableReinitialize: true,
    });

    const saveHandler = () => {
        setSaveMode(true);
        form.handleSubmit();
    };

    const printHandler = () => {
        setSaveMode(false);
        form.handleSubmit();
    };

    return { form, saveHandler, printHandler };
}

export default useCustomFormik;
