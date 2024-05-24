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

    age: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    address: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    job: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    hospitalizationDate: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    dischargeDate: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    mainDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    complicationsDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    relatedDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    MKBcipher: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    operationDate: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    operationName: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    LT_PHTDate: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    PHTscheme: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    histology_cytology: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    treatingDoctor: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    departmentHead: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    actingDepartmentHead: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },

    generalCondition: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    constitution: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    nutrition: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    dyspnea: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    skin: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    heartSounds: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    pulse: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    AT: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    ChDR: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    tongue: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    stomach: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    liver: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    pasternackiSymptom: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    chair: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    diuresis: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },

    supraclavicularL_v: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    axillaryL_v: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    suprapulmonaryBreathing: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    breathShortness: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    percussionally: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    dullness: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    wheezing: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
    
    complaints: {
        min: 2,
        max: 100,
        placeholder: "lololo",
        initial: "",
        type: "text",
    },
};

export const patientDataSchema = schemaFactory(patientDataFields);