import React from "react";
import { Patient, PatientData } from "../../../types/models/Patient";
import { patientDataFields } from "../../../validation-schemas/PatientDataSchema";

interface PatientTableProps {
    patients: Patient[];
}

const PatientsTable: React.FC<PatientTableProps> = ({ patients }) => {
    if (patients.length === 0) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500 text-lg">No patients available</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
                <thead className="bg-gray-200">
                    <tr>
                        {Object.values(patientDataFields).map((value) => {
                            return (
                                <th key={value.placeholder} className="px-4 py-2 border">
                                    {value.placeholder}
                                </th>
                            );
                        })}
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
    );
};

export default PatientsTable;
