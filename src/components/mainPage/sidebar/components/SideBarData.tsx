import { ChangeEvent, FC, useState } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";

type SidebarProps = {};

const SideBarData: FC<SidebarProps> = (_props) => {
    const [patientName, setPatientName] = useState("");
    const mockPatients = [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Emily Davis",
        "William Brown",
        "Olivia Wilson",
        "James Taylor",
        "Sophia Moore",
        "Liam Anderson",
        "Isabella Thomas",
        "Ethan Jackson",
        "Ethan Jackson",
    ];

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPatientName(e.target.value);
    };

    return (
        <div className="flex-grow overflow-hidden overflow-y-auto">
            <PatientSearch patientName={patientName} changeInputValue={changeInputValue} />
            <Patients patients={mockPatients} />
        </div>
    );
};

export default SideBarData;
