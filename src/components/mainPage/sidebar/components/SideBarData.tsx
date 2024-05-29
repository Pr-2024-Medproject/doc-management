import { ChangeEvent, FC, useMemo, useState } from "react";
import PatientSearch from "./PatientSearch";
import Patients from "./Patients";
import { useStore } from "../../../../store";
import { filterPatients } from "../../../../services/PatientServiceImpl";

interface SidebarProps {}

const SideBarData: FC<SidebarProps> = (_props) => {
    const { patients } = useStore();
    const [searchPattern, setSearchPattern] = useState<string>("");

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        // setPatientName(e.target.value);
        setSearchPattern(e.target.value);
    };

    const filteredPatients = useMemo(
        () => filterPatients(searchPattern, patients),
        [searchPattern, patients],
    );

    return (
        <div className="flex-grow overflow-hidden overflow-y-auto">
            <PatientSearch changeInputValue={changeInputValue} />
            <Patients patients={filteredPatients} />
        </div>
    );
};

export default SideBarData;
