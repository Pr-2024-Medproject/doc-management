import { FC } from "react";

type PatientSearchProps = {};

const PatientSearch: FC<PatientSearchProps> = (_props) => {
    return (
        <div className="border-2 border-black w-full">
            <input className="w-full" type="text" name="" id="" placeholder="Search by name" />
        </div>
    );
};

export default PatientSearch;
