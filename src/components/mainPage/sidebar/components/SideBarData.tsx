import { ChangeEvent, FC, useState } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { Patient } from "../../../../types/models/Patient";
import { patient } from "../../../../constants/mock";

interface SidebarProps {}

const SideBarData: FC<SidebarProps> = (_props) => {
    const [patientName, setPatientName] = useState("");

    const mockPatients = [patient];
    const [patients] = useLocalStorage<Patient[]>("patients", mockPatients);
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
