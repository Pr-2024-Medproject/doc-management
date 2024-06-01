import { FC } from "react";
import { Link } from "react-router-dom";
import { FormInfo } from "../../../types/Forms";
import useFormInfo from "../../../hooks/useFormInfo";
import Input from "../../shared/Input";

interface NavigationItemProps {
    formInfo: FormInfo;
    disabled: boolean;
}

const NavigationItem: FC<NavigationItemProps> = ({ formInfo, disabled }) => {
    const current = useFormInfo();
    const highlightCurrent = current.id === formInfo.id ? "border-4 border-stone-400" : "";

    return (
        <Link to={`/form/${formInfo.id}`}>
            <Input
                type="button"
                value={formInfo.name}
                className={highlightCurrent}
                disabled={disabled}
            />
        </Link>
    );
};

export default NavigationItem;
