import { FC } from "react";
import Input from "../../shared/Input";
import { useStore } from "../../../store";

interface ControlButtonsProps {
    disabled: boolean;
    saveCallback: () => void;
    printCallback: () => void;
}

const ControlButtons: FC<ControlButtonsProps> = (props) => {
    const { selectedPatient, setSelectedPatient } = useStore();

    return (
        <div className="flex justify-end p-4 pr-20 justify-self-end">
            <div className="flex flex-grow">
                {selectedPatient && (
                    <Input
                        type="button"
                        value="Or create new patient"
                        disabled={false}
                        onClick={() => setSelectedPatient(null)}
                    />
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
