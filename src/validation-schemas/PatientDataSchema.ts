import { PATIENT_DATA_OPTIONS } from "../constants/FormOptions";
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
        placeholder: "Вік",
        initial: "",
        type: "number",
    },
    address: {
        min: 2,
        max: 100,
        placeholder: "Адреса",
        initial: "",
        type: "text",
    },
    job: {
        min: 2,
        max: 100,
        placeholder: "Професія",
        initial: "",
        type: "text",
    },
    hospitalizationDate: {
        min: 2,
        max: 100,
        placeholder: "Дата госпіталізації",
        initial: "",
        type: "date",
    },
    dischargeDate: {
        min: 2,
        max: 100,
        placeholder: "Дата виписки",
        initial: "",
        type: "date",
    },
    hospitalizationDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Діагноз при госпіталізації",
        initial: "",
        type: "text",
    },
    mainDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Діагноз заключний",
        initial: "",
        type: "text",
    },
    complicationsDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Ускладнення",
        initial: "",
        type: "text",
    },
    relatedDiagnosis: {
        min: 2,
        max: 100,
        placeholder: "Супутній",
        initial: "",
        type: "text",
    },
    MKBcipher: {
        min: 2,
        max: 100,
        placeholder: "МКБ Шифр",
        initial: "",
        type: "text",
    },
    operationDate: {
        min: 2,
        max: 100,
        placeholder: "Дата операції",
        initial: "",
        type: "date",
    },
    operationName: {
        min: 2,
        max: 100,
        placeholder: "Назва операції",
        initial: "",
        type: "text",
    },
    LT_PHTDate: {
        min: 2,
        max: 100,
        placeholder: "Дата ЛТ / ПХТ",
        initial: "",
        type: "date",
    },
    PHTscheme: {
        min: 2,
        max: 100,
        placeholder: "Схема ПХТ",
        initial: "",
        type: "text",
    },
    histology_cytology: {
        min: 2,
        max: 100,
        placeholder: "Гістологія/цитологія",
        initial: "",
        type: "text",
    },
    treatingDoctor: {
        min: 2,
        max: 100,
        placeholder: "Лікуючий лікар",
        initial: "",
        type: "text",
    },
    departmentHead: {
        min: 2,
        max: 100,
        placeholder: "Завідувач відділення",
        initial: "",
        type: "text",
    },
    actingDepartmentHead: {
        min: 2,
        max: 100,
        placeholder: "В.о. зав. відділення",
        initial: "",
        type: "text",
    },

    generalCondition: {
        min: 2,
        max: 100,
        placeholder: "Загальний стан",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.generalCondition,
    },
    constitution: {
        min: 2,
        max: 100,
        placeholder: "Конституція",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.constitution,
    },
    nutrition: {
        min: 2,
        max: 100,
        placeholder: "Харчування",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.nutrition,
    },
    dyspnea: {
        min: 2,
        max: 100,
        placeholder: "Задишка",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.dyspnea,
    },
    skin: {
        min: 2,
        max: 100,
        placeholder: "Шкіра",
        initial: "",
        type: "text",
    },
    heartSounds: {
        min: 2,
        max: 100,
        placeholder: "Тони серця",
        initial: "",
        type: "text",
    },
    pulse: {
        min: 2,
        max: 100,
        placeholder: "Пульс",
        initial: "",
        type: "text",
    },
    AT: {
        min: 2,
        max: 100,
        placeholder: "АТ",
        initial: "",
        type: "text",
    },
    ChDR: {
        min: 2,
        max: 100,
        placeholder: "ЧДР",
        initial: "",
        type: "text",
    },
    tongue: {
        min: 2,
        max: 100,
        placeholder: "Язик",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.tongue,
    },
    stomach: {
        min: 2,
        max: 100,
        placeholder: "Живіт",
        initial: "",
        type: "text",
    },
    liver: {
        min: 2,
        max: 100,
        placeholder: "Печінка",
        initial: "",
        type: "text",
    },
    pasternackiSymptom: {
        min: 2,
        max: 100,
        placeholder: "Симптом Пастернацького",
        initial: "",
        type: "text",
    },
    chair: {
        min: 2,
        max: 100,
        placeholder: "Стілець",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.chair,
    },
    diuresis: {
        min: 2,
        max: 100,
        placeholder: "Діурез",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.diuresis,
    },

    supraclavicularL_v: {
        min: 2,
        max: 100,
        placeholder: "Надключичні л/в",
        initial: "",
        type: "editableSelect",
        options: PATIENT_DATA_OPTIONS.supraclavicularL_v,
    },
    axillaryL_v: {
        min: 2,
        max: 100,
        placeholder: "Пахові л/в",
        initial: "",
        type: "text",
    },
    suprapulmonaryBreathing: {
        min: 2,
        max: 100,
        placeholder: "Над легенями дихання",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.suprapulmonaryBreathing,
    },
    breathShortness: {
        min: 2,
        max: 100,
        placeholder: "Ослаблення дихання",
        initial: "",
        type: "text",
    },
    percussionally: {
        min: 2,
        max: 100,
        placeholder: "Перкуторно",
        initial: "",
        type: "select",
        options: PATIENT_DATA_OPTIONS.percussionally,
    },
    dullness: {
        min: 2,
        max: 100,
        placeholder: "Притуплення",
        initial: "",
        type: "text",
    },
    wheezing: {
        min: 2,
        max: 100,
        placeholder: "Хрипи",
        initial: "",
        type: "text",
    },

    complaints: {
        min: 2,
        max: 100,
        placeholder: "Скарги",
        initial: "",
        type: "text",
    },
};

export const patientDataSchema = schemaFactory(patientDataFields);
