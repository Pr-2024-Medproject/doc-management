import { FormInfo } from "../types/Forms";

export enum FormsKeys {
    FORM_UNKNOWN = "FORM_UNKNOWN",
    FORM_MED_STATEMENT = "FORM_MED_STATEMENT",
    FORM_TEST_2 = "FORM_TEST_2",
}

export const UNKNOWN_FORM: FormInfo = {
    id: 0,
    name: "Форма не знайдена",
    key: FormsKeys.FORM_UNKNOWN,
};

export const FORMS: FormInfo[] = [
    { id: 1, name: "Виписка ОГП ОЦО", key: FormsKeys.FORM_MED_STATEMENT },
    { id: 2, name: "Test form #2", key: FormsKeys.FORM_TEST_2 },
];
