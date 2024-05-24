import { FC } from "react";
import FormMedStatement from "./components/FormMedStatement";
import useFormInfo from "../../hooks/useFormInfo";
import { FormsKeys } from "../../constants/Forms";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const formInfo = useFormInfo();

    if (!formInfo.id) {
        return <h1>{formInfo.name}</h1>;
    }

    return (
        <section className="flex flex-col h-full border-8 border-red-800">
            {formInfo.key === FormsKeys.FORM_MED_STATEMENT ? (
                <FormMedStatement formInfo={formInfo} />
            ) : formInfo.key === FormsKeys.FORM_TEST_2 ? (
                <h1>{formInfo.name}</h1>
            ) : formInfo.key === FormsKeys.FORM_UNKNOWN ? (
                <h1>{formInfo.name}</h1>
            ) : (
                <></>
            )}
        </section>
    );
};

export default FormSection;
