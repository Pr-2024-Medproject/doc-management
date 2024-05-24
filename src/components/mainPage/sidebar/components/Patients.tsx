import { FC } from "react";
import Input from "../../../shared/Input";

interface PatientsProps {
    patients: string[];
}

const Patients: FC<PatientsProps> = ({ patients }) => {
    const handleClick = (patient: string) => {
        console.log(patient);
    };

    if (patients.length === 0) return;

    return (
        <div className="flex flex-col gap-4 pe-4 py-4 w-full bg-white rounded-md shadow-sm">
            {patients.map((patient, i) => (
                <Input
                    type="button"
                    value={patient}
                    key={patient + i}
                    onClick={() => handleClick(patient)}
                    className={`text-lg font-medium rounded-md text-left hover:bg-gray-200 ${
                        i % 2 === 0 ? "text-gray-900 bg-gray-100" : "text-gray-700"
                    }`}
                />
            ))}
        </div>
    );
};

export default Patients;
