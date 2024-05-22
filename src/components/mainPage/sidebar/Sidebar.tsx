import { FC } from "react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <aside className="border-2 border-cyan-300 w-[20%]">Sidebar</aside>
    );
}

export default Sidebar;
