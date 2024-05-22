import { FC } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";

type SidebarProps = {};

const SideBarData: FC<SidebarProps> = (_props) => {
    return (
        <div className="flex-grow">
            <PatientSearch />
            <Patients />
        </div>
    );
};

export default SideBarData;
