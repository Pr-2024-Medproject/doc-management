import { FC } from "react";
import Input from "../../../shared/Input";
import { useNavigate } from "react-router-dom";
import { getPatientDataFormInfo } from "../../../../services/FormServiceImpl";
import { Patient } from "../../../../types/models/Patient";
import { useStore } from "../../../../store";

interface PatientsProps {
    patients: Patient[];
}

const Patients: FC<PatientsProps> = ({ patients }) => {
    const navigate = useNavigate();
    const { selectedPatient, setSelectedPatient } = useStore();
    const formInfo = getPatientDataFormInfo();

    const handleClick = (patient: Patient) => {
        setSelectedPatient(patient);
        navigate(`/form/${formInfo?.id}`);
    };

    if (patients.length === 0) {
        return (
            <div className="flex justify-center items-center">
                <p className="text-gray-500 text-lg">No patients available</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 pe-4 py-4 w-full bg-white rounded-md">
            {patients.map((patient, i) => (
                <Input
                    type="button"
                    value={patient.surname + " " + patient.name}
                    key={patient.name + i}
                    onClick={() => handleClick(patient)}
                    className={`text-lg font-medium rounded-md text-left ${
                        i % 2 === 0 ? "text-gray-900 bg-gray-100" : "text-gray-700"
                    } ${selectedPatient?.id === patient.id ? "border-2 border-stone-400" : ""}`}
                />
            ))}
        </div>
    );
};

export default Patients;
