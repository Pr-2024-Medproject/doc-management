import { Fields } from "../types/SchemaFactory";
import { PatientData } from "../types/models/Patient";
import { schemaFactory } from "./SchemaFactory";

export const patientDataFields: Fields<PatientData> = {
    name: {
        min: 2,
        max: 100,
        placeholder: "Ім'я",
        initial: "",
        type: "text",
    },
    surname: {
        min: 2,
        max: 100,
        placeholder: "Прізвище",
        initial: "",
        type: "text",
    },
    patronymic: {
        min: 2,
        max: 100,
        placeholder: "По батькові",
        initial: "",
        type: "text",
    },
    birthday: {
        min: 2,
        max: 100,
        placeholder: "Дата народження",
        initial: "",
        type: "date",
    },
};

export const patientDataSchema = schemaFactory(patientDataFields);
