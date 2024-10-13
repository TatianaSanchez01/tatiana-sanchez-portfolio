import React from "react";
import { NavbarItem } from "../atoms/NavbarItem";

const ProjectsNavbar: React.FC<{
    handleFilterCategory: Function;
    active: string;
}> = (props: any) => {
    return (
        <div className="flex flex-row md:flex-col gap-10 md:gap-2 md:items-center px-3 py-2 list-none">
            <NavbarItem value="all" {...props} />
            <NavbarItem value="frontend" {...props} />
            <NavbarItem value="backend" {...props} />
            <NavbarItem value="fullstack" {...props} />
        </div>
    );
};

export default ProjectsNavbar;
