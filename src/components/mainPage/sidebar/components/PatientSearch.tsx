import { ChangeEvent, FC } from "react";
import Input from "../../../shared/Input";

interface PatientSearchProps {
    changeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PatientSearch: FC<PatientSearchProps> = ({ changeInputValue }) => {
    return (
        <div className="flex flex-col w-full mb-4">
            <h3 className="font-semibold mb-2 text-center">Пошук паціентів</h3>
            <div className="flex items-center justify-center gap-4">
                <Input
                    type="text"
                    placeholder="Пошук по прізвищу або імені"
                    onChange={changeInputValue}
                    className="w-80"
                />
            </div>
        </div>
    );
};

export default PatientSearch;
