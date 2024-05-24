import { FormsKeys } from "../../constants/Forms";
import { MedStatementModel } from "./MedStatement";

export type History = {
    [FormsKeys.FORM_MED_STATEMENT]: MedStatementModel[];
};
