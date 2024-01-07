import React from "react";
import { Category } from "../components/ProjectCard";

export const NavbarItem: React.FC<{
    value: Category | "all";
    handleFilterCategory: Function;
    active: string;
}> = ({ value, handleFilterCategory, active }) => {
    return (
        <li
            className={`cursor-pointer uppercase hover:text-secondary hover:underline hover:underline-offset-4 ${
                active === value
                    ? "text-secondary underline underline-offset-4"
                    : "text-dark"
            }`}
            onClick={() => {
                handleFilterCategory(value);
            }}
        >
            {value}
        </li>
    );
};

const ProjectsNavbar: React.FC<{
    handleFilterCategory: Function;
    active: string;
}> = (props: any) => {
    return (
        <div className="flex flex-row space-x-20 px-3 py-2 list-none ">
            <NavbarItem value="all" {...props} />
            <NavbarItem value="frontend" {...props} />
            <NavbarItem value="backend" {...props} />
            <NavbarItem value="fullstack" {...props} />
        </div>
    );
};

export default ProjectsNavbar;
