import { FC } from "react";

interface ControlButtonsProps {}

const ControlButtons: FC<ControlButtonsProps> = () => {
    return (
        <div className="flex justify-evenly p-4 border-8 border-emerald-500 justify-self-end">
            <div className="p-2 border-emerald-800">Buttons</div>
            <div className="p-2 border-emerald-800">Buttons</div>
        </div>
    );
}

export default ControlButtons;