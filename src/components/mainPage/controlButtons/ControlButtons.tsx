import { FC } from "react";
import Input from "../../shared/Input";

interface ControlButtonsProps {
    disabled: boolean;
    saveCallback: () => void;
    printCallback: () => void;
}

const ControlButtons: FC<ControlButtonsProps> = (props) => {
    return (
        <div className="flex justify-end p-4 pr-20 justify-self-end">
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
