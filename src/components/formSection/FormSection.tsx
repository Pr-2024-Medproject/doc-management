import { FC } from "react";
import FormMedStatement from "./components/FormMedStatement";
import useFormInfo from "../../hooks/useFormInfo";
import { FormsKeys } from "../../constants/Forms";
import FormPatientData from "./components/FormPatientData";
import { Patient } from "../../types/models/Patient";
import { useStore } from "../../store";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const formInfo = useFormInfo();
    const { selectedPatient, savePatient } = useStore();

    return (
        <section className="flex flex-col h-full">
            {formInfo.key === FormsKeys.FORM_PATIENT_DATA ? (
                <FormPatientData
                    formInfo={formInfo}
                    patient={selectedPatient || ({} as Patient)}
                    setPatient={savePatient}
                />
            ) : formInfo.key === FormsKeys.FORM_MED_STATEMENT ? (
                <FormMedStatement
                    formInfo={formInfo}
                    patient={selectedPatient || ({} as Patient)}
                    setPatient={savePatient}
                />
            ) : formInfo.key === FormsKeys.FORM_UNKNOWN ? (
                <h1>{formInfo.name}</h1>
            ) : (
                <></>
            )}
        </section>
    );
};

export default FormSection;
