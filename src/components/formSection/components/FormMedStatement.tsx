import { FC, useState } from "react";
import ControlButtons from "../../mainPage/controlButtons/ControlButtons";
import FormInput from "../../shared/FormInput";
import {
    medStatementFields,
    medStatementSchema,
} from "../../../validation-schemas/MedStatementSchema";
import { MedStatementModel } from "../../../types/models/MedStatement";
import useCustomFormik from "../../../hooks/useCustomFormik";
import { FormInfo } from "../../../types/Forms";
import { Patient } from "../../../types/models/Patient";
import { getPatientDocumentData, pushToPatientHistory } from "../../../services/PatientServiceImpl";
import { FormsKeys } from "../../../constants/Forms";

interface FormMedStatementProps {
    formInfo: FormInfo;
    patient: Patient;
    setPatient: (id: string, patient: Patient) => void;
}

const FormMedStatement: FC<FormMedStatementProps> = ({ formInfo, patient, setPatient }) => {
    const [initial, setInitial] = useState(
        getPatientDocumentData(FormsKeys.FORM_MED_STATEMENT, patient, null),
    );

    const initialHandler = (historyDate: string) => {
        setInitial(getPatientDocumentData(FormsKeys.FORM_MED_STATEMENT, patient, historyDate));
    };

    const { form, saveHandler, printHandler } = useCustomFormik<MedStatementModel>({
        fields: medStatementFields,
        schema: medStatementSchema,
        initial: initial,
        saveCallback: (values, _helpers) => {
            const model = pushToPatientHistory(
                FormsKeys.FORM_MED_STATEMENT,
                values as MedStatementModel,
                patient,
            );
            setPatient(model.id, model);
        },
        printCallback: (values, _helpers) => {
            console.log(`Form ${formInfo.id} [${formInfo.name}] printed successfully.`);
            console.log(`DATA => `, values);
        },
    });

    return (
        <>
            <div className="flex-grow overflow-hidden overflow-y-auto">
                {Object.entries(medStatementFields).map(([fieldName, fieldMeta]) => {
                    return (
                        <FormInput<MedStatementModel>
                            fieldName={fieldName as keyof MedStatementModel}
                            fieldMeta={fieldMeta}
                            form={form}
                            key={fieldName}
                        />
                    );
                })}
            </div>
            <ControlButtons
                disabled={!form.isValid}
                patient={patient}
                saveCallback={saveHandler}
                printCallback={printHandler}
                historyDateHandler={initialHandler}
            />
        </>
    );
};

export default FormMedStatement;
