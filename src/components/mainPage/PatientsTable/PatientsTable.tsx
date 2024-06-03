import React from "react";
import { Patient, PatientData } from "../../../types/models/Patient";
import { patientDataFields } from "../../../validation-schemas/PatientDataSchema";
import CreateNewPatientButton from "../../shared/CreateNewPatientButton";

interface PatientTableProps {
    patients: Patient[];
}

const PatientsTable: React.FC<PatientTableProps> = ({ patients }) => {
    return (
        <div className="flex flex-col items-center h-full mx-8">
            <CreateNewPatientButton className="my-8" value="Cтворити нового паціента" />
            {patients.length === 0 ? (
                <p className="text-gray-500 text-lg">No patients available</p>
            ) : (
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full bg-white border">
                        <thead className="bg-gray-200">
                            <tr>
                                {Object.values(patientDataFields).map((field) => (
                                    <th key={field.placeholder} className="px-4 py-2 border">
                                        {field.placeholder}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    {Object.keys(patientDataFields).map((key) => (
                                        <td key={patient.id + key} className="px-4 py-2 border">
                                            {String(patient[key as keyof PatientData])}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default PatientsTable;
