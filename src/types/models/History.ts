import { FormsKeys } from "../../constants/Forms";
import { MedStatementModel } from "./MedStatement";

export type History = {
    [FormsKeys.FORM_MED_STATEMENT]: MedStatementModel[];
};

export type HistoryFormsKeys = Exclude<FormsKeys, FormsKeys.FORM_UNKNOWN | FormsKeys.FORM_PATIENT_DATA>;
export type HistoryModels = History[keyof History][0];
