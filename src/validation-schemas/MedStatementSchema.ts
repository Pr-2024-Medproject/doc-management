import * as Yup from "yup";
import { Fields, SchemaFactoryData } from "../types/SchemaFactory";

export const MedStatementSchemaFactory = (): SchemaFactoryData => {
    const fields: Fields = {
        name: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        surname: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        patronymic: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        birthday: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        address: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        job: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        hospitalizationDate: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        dischargeDate: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        mainDiagnosis: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        complicationsDiagnosis: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        relatedDiagnosis: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        complaints: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        medicalHistory: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        KT: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        MRT: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        FBC: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        FEGDC: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        histology: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        MDKDecision: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        PT_PHTOperation: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        recommendations: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        date: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
        doctor: {
            min: 2,
            max: 100,
            placeholder: "lololo",
        },
    };

    return {
        schema: Yup.object().shape({
            name: Yup.string()
                .min(fields.name.min, "Minimal length is " + fields.name.min)
                .max(fields.name.max, "Maximal length is " + fields.name.max)
                .required("Required field"),
            surname: Yup.string()
                .min(fields.surname.min, "Minimal length is " + fields.surname.min)
                .max(fields.surname.max, "Maximal length is " + fields.surname.max)
                .required("Required field"),
            patronymic: Yup.string()
                .min(fields.patronymic.min, "Minimal length is " + fields.patronymic.min)
                .max(fields.patronymic.max, "Maximal length is " + fields.patronymic.max)
                .required("Required field"),
            birthday: Yup.string()
                .min(fields.birthday.min, "Minimal length is " + fields.birthday.min)
                .max(fields.birthday.max, "Maximal length is " + fields.birthday.max)
                .required("Required field"),
            address: Yup.string()
                .min(fields.address.min, "Minimal length is " + fields.address.min)
                .max(fields.address.max, "Maximal length is " + fields.address.max)
                .required("Required field"),
            job: Yup.string()
                .min(fields.job.min, "Minimal length is " + fields.job.min)
                .max(fields.job.max, "Maximal length is " + fields.job.max)
                .required("Required field"),
            hospitalizationDate: Yup.string()
                .min(fields.hospitalizationDate.min, "Minimal length is " + fields.hospitalizationDate.min)
                .max(fields.hospitalizationDate.max, "Maximal length is " + fields.hospitalizationDate.max)
                .required("Required field"),
            dischargeDate: Yup.string()
                .min(fields.dischargeDate.min, "Minimal length is " + fields.dischargeDate.min)
                .max(fields.dischargeDate.max, "Maximal length is " + fields.dischargeDate.max)
                .required("Required field"),
            mainDiagnosis: Yup.string()
                .min(fields.mainDiagnosis.min, "Minimal length is " + fields.mainDiagnosis.min)
                .max(fields.mainDiagnosis.max, "Maximal length is " + fields.mainDiagnosis.max)
                .required("Required field"),
            complicationsDiagnosis: Yup.string()
                .min(fields.complicationsDiagnosis.min, "Minimal length is " + fields.complicationsDiagnosis.min)
                .max(fields.complicationsDiagnosis.max, "Maximal length is " + fields.complicationsDiagnosis.max)
                .required("Required field"),
            relatedDiagnosis: Yup.string()
                .min(fields.relatedDiagnosis.min, "Minimal length is " + fields.relatedDiagnosis.min)
                .max(fields.relatedDiagnosis.max, "Maximal length is " + fields.relatedDiagnosis.max)
                .required("Required field"),
            complaints: Yup.string()
                .min(fields.complaints.min, "Minimal length is " + fields.complaints.min)
                .max(fields.complaints.max, "Maximal length is " + fields.complaints.max)
                .required("Required field"),
            medicalHistory: Yup.string()
                .min(fields.medicalHistory.min, "Minimal length is " + fields.medicalHistory.min)
                .max(fields.medicalHistory.max, "Maximal length is " + fields.medicalHistory.max)
                .required("Required field"),
            KT: Yup.string()
                .min(fields.KT.min, "Minimal length is " + fields.KT.min)
                .max(fields.KT.max, "Maximal length is " + fields.KT.max)
                .required("Required field"),
            MRT: Yup.string()
                .min(fields.MRT.min, "Minimal length is " + fields.MRT.min)
                .max(fields.MRT.max, "Maximal length is " + fields.MRT.max)
                .required("Required field"),
            FBC: Yup.string()
                .min(fields.FBC.min, "Minimal length is " + fields.FBC.min)
                .max(fields.FBC.max, "Maximal length is " + fields.FBC.max)
                .required("Required field"),
            FEGDC: Yup.string()
                .min(fields.FEGDC.min, "Minimal length is " + fields.FEGDC.min)
                .max(fields.FEGDC.max, "Maximal length is " + fields.FEGDC.max)
                .required("Required field"),
            histology: Yup.string()
                .min(fields.histology.min, "Minimal length is " + fields.histology.min)
                .max(fields.histology.max, "Maximal length is " + fields.histology.max)
                .required("Required field"),
            MDKDecision: Yup.string()
                .min(fields.MDKDecision.min, "Minimal length is " + fields.MDKDecision.min)
                .max(fields.MDKDecision.max, "Maximal length is " + fields.MDKDecision.max)
                .required("Required field"),
            PT_PHTOperation: Yup.string()
                .min(fields.PT_PHTOperation.min, "Minimal length is " + fields.PT_PHTOperation.min)
                .max(fields.PT_PHTOperation.max, "Maximal length is " + fields.PT_PHTOperation.max)
                .required("Required field"),
            recommendations: Yup.string()
                .min(fields.recommendations.min, "Minimal length is " + fields.recommendations.min)
                .max(fields.recommendations.max, "Maximal length is " + fields.recommendations.max)
                .required("Required field"),
            date: Yup.string()
                .min(fields.date.min, "Minimal length is " + fields.date.min)
                .max(fields.date.max, "Maximal length is " + fields.date.max)
                .required("Required field"),
            doctor: Yup.string()
                .min(fields.doctor.min, "Minimal length is " + fields.doctor.min)
                .max(fields.doctor.max, "Maximal length is " + fields.doctor.max)
                .required("Required field"),
        }),
        fields,
    };
};
