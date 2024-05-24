import { FORMS, UNKNOWN_FORM } from "../constants/Forms";
import { FormInfo } from "../types/Forms";
import { useParams } from "react-router-dom";

function useFormInfo(): FormInfo {
    const { formId } = useParams();
    return FORMS.find(form => form.id === parseInt(formId!)) || UNKNOWN_FORM;
}

export default useFormInfo;
