import { object, string } from "yup";
import { Fields } from "../types/SchemaFactory";
import { MedStatementModel } from "../types/models/MedStatement";

export const medStatementFields: Fields<MedStatementModel> = {
    name: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    surname: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    patronymic: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    birthday: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    address: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    job: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    hospitalizationDate: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    dischargeDate: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    mainDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    complicationsDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    relatedDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    complaints: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    medicalHistory: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    KT: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    MRT: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    FBC: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    FEGDC: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    histology: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    MDKDecision: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    PT_PHTOperation: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    recommendations: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    date: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
    doctor: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
    },
};

export const medStatementSchema = object().shape({
    name: string()
        .min(medStatementFields.name.min, "Minimal length is " + medStatementFields.name.min)
        .max(medStatementFields.name.max, "Maximal length is " + medStatementFields.name.max)
        .required("Required field"),
    surname: string()
        .min(medStatementFields.surname.min, "Minimal length is " + medStatementFields.surname.min)
        .max(medStatementFields.surname.max, "Maximal length is " + medStatementFields.surname.max)
        .required("Required field"),
    patronymic: string()
        .min(
            medStatementFields.patronymic.min,
            "Minimal length is " + medStatementFields.patronymic.min,
        )
        .max(
            medStatementFields.patronymic.max,
            "Maximal length is " + medStatementFields.patronymic.max,
        )
        .required("Required field"),
    birthday: string()
        .min(
            medStatementFields.birthday.min,
            "Minimal length is " + medStatementFields.birthday.min,
        )
        .max(
            medStatementFields.birthday.max,
            "Maximal length is " + medStatementFields.birthday.max,
        )
        .required("Required field"),
    address: string()
        .min(medStatementFields.address.min, "Minimal length is " + medStatementFields.address.min)
        .max(medStatementFields.address.max, "Maximal length is " + medStatementFields.address.max)
        .required("Required field"),
    job: string()
        .min(medStatementFields.job.min, "Minimal length is " + medStatementFields.job.min)
        .max(medStatementFields.job.max, "Maximal length is " + medStatementFields.job.max)
        .required("Required field"),
    hospitalizationDate: string()
        .min(
            medStatementFields.hospitalizationDate.min,
            "Minimal length is " + medStatementFields.hospitalizationDate.min,
        )
        .max(
            medStatementFields.hospitalizationDate.max,
            "Maximal length is " + medStatementFields.hospitalizationDate.max,
        )
        .required("Required field"),
    dischargeDate: string()
        .min(
            medStatementFields.dischargeDate.min,
            "Minimal length is " + medStatementFields.dischargeDate.min,
        )
        .max(
            medStatementFields.dischargeDate.max,
            "Maximal length is " + medStatementFields.dischargeDate.max,
        )
        .required("Required field"),
    mainDiagnosis: string()
        .min(
            medStatementFields.mainDiagnosis.min,
            "Minimal length is " + medStatementFields.mainDiagnosis.min,
        )
        .max(
            medStatementFields.mainDiagnosis.max,
            "Maximal length is " + medStatementFields.mainDiagnosis.max,
        )
        .required("Required field"),
    complicationsDiagnosis: string()
        .min(
            medStatementFields.complicationsDiagnosis.min,
            "Minimal length is " + medStatementFields.complicationsDiagnosis.min,
        )
        .max(
            medStatementFields.complicationsDiagnosis.max,
            "Maximal length is " + medStatementFields.complicationsDiagnosis.max,
        )
        .required("Required field"),
    relatedDiagnosis: string()
        .min(
            medStatementFields.relatedDiagnosis.min,
            "Minimal length is " + medStatementFields.relatedDiagnosis.min,
        )
        .max(
            medStatementFields.relatedDiagnosis.max,
            "Maximal length is " + medStatementFields.relatedDiagnosis.max,
        )
        .required("Required field"),
    complaints: string()
        .min(
            medStatementFields.complaints.min,
            "Minimal length is " + medStatementFields.complaints.min,
        )
        .max(
            medStatementFields.complaints.max,
            "Maximal length is " + medStatementFields.complaints.max,
        )
        .required("Required field"),
    medicalHistory: string()
        .min(
            medStatementFields.medicalHistory.min,
            "Minimal length is " + medStatementFields.medicalHistory.min,
        )
        .max(
            medStatementFields.medicalHistory.max,
            "Maximal length is " + medStatementFields.medicalHistory.max,
        )
        .required("Required field"),
    KT: string()
        .min(medStatementFields.KT.min, "Minimal length is " + medStatementFields.KT.min)
        .max(medStatementFields.KT.max, "Maximal length is " + medStatementFields.KT.max)
        .required("Required field"),
    MRT: string()
        .min(medStatementFields.MRT.min, "Minimal length is " + medStatementFields.MRT.min)
        .max(medStatementFields.MRT.max, "Maximal length is " + medStatementFields.MRT.max)
        .required("Required field"),
    FBC: string()
        .min(medStatementFields.FBC.min, "Minimal length is " + medStatementFields.FBC.min)
        .max(medStatementFields.FBC.max, "Maximal length is " + medStatementFields.FBC.max)
        .required("Required field"),
    FEGDC: string()
        .min(medStatementFields.FEGDC.min, "Minimal length is " + medStatementFields.FEGDC.min)
        .max(medStatementFields.FEGDC.max, "Maximal length is " + medStatementFields.FEGDC.max)
        .required("Required field"),
    histology: string()
        .min(
            medStatementFields.histology.min,
            "Minimal length is " + medStatementFields.histology.min,
        )
        .max(
            medStatementFields.histology.max,
            "Maximal length is " + medStatementFields.histology.max,
        )
        .required("Required field"),
    MDKDecision: string()
        .min(
            medStatementFields.MDKDecision.min,
            "Minimal length is " + medStatementFields.MDKDecision.min,
        )
        .max(
            medStatementFields.MDKDecision.max,
            "Maximal length is " + medStatementFields.MDKDecision.max,
        )
        .required("Required field"),
    PT_PHTOperation: string()
        .min(
            medStatementFields.PT_PHTOperation.min,
            "Minimal length is " + medStatementFields.PT_PHTOperation.min,
        )
        .max(
            medStatementFields.PT_PHTOperation.max,
            "Maximal length is " + medStatementFields.PT_PHTOperation.max,
        )
        .required("Required field"),
    recommendations: string()
        .min(
            medStatementFields.recommendations.min,
            "Minimal length is " + medStatementFields.recommendations.min,
        )
        .max(
            medStatementFields.recommendations.max,
            "Maximal length is " + medStatementFields.recommendations.max,
        )
        .required("Required field"),
    date: string()
        .min(medStatementFields.date.min, "Minimal length is " + medStatementFields.date.min)
        .max(medStatementFields.date.max, "Maximal length is " + medStatementFields.date.max)
        .required("Required field"),
    doctor: string()
        .min(medStatementFields.doctor.min, "Minimal length is " + medStatementFields.doctor.min)
        .max(medStatementFields.doctor.max, "Maximal length is " + medStatementFields.doctor.max)
        .required("Required field"),
});
