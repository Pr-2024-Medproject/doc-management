import { object, string } from "yup";
import { Fields } from "../types/SchemaFactory";
import { ERRORS } from "../constants/Errors";
import { PatientData } from "../types/models/Patient";

export const patientDataFields: Fields<PatientData> = {
    name: {
        min: 2,
        max: 100,
        placeholder: "Ім'я",
        initial: "",
    },
    surname: {
        min: 2,
        max: 100,
        placeholder: "Прізвище",
        initial: "",
    },
    patronymic: {
        min: 2,
        max: 100,
        placeholder: "По батькові",
        initial: "",
    },
    birthday: {
        min: 2,
        max: 100,
        placeholder: "Дата народження",
        initial: "",
    },
};

export const patientDataSchema = object().shape({
    name: string()
        .min(patientDataFields.name.min, ERRORS.validation.min + patientDataFields.name.min)
        .max(patientDataFields.name.max, ERRORS.validation.max + patientDataFields.name.max)
        .required(ERRORS.validation.required),
    surname: string()
        .min(patientDataFields.surname.min, ERRORS.validation.min + patientDataFields.surname.min)
        .max(patientDataFields.surname.max, ERRORS.validation.max + patientDataFields.surname.max)
        .required(ERRORS.validation.required),
    patronymic: string()
        .min(
            patientDataFields.patronymic.min,
            ERRORS.validation.min + patientDataFields.patronymic.min,
        )
        .max(
            patientDataFields.patronymic.max,
            ERRORS.validation.max + patientDataFields.patronymic.max,
        )
        .required(ERRORS.validation.required),
    birthday: string()
        .min(
            patientDataFields.birthday.min,
            ERRORS.validation.min + patientDataFields.birthday.min,
        )
        .max(
            patientDataFields.birthday.max,
            ERRORS.validation.max + patientDataFields.birthday.max,
        )
        .required(ERRORS.validation.required),
});
