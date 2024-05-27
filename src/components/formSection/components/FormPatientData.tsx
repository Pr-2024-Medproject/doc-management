import { FC } from "react";
import ControlButtons from "../../mainPage/controlButtons/ControlButtons";
import FormInput from "../../shared/FormInput";
import useCustomFormik from "../../../hooks/useCustomFormik";
import { FormInfo } from "../../../types/Forms";
import { Patient, PatientData } from "../../../types/models/Patient";
import {
    patientDataFields,
    patientDataSchema,
} from "../../../validation-schemas/PatientDataSchema";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { FormsKeys } from "../../../constants/Forms";
import { createOrUpdatePatient } from "../../../services/PatientServiceImpl";

interface FormPatientDataProps {
    formInfo: FormInfo;
}

const FormPatientData: FC<FormPatientDataProps> = ({ formInfo }) => {
    const [patients, setPatients] = useLocalStorage<Patient[]>("patients", []);

    const { form, saveHandler, printHandler } = useCustomFormik<PatientData>({
        fields: patientDataFields,
        schema: patientDataSchema,
        saveCallback: (values, _helpers) => {
            // TODO
            // const test = createOrUpdatePatient(values, selectedPatient);
            // setPatients([test]);
        },
        printCallback: (values, _helpers) => {
            console.log(`Form ${formInfo.id} [${formInfo.name}] printed successfully.`);
            console.log(`DATA => `, values);
        },
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
