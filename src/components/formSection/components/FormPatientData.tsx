import { FC } from "react";
import ControlButtons from "../../mainPage/controlButtons/ControlButtons";
import FormInput from "../../shared/FormInput";
import useCustomFormik from "../../../hooks/useCustomFormik";
import { Patient, PatientData } from "../../../types/models/Patient";
import {
    patientDataFields,
    patientDataSchema,
} from "../../../validation-schemas/PatientDataSchema";
import { createOrUpdatePatient } from "../../../services/PatientServiceImpl";

interface FormPatientDataProps {
    patient: Patient;
    setPatient: (id: string, patient: Patient) => void;
}

const FormPatientData: FC<FormPatientDataProps> = ({ patient, setPatient }) => {
    const { form, saveHandler, printHandler } = useCustomFormik<PatientData>({
        fields: patientDataFields,
        schema: patientDataSchema,
        initial: patient,
        saveCallback: (values, _helpers) => {
            const model = createOrUpdatePatient(values, patient);
            setPatient(model.id, model);
        },
        printCallback: (_values, _helpers) => {},
    });

    return (
        <>
            <div className="flex-grow overflow-hidden overflow-y-auto">
                {Object.entries(patientDataFields).map(([fieldName, fieldMeta]) => {
                    return (
                        <FormInput<PatientData>
                            fieldName={fieldName as keyof PatientData}
                            fieldMeta={fieldMeta}
                            form={form}
                            key={fieldName}
                        />
                    );
                })}
            </div>
            <ControlButtons
                disabled={!form.isValid}
                saveCallback={saveHandler}
                printCallback={printHandler}
            />
        </>
    );
};

export default FormPatientData;
