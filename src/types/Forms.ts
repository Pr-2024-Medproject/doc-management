import { FORMS } from "../constants/Forms";

export interface FormInfo {
    id: number;
    name: string;
}

export type FormNames = (typeof FORMS)[number]["name"];
