import { Patient } from "../types/models/Patient";
import { FormsKeys } from "./Forms";

export const patient: Patient = {
    id: "123",
    name: "John",
    surname: "Doe",
    patronymic: "Smith",
    birthday: new Date("1990-01-01"),
    age: 34,
    address: "123 Main St",
    job: "Engineer",
    hospitalizationDate: new Date("2023-01-01"),
    dischargeDate: new Date("2023-01-10"),
    hospitalizationDiagnosis: "Diagnosis A",
    mainDiagnosis: "Diagnosis A",
    complicationsDiagnosis: "Complication A",
    relatedDiagnosis: "Related A",
    MKBcipher: "Cipher A",
    operationDate: new Date("2023-02-01"),
    operationName: "Operation A",
    LT_PHTDate: new Date("2023-03-01"),
    PHTscheme: "Scheme A",
    histology_cytology: "Histology A",
    treatingDoctor: "Dr. Smith",
    departmentHead: "Dr. Johnson",
    actingDepartmentHead: "Dr. Brown",
    generalCondition: "Good",
    constitution: "Average",
    nutrition: "Normal",
    dyspnea: "None",
    skin: ["Normal"],
    heartSounds: ["Clear"],
    pulse: "72",
    AT: "120/80",
    ChDR: "Normal",
    tongue: "Normal",
    stomach: ["Normal"],
    liver: "Normal",
    pasternackiSymptom: ["None"],
    chair: "Normal",
    diuresis: "Normal",
    supraclavicularL_v: ["None"],
    axillaryL_v: ["None"],
    suprapulmonaryBreathing: "Normal",
    breathShortness: ["None"],
    percussionally: "Normal",
    dullness: ["None"],
    wheezing: ["None"],
    complaints: ["None"],
    history: {
        [FormsKeys.FORM_MED_STATEMENT]: [
            {
                name: "John",
                surname: "Doe",
                patronymic: "Smith",
                birthday: new Date("1990-01-01"),
                histology_cytology: "Histology A",
                relatedDiagnosis: "Related A",
                medicalHistory: "History A",
                KT: "KT Data",
                MRT: "MRT Data",
                FBC: "FBC Data",
                FEGDC: "FEGDC Data",
                MDKDecision: "Decision A",
                PT_PHTOperation: "Operation A",
                recommendations: "Recommendation A",
                date: new Date("2023-01-11"),
                treatingDoctor: "Dr. Smith",
                address: "123 Main St",
                job: "Engineer",
                hospitalizationDate: new Date("2023-01-01"),
                dischargeDate: new Date("2023-01-10"),
                mainDiagnosis: "Diagnosis A",
                complicationsDiagnosis: "Complication A",
                complaints: ["Complaint A"],
            },
        ],
    },
};