import { FC, useEffect } from "react";
import FormMedStatement from "./components/FormMedStatement";
import useFormInfo from "../../hooks/useFormInfo";
import { FormsKeys } from "../../constants/Forms";
import FormPatientData from "./components/FormPatientData";
import { Patient } from "../../types/models/Patient";
import { useStore } from "../../store";
import { getPatientDataFormInfo, isPrintableForm } from "../../services/FormServiceImpl";
import { useNavigate } from "react-router-dom";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const formInfo = useFormInfo();
    const navigate = useNavigate();
    const dataForm = getPatientDataFormInfo();
    const { selectedPatient, savePatient } = useStore();

    useEffect(() => {
        if (isPrintableForm(formInfo) && !selectedPatient) {
            navigate(`/form/${dataForm?.id}`);
        }
    }, []);

    return (
        <section className="flex flex-col h-full">
            {formInfo.key === FormsKeys.FORM_PATIENT_DATA ? (
                <FormPatientData
                    patient={selectedPatient || ({} as Patient)}
                    setPatient={savePatient}
                />
            ) : formInfo.key === FormsKeys.FORM_MED_STATEMENT ? (
                <FormMedStatement
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
