import { FC, useState } from "react";
import BurgerMenuIcon from "/assets/burger-menu.svg";
import SideBarData from "./components/SideBarData";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = (_props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((value) => !value);
    };

    return (
        <aside
            className={`flex flex-col h-full p-4 relative transition-all duration-300 ${
                isSidebarOpen ? "w-[40%]" : "w-20"
            }`}
            style={{
                boxShadow: "4px 0 15px -2px rgba(0, 0, 0, 0.1)",
            }}
        >
            {isSidebarOpen && <SideBarData />}

            <div className={`flex justify-end items-end ${isSidebarOpen ? "" : "h-full"}`}>
                <button onClick={toggleSidebar} className="w-14">
                    <img src={BurgerMenuIcon} alt="menuIcon" />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
