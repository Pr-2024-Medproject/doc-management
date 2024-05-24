import { FC } from "react";
import ControlButtons from "../../mainPage/controlButtons/ControlButtons";
import FormInput from "../../shared/FormInput";
import useCustomFormik from "../../../hooks/useCustomFormik";
import { FormInfo } from "../../../types/Forms";
import { PatientData } from "../../../types/models/Patient";
import { patientDataFields, patientDataSchema } from "../../../validation-schemas/PatientDataSchema";

interface FormPatientDataProps {
    formInfo: FormInfo;
}

const FormPatientData: FC<FormPatientDataProps> = ({ formInfo }) => {
    const { form, saveHandler, printHandler } = useCustomFormik<PatientData>({
        fields: patientDataFields,
        schema: patientDataSchema,
        saveCallback: (values, _helpers) => {
            console.log(`Form ${formInfo.id} [${formInfo.name}] saved successfully.`);
            console.log(`DATA => `, values);
        },
        printCallback: (values, _helpers) => {
            console.log(`Form ${formInfo.id} [${formInfo.name}] printed successfully.`);
            console.log(`DATA => `, values);
        },
    });

    return (
        <>
            <div className="flex-grow overflow-hidden overflow-y-auto">
                <FormInput<PatientData>
                    type="text"
                    fields={patientDataFields}
                    fieldName="name"
                    form={form}
                />
                <FormInput<PatientData>
                    type="text"
                    fields={patientDataFields}
                    fieldName="surname"
                    form={form}
                />
                <FormInput<PatientData>
                    type="text"
                    fields={patientDataFields}
                    fieldName="patronymic"
                    form={form}
                />
                <FormInput<PatientData>
                    type="date"
                    fields={patientDataFields}
                    fieldName="birthday"
                    form={form}
                />
            </div>
            <ControlButtons saveCallback={saveHandler} printCallback={printHandler} />
        </>
    );
};

export default FormPatientData;
