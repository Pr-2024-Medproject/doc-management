import { ChangeEvent, FC, useState } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";
import { useStore } from "../../../../store";

interface SidebarProps {}

const SideBarData: FC<SidebarProps> = (_props) => {
    const [patientName, setPatientName] = useState("");

    const { patients } = useStore();

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPatientName(e.target.value);
    };

    return (
        <div className="flex-grow overflow-hidden overflow-y-auto">
            <PatientSearch patientName={patientName} changeInputValue={changeInputValue} />
            <Patients patients={patients} />
        </div>
    );
};

export default SideBarData;
