import { History } from "./History";

export interface Patient extends PatientData {
    id: string;
    history: History;
}

export interface PatientData {
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
}
