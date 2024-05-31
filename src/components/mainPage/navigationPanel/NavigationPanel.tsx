import { FC } from "react";
import NavigationItem from "./NavigationItem";
import { FORMS } from "../../../constants/Forms";
import Input from "../../shared/Input";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../../store";
import { isPrintableForm } from "../../../services/FormServiceImpl";

interface NavigationPanelProps {}

const NavigationPanel: FC<NavigationPanelProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMainPage = location.pathname === "/doc-management/";
    const { selectedPatient } = useStore();

    return (
        <nav className="h-full p-4 flex justify-evenly">
            {!isMainPage && (
                <Input
                    type="button"
                    value={"Перейти на головну"}
                    onClick={() => navigate("/doc-management/")}
                />
            )}
            {FORMS.map((info) => (
                <NavigationItem
                    key={info.key}
                    formInfo={info}
                    disabled={isPrintableForm(info) && !selectedPatient}
                />
            ))}
        </nav>
    );
};

export default NavigationPanel;
