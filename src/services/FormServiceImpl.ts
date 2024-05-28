import { FORMS, FormsKeys } from "../constants/Forms";

export function getPatientDataFormInfo() {
    return FORMS.find((el) => el.key === FormsKeys.FORM_PATIENT_DATA);
}
