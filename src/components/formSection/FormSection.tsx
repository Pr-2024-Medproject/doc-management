import { FC, useEffect } from "react";
import FormMedStatement from "./components/FormMedStatement";
import useFormInfo from "../../hooks/useFormInfo";
import { FormsKeys } from "../../constants/Forms";
import FormPatientData from "./components/FormPatientData";
import { useSearchParams } from "react-router-dom";
import { Patient } from "../../types/models/Patient";
import useLocalStorage from "../../hooks/useLocalStorage";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const formInfo = useFormInfo();
    const [searchParams] = useSearchParams();
    const { lastValue, setLastValue, readValue } = useLocalStorage<Patient>();
    const id = searchParams.get("patientId");

    useEffect(() => {
        readValue(id || "");
    }, [id]);

    return (
        <section className="flex flex-col h-full">
            {formInfo.key === FormsKeys.FORM_PATIENT_DATA ? (
                <FormPatientData
                    formInfo={formInfo}
                    patient={lastValue}
                    setPatient={setLastValue}
                />
            ) : formInfo.key === FormsKeys.FORM_MED_STATEMENT ? (
                <FormMedStatement formInfo={formInfo} />
            ) : formInfo.key === FormsKeys.FORM_UNKNOWN ? (
                <h1>{formInfo.name}</h1>
            ) : (
                <></>
            )}
        </section>
    );
};

export default FormSection;
