import { FC } from "react";

interface ControlButtonsProps {
    saveCallback: () => void;
    printCallback: () => void;
}

const ControlButtons: FC<ControlButtonsProps> = (props) => {
    return (
        <div className="flex justify-end p-4 pr-20 border-8 border-emerald-500 justify-self-end">
            <div className="flex gap-6">
                <button type="button" onClick={props.saveCallback} className="p-2 border-2 border-emerald-800">Save</button>
                <button type="button" onClick={props.printCallback} className="p-2 border-2 border-emerald-800">Print</button>
            </div>
        </div>
    );
};

export default ControlButtons;
