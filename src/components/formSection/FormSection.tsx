import { FC } from "react";
import { useParams } from "react-router-dom";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = (_props) => {
    const { formId } = useParams();
    return (
        <h2>Any form with id [{formId}]</h2>
    );
}

export default FormSection;