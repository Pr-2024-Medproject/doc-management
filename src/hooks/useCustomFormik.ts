// import { useFormik } from "formik";

// interface UseCustomFormikProps<U> {
//     fields: U;
//     medStatementSchema:
// }

// function useCustomFormik<T, U, I>({ fields }: UseCustomFormikProps<U>) {
//     const initialValues = Object.entries(fields).reduce((acc, [key, value]) => {
//         acc[key as I] = value.initial;
//         return acc;
//     }, {} as T);

//     const form = useFormik({
//         initialValues,
//         validationSchema: medStatementSchema,
//         onSubmit: (values, helpers) => {},
//     });

//     return form;
// }

// export default useCustomFormik;
