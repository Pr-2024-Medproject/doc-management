import { FORMS, FormsKeys } from "../constants/Forms";
import { FormInfo } from "../types/Forms";

export function getPatientDataFormInfo() {
    return FORMS.find((el) => el.key === FormsKeys.FORM_PATIENT_DATA);
}

export function isPrintableForm(formInfo: FormInfo) {
    return formInfo.key !== FormsKeys.FORM_PATIENT_DATA;
}
