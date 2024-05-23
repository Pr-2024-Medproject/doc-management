import { FC } from "react";
import Input from "../../../Input/Input";

interface PatientsProps {
    patients: string[];
}

const Patients: FC<PatientsProps> = ({ patients }) => {
    return (
        <div className="flex flex-col gap-4 p-4 border-2 border-gray-300 w-full bg-white rounded-md shadow-sm">
            {patients.map((patient, i) => (
                <Input
                    type="button"
                    value={patient}
                    key={patient + i}
                    className={`text-lg font-medium rounded-md text-left ${
                        i % 2 === 0 ? "text-gray-900 bg-gray-200" : "text-gray-700"
                    }`}
                />
            ))}
        </div>
    );
};

export default Patients;
