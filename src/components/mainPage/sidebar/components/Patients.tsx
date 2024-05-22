import { FC } from "react";

type PatientsProps = {};

const Patients: FC<PatientsProps> = (_props) => {
    return (
        <div className="flex flex-col gap-4 border-2 border-green w-full">
            <h3>Patient 1</h3>
            <h3>Patient 2</h3>
            <h3>Patient 3</h3>
            <h3>Patient 4</h3>
            <h3>Patient 5</h3>
        </div>
    );
};

export default Patients;
