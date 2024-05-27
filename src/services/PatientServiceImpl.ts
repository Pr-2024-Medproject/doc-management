import { FormsKeys } from "../constants/Forms";
import { HistoryFormsKeys, HistoryModels } from "../types/models/History";
import { PatientData, Patient } from "../types/models/Patient";

export function createOrUpdatePatient(
    formValues: Partial<PatientData>,
    patient?: Patient,
): Patient {
    if (patient) {
        return {
            ...patient,
            ...formValues,
            history: patient.history,
        };
    }

    return {
        id: new Crypto().randomUUID(),
        history: { [FormsKeys.FORM_MED_STATEMENT]: [] },
        ...(formValues as PatientData),
    };
}

export function pushToPatientHistory(
    formKey: HistoryFormsKeys,
    formValues: HistoryModels,
    patient: Patient,
): Patient {
    patient.history[formKey].push(formValues);
    return patient;
}
