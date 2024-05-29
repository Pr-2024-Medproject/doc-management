import { FC } from "react";
import NavigationItem from "./NavigationItem";
import { FORMS } from "../../../constants/Forms";
import Input from "../../shared/Input";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationPanelProps {}

const NavigationPanel: FC<NavigationPanelProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMainPage = location.pathname === "/doc-management/";

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
                <NavigationItem key={info.key} formInfo={info} />
            ))}
        </nav>
    );
};

export default NavigationPanel;
