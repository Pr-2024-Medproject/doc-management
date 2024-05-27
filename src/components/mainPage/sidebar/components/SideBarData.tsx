import { ChangeEvent, FC, useMemo, useState } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { Patient } from "../../../../types/models/Patient";

interface SidebarProps {}

const SideBarData: FC<SidebarProps> = (_props) => {
    const [patientName, setPatientName] = useState("");

    const { storedValue, getValues } = useLocalStorage<Patient>();

    const patientsSideBarData = useMemo(
        () => getValues().map((patient, i) => ({ name: patient.name, i })),
        [storedValue, getValues],
    );

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
