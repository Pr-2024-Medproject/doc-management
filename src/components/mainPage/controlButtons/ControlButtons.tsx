import { FC, useMemo } from "react";
import Input from "../../shared/Input";
import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { getPatientDataFormInfo, isPrintableForm } from "../../../services/FormServiceImpl";
import DropDown from "../../shared/DropDown";
import useFormInfo from "../../../hooks/useFormInfo";
import { Patient } from "../../../types/models/Patient";
import { getPatientHistoryDates } from "../../../services/PatientServiceImpl";
import { HistoryFormsKeys } from "../../../types/models/History";

interface ControlButtonsProps {
    disabled: boolean;
    patient: Patient;
    saveCallback: () => void;
    printCallback: () => void;
    historyDateHandler?: (value: string) => void;
}

const ControlButtons: FC<ControlButtonsProps> = (props) => {
    const navigate = useNavigate();
    const dataForm = getPatientDataFormInfo();
    const { selectedPatient, setSelectedPatient } = useStore();

    const currentForm = useFormInfo();

    const createNewPatientHandler = () => {
        setSelectedPatient(null);
        navigate(`/doc-management/form/${dataForm?.id}`);
    };

    const historyDates = useMemo(
        () => [
            "Оберіть дату",
            ...getPatientHistoryDates(currentForm.key as HistoryFormsKeys, props.patient),
        ],
        [currentForm.key, props.patient],
    );

    return (
        <div className="flex justify-end p-4 pr-20 justify-self-end">
            <div className="flex flex-grow gap-6">
                {selectedPatient && (
                    <>
                        <Input
                            type="button"
                            value="Or create new patient"
                            disabled={false}
                            onClick={createNewPatientHandler}
                        />
                        {isPrintableForm(currentForm) && (
                            <DropDown
                                values={historyDates}
                                onSelect={(e) =>
                                    props.historyDateHandler &&
                                    props.historyDateHandler(e?.currentTarget.value || "")
                                }
                            />
                        )}
                    </>
                )}
            </div>

            <div className="flex gap-6">
                <Input
                    type="button"
                    value="Save"
                    disabled={props.disabled}
                    onClick={props.saveCallback}
                />
                <Input
                    type="button"
                    value="Print"
                    disabled={props.disabled}
                    onClick={props.printCallback}
                />
            </div>
        </div>
    );
};

export default ControlButtons;
