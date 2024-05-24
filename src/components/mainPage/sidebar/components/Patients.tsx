import { FC } from "react";
import Input from "../../../shared/Input";

interface PatientsProps {
    patients: Array<{ name: string; i: number }>;
}

const Patients: FC<PatientsProps> = ({ patients }) => {
    const handleClick = (patient: string) => {
        console.log(patient);
    };

    if (patients.length === 0) return;

    return (
        <div className="flex flex-col gap-4 pe-4 py-4 w-full bg-white rounded-md">
            {patients.map((patient, i) => (
                <Input
                    type="button"
                    value={patient.name}
                    key={patient.name + i}
                    onClick={() => handleClick(patient.name)}
                    className={`text-lg font-medium rounded-md text-left ${
                        i % 2 === 0 ? "text-gray-900 bg-gray-100" : "text-gray-700"
                    }`}
                />
            ))}
        </div>
    );
};

export default Patients;
