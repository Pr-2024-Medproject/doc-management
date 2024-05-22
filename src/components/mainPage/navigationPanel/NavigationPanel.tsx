import { FC } from "react";

interface NavigationPanelProps {}

const NavigationPanel: FC<NavigationPanelProps> = (props) => {
    return (
        <nav className="border-2 border-red-500">Nav Panel</nav>
    );
}

export default NavigationPanel;