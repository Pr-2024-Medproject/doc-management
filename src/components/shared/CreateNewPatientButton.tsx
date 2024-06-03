import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { getPatientDataFormInfo } from "../../services/FormServiceImpl";
import { useStore } from "../../store";

interface ControlButtonsProps {
    value: string;
    className?: string;
}

const CreateNewPatientButton: FC<ControlButtonsProps> = ({ value, className = "" }) => {
    const navigate = useNavigate();
    const { setSelectedPatient } = useStore();
    const dataForm = getPatientDataFormInfo();

    const createNewPatientHandler = () => {
        setSelectedPatient(null);
        navigate(`/form/${dataForm?.id}`);
    };

    return (
        <Input
            className={className}
            type="button"
            value={value}
            disabled={false}
            onClick={createNewPatientHandler}
        />
    );
};

export default CreateNewPatientButton;
