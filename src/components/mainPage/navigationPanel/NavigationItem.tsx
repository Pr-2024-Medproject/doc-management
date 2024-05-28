import { FC } from "react";
import { Link } from "react-router-dom";
import { FormInfo } from "../../../types/Forms";
import useFormInfo from "../../../hooks/useFormInfo";
import Input from "../../shared/Input";

interface NavigationItemProps {
    formInfo: FormInfo;
}

const NavigationItem: FC<NavigationItemProps> = (props) => {
    const current = useFormInfo();
    const highlightCurrent = current.id === props.formInfo.id ? "border-4 border-stone-400" : "";

    return (
        <Link to={`/doc-management/form/${props.formInfo.id}`}>
            <Input type="button" value={props.formInfo.name} className={highlightCurrent} />
        </Link>
    );
};

export default NavigationItem;
