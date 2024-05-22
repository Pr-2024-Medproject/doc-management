import { FC } from "react";

interface ControlButtonsProps {}

const ControlButtons: FC<ControlButtonsProps> = () => {
    return (
        <div className="flex justify-end p-4 pr-20 border-8 border-emerald-500 justify-self-end">
            <div className="flex gap-6">
                <button className="p-2 border-2 border-emerald-800">Buttons</button>
                <button className="p-2 border-2 border-emerald-800">Buttons</button>
            </div>
        </div>
    );
};

export default ControlButtons;
