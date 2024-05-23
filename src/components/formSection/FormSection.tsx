import { FC } from "react";
import FormMedStatement from "./components/FormMedStatement";
import useFormInfo from "../../hooks/useFormInfo";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const formInfo = useFormInfo();

    if (!formInfo.id) {
        return <h1>{formInfo.name}</h1>;
    }

    return (
        <section className="flex flex-col h-full border-8 border-red-800">
            <FormMedStatement formInfo={formInfo} />
        </section>
    );
};

export default FormSection;
