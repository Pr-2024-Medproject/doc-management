import { ChangeEvent, FC } from "react";
import SearchIcon from "../../../../assets/search.svg";
import Input from "../../../Input/Input";

interface PatientSearchProps {
    patientName: string;
    changeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PatientSearch: FC<PatientSearchProps> = ({ patientName, changeInputValue }) => {
    return (
        <div className="flex flex-col border-2 border-black w-full mb-4">
            <h3 className="font-semibold mb-2 text-center">Search for patient</h3>
            <div className="flex items-center justify-center gap-4">
                <Input
                    type="text"
                    name="search"
                    placeholder="Search by name"
                    value={patientName}
                    onChange={changeInputValue}
                    className="w-80"
                />
                <button className="flex items-center justify-center w-8">
                    <img src={SearchIcon} alt="SearchIcon" />
                </button>
            </div>
        </div>
    );
};

export default PatientSearch;
