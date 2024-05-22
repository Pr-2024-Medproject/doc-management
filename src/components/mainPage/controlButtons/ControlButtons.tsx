import { FC } from "react";

interface ControlButtonsProps {}

const ControlButtons: FC<ControlButtonsProps> = () => {
    return (
        <div className="border-2 border-emerald-500 h-[20%] p-4 flex justify-evenly">
            <div className="p-2 border-emerald-800 border-2">
                Save
            </div>
            <div className="p-2 border-emerald-800 border-2">
                Generate .doc
            </div>
        </div>
    );
};

export default ControlButtons;
