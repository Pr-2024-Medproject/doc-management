import { object, string } from "yup";
import { Fields } from "../types/SchemaFactory";
import { MedStatementModel } from "../types/models/MedStatement";
import { ERRORS } from "../constants/Errors";

export const medStatementFields: Fields<MedStatementModel> = {
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
    address: {
        min: 2,
        max: 100,
        placeholder: "Місце проживання",
        initial: "",
    },
    job: {
        min: 2,
        max: 100,
        placeholder: "Місце роботи",
        initial: "",
    },
    hospitalizationDate: {
        min: 2,
        max: 100,
        placeholder: "Дата госпіталізації",
        initial: "",
    },
    dischargeDate: {
        min: 2,
        max: 100,
        placeholder: "Дата вибуття зі стаціонару",
        initial: "",
    },
    mainDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Основний діагноз",
        initial: "",
    },
    complicationsDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Ускладнення (діагноз)",
        initial: "",
    },
    relatedDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Супутній діагноз",
        initial: "",
    },
    complaints: {
        min: 2,
        max: 100,
        placeholder: "Скарги",
        initial: "",
    },
    medicalHistory: {
        min: 2,
        max: 100,
        placeholder: "Анамнез хвороби",
        initial: "",
    },
    KT: {
        min: 2,
        max: 100,
        placeholder: "КТ ОГК, ОБП, ОМТ, ГМ",
        initial: "",
    },
    MRT: {
        min: 2,
        max: 100,
        placeholder: "МРТ ГМ",
        initial: "",
    },
    FBC: {
        min: 2,
        max: 100,
        placeholder: "ФБС",
        initial: "",
    },
    FEGDC: {
        min: 2,
        max: 100,
        placeholder: "ФЕГДС",
        initial: "",
    },
    histology: {
        min: 2,
        max: 100,
        placeholder: "Гістологія/цитологія",
        initial: "",
    },
    MDKDecision: {
        min: 2,
        max: 100,
        placeholder: "Рішення МДК",
        initial: "",
    },
    PT_PHTOperation: {
        min: 2,
        max: 100,
        placeholder: "Операція / ПТ / ПХТ",
        initial: "",
    },
    recommendations: {
        min: 2,
        max: 100,
        placeholder: "Лікувальні і трудові рекомендації",
        initial: "",
    },
    date: {
        min: 2,
        max: 100,
        placeholder: "Дата",
        initial: "",
    },
    doctor: {
        min: 2,
        max: 100,
        placeholder: "Лікуючий лікар",
        initial: "",
    },
};

export const medStatementSchema = object().shape({
    name: string()
        .min(medStatementFields.name.min, ERRORS.validation.min + medStatementFields.name.min)
        .max(medStatementFields.name.max, ERRORS.validation.max + medStatementFields.name.max)
        .required(ERRORS.validation.required),
    surname: string()
        .min(medStatementFields.surname.min, ERRORS.validation.min + medStatementFields.surname.min)
        .max(medStatementFields.surname.max, ERRORS.validation.max + medStatementFields.surname.max)
        .required(ERRORS.validation.required),
    patronymic: string()
        .min(
            medStatementFields.patronymic.min,
            ERRORS.validation.min + medStatementFields.patronymic.min,
        )
        .max(
            medStatementFields.patronymic.max,
            ERRORS.validation.max + medStatementFields.patronymic.max,
        )
        .required(ERRORS.validation.required),
    birthday: string()
        .min(
            medStatementFields.birthday.min,
            ERRORS.validation.min + medStatementFields.birthday.min,
        )
        .max(
            medStatementFields.birthday.max,
            ERRORS.validation.max + medStatementFields.birthday.max,
        )
        .required(ERRORS.validation.required),
    address: string()
        .min(medStatementFields.address.min, ERRORS.validation.min + medStatementFields.address.min)
        .max(medStatementFields.address.max, ERRORS.validation.max + medStatementFields.address.max)
        .required(ERRORS.validation.required),
    job: string()
        .min(medStatementFields.job.min, ERRORS.validation.min + medStatementFields.job.min)
        .max(medStatementFields.job.max, ERRORS.validation.max + medStatementFields.job.max)
        .required(ERRORS.validation.required),
    hospitalizationDate: string()
        .min(
            medStatementFields.hospitalizationDate.min,
            ERRORS.validation.min + medStatementFields.hospitalizationDate.min,
        )
        .max(
            medStatementFields.hospitalizationDate.max,
            ERRORS.validation.max + medStatementFields.hospitalizationDate.max,
        )
        .required(ERRORS.validation.required),
    dischargeDate: string()
        .min(
            medStatementFields.dischargeDate.min,
            ERRORS.validation.min + medStatementFields.dischargeDate.min,
        )
        .max(
            medStatementFields.dischargeDate.max,
            ERRORS.validation.max + medStatementFields.dischargeDate.max,
        )
        .required(ERRORS.validation.required),
    mainDiagnosis: string()
        .min(
            medStatementFields.mainDiagnosis.min,
            ERRORS.validation.min + medStatementFields.mainDiagnosis.min,
        )
        .max(
            medStatementFields.mainDiagnosis.max,
            ERRORS.validation.max + medStatementFields.mainDiagnosis.max,
        )
        .required(ERRORS.validation.required),
    complicationsDiagnosis: string()
        .min(
            medStatementFields.complicationsDiagnosis.min,
            ERRORS.validation.min + medStatementFields.complicationsDiagnosis.min,
        )
        .max(
            medStatementFields.complicationsDiagnosis.max,
            ERRORS.validation.max + medStatementFields.complicationsDiagnosis.max,
        )
        .required(ERRORS.validation.required),
    relatedDiagnosis: string()
        .min(
            medStatementFields.relatedDiagnosis.min,
            ERRORS.validation.min + medStatementFields.relatedDiagnosis.min,
        )
        .max(
            medStatementFields.relatedDiagnosis.max,
            ERRORS.validation.max + medStatementFields.relatedDiagnosis.max,
        )
        .required(ERRORS.validation.required),
    complaints: string()
        .min(
            medStatementFields.complaints.min,
            ERRORS.validation.min + medStatementFields.complaints.min,
        )
        .max(
            medStatementFields.complaints.max,
            ERRORS.validation.max + medStatementFields.complaints.max,
        )
        .required(ERRORS.validation.required),
    medicalHistory: string()
        .min(
            medStatementFields.medicalHistory.min,
            ERRORS.validation.min + medStatementFields.medicalHistory.min,
        )
        .max(
            medStatementFields.medicalHistory.max,
            ERRORS.validation.max + medStatementFields.medicalHistory.max,
        )
        .required(ERRORS.validation.required),
    KT: string()
        .min(medStatementFields.KT.min, ERRORS.validation.min + medStatementFields.KT.min)
        .max(medStatementFields.KT.max, ERRORS.validation.max + medStatementFields.KT.max)
        .required(ERRORS.validation.required),
    MRT: string()
        .min(medStatementFields.MRT.min, ERRORS.validation.min + medStatementFields.MRT.min)
        .max(medStatementFields.MRT.max, ERRORS.validation.max + medStatementFields.MRT.max)
        .required(ERRORS.validation.required),
    FBC: string()
        .min(medStatementFields.FBC.min, ERRORS.validation.min + medStatementFields.FBC.min)
        .max(medStatementFields.FBC.max, ERRORS.validation.max + medStatementFields.FBC.max)
        .required(ERRORS.validation.required),
    FEGDC: string()
        .min(medStatementFields.FEGDC.min, ERRORS.validation.min + medStatementFields.FEGDC.min)
        .max(medStatementFields.FEGDC.max, ERRORS.validation.max + medStatementFields.FEGDC.max)
        .required(ERRORS.validation.required),
    histology: string()
        .min(
            medStatementFields.histology.min,
            ERRORS.validation.min + medStatementFields.histology.min,
        )
        .max(
            medStatementFields.histology.max,
            ERRORS.validation.max + medStatementFields.histology.max,
        )
        .required(ERRORS.validation.required),
    MDKDecision: string()
        .min(
            medStatementFields.MDKDecision.min,
            ERRORS.validation.min + medStatementFields.MDKDecision.min,
        )
        .max(
            medStatementFields.MDKDecision.max,
            ERRORS.validation.max + medStatementFields.MDKDecision.max,
        )
        .required(ERRORS.validation.required),
    PT_PHTOperation: string()
        .min(
            medStatementFields.PT_PHTOperation.min,
            ERRORS.validation.min + medStatementFields.PT_PHTOperation.min,
        )
        .max(
            medStatementFields.PT_PHTOperation.max,
            ERRORS.validation.max + medStatementFields.PT_PHTOperation.max,
        )
        .required(ERRORS.validation.required),
    recommendations: string()
        .min(
            medStatementFields.recommendations.min,
            ERRORS.validation.min + medStatementFields.recommendations.min,
        )
        .max(
            medStatementFields.recommendations.max,
            ERRORS.validation.max + medStatementFields.recommendations.max,
        )
        .required(ERRORS.validation.required),
    date: string()
        .min(medStatementFields.date.min, ERRORS.validation.min + medStatementFields.date.min)
        .max(medStatementFields.date.max, ERRORS.validation.max + medStatementFields.date.max)
        .required(ERRORS.validation.required),
    doctor: string()
        .min(medStatementFields.doctor.min, ERRORS.validation.min + medStatementFields.doctor.min)
        .max(medStatementFields.doctor.max, ERRORS.validation.max + medStatementFields.doctor.max)
        .required(ERRORS.validation.required),
});
