import { FC, useMemo } from "react";
import Input from "../../shared/Input";
import { useStore } from "../../../store";
import { isPrintableForm } from "../../../services/FormServiceImpl";
import DropDown from "../../shared/DropDown";
import useFormInfo from "../../../hooks/useFormInfo";
import { Patient } from "../../../types/models/Patient";
import { getPatientHistoryDates } from "../../../services/PatientServiceImpl";
import { HistoryFormsKeys } from "../../../types/models/History";
import CreateNewPatientButton from "../../shared/CreateNewPatientButton";

interface ControlButtonsProps {
    disabled: boolean;
    patient?: Patient;
    saveCallback: () => void;
    printCallback: () => void;
    historyDateHandler?: (value: string) => void;
}

const ControlButtons: FC<ControlButtonsProps> = ({
    disabled,
    patient = {} as Patient,
    saveCallback,
    printCallback,
    historyDateHandler = () => {},
}) => {
    const { selectedPatient } = useStore();
    const currentForm = useFormInfo();

    const { historyDates, printableForm } = useMemo(() => {
        return {
            historyDates: getPatientHistoryDates(currentForm.key as HistoryFormsKeys, patient),
            printableForm: isPrintableForm(currentForm),
        };
    }, [currentForm.key, patient]);

    return (
        <div className="flex justify-end p-4 pr-20 justify-self-end">
            <div className="flex flex-grow gap-6">
                {selectedPatient && (
                    <>
                        <CreateNewPatientButton value="Чи створити нового паціента" />
                        {printableForm && (
                            <DropDown
                                defaultValue="Оберіть дату"
                                values={historyDates}
                                onChange={(e) => historyDateHandler(e?.currentTarget.value || "")}
                            />
                        )}
                    </>
                )}
            </div>

            <div className="flex gap-6">
                <Input type="button" value="Зберегти" disabled={disabled} onClick={saveCallback} />
                {printableForm && (
                    <Input
                        type="button"
                        value="Згенерувати"
                        disabled={disabled}
                        onClick={printCallback}
                    />
                )}
            </div>
        </div>
    );
};

export default ControlButtons;
