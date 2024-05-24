import { FC } from "react";
import FormMedStatement from "./components/FormMedStatement";
import useFormInfo from "../../hooks/useFormInfo";
import { FormsKeys } from "../../constants/Forms";
import FormPatientData from "./components/FormPatientData";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const formInfo = useFormInfo();
    return (
        <section className="flex flex-col h-full border-8 border-red-800">
            {formInfo.key === FormsKeys.FORM_PATIENT_DATA ? (
                <FormPatientData formInfo={formInfo} />
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
