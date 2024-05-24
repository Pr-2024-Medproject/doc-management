import { ChangeEvent, FC, useState } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { FormsKeys } from "../../../../constants/Forms";
import { Patient } from "../../../../types/models/Patient";

interface SidebarProps {}

const SideBarData: FC<SidebarProps> = (_props) => {
    const [patientName, setPatientName] = useState("");
    // const patient: Patient = {
    //     id: "123",
    //     name: "John",
    //     surname: "Doe",
    //     patronymic: "Smith",
    //     birthday: new Date("1990-01-01"),
    //     history: {
    //         [FormsKeys.FORM_MED_STATEMENT]: [
    //             {
    //                 name: "John",
    //                 surname: "Doe",
    //                 patronymic: "Smith",
    //                 birthday: new Date("1990-01-01"),
    //                 address: "123 Main St",
    //                 job: "Engineer",
    //                 hospitalizationDate: new Date("2023-01-01"),
    //                 dischargeDate: new Date("2023-01-10"),
    //                 mainDiagnosis: "Diagnosis A",
    //                 complicationsDiagnosis: "Complication A",
    //                 relatedDiagnosis: "Related A",
    //                 complaints: "Complaint A",
    //                 medicalHistory: "History A",
    //                 KT: "KT Data",
    //                 MRT: "MRT Data",
    //                 FBC: "FBC Data",
    //                 FEGDC: "FEGDC Data",
    //                 histology: "Histology Data",
    //                 MDKDecision: "Decision A",
    //                 PT_PHTOperation: "Operation A",
    //                 recommendations: "Recommendation A",
    //                 date: new Date("2023-01-11"),
    //                 doctor: "Dr. Smith",
    //             },
    //         ],
    //     },
    // };
    // const mockPatients = [patient];
    const [patients] = useLocalStorage<Patient[]>("patients", []);
    const patientsSideBarData = patients.map((patient, i) => ({ name: patient.name, i }));

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPatientName(e.target.value);
    };

    return (
        <div className="flex-grow overflow-hidden overflow-y-auto">
            <PatientSearch patientName={patientName} changeInputValue={changeInputValue} />
            <Patients patients={patientsSideBarData} />
        </div>
    );
};

export default SideBarData;
