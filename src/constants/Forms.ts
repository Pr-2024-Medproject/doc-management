import { FormInfo } from "../types/Forms";

export enum FormsKeys {
    FORM_UNKNOWN = "FORM_UNKNOWN",
    FORM_PATIENT_DATA = "FORM_PATIENT_DATA",
    FORM_MED_STATEMENT = "FORM_MED_STATEMENT",
}

export const UNKNOWN_FORM: FormInfo = {
    id: 0,
    name: "Форма не знайдена",
    key: FormsKeys.FORM_UNKNOWN,
};

export const FORMS: FormInfo[] = [
    { id: 1, name: "Загальні дані про пацієнта", key: FormsKeys.FORM_PATIENT_DATA },
    { id: 2, name: "Виписка ОГП ОЦО", key: FormsKeys.FORM_MED_STATEMENT },
];
