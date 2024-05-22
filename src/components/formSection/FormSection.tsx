import { FC } from "react";
import FormMedStatement from "./components/FormMedStatement";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    return (
        <section className="flex flex-col h-full border-8 border-red-800">
            <FormMedStatement />
        </section>
    );
};

export default FormSection;
