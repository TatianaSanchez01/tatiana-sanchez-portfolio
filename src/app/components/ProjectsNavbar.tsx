import React from "react";
import { Category } from "../components/ProjectCard";

export const NavbarItem: React.FC<{
    value: Category | "all";
    handleFilterCategory: Function;
    active: string;
}> = ({ value, handleFilterCategory, active }) => {
    return (
        <li
            className={`cursor-pointer uppercase hover:text-secondary dark:hover:text-secondaryDark hover:underline hover:underline-offset-4 ${
                active === value
                    ? "text-secondary dark:text-secondaryDark underline underline-offset-4"
                    : "text-dark dark:text-light"
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
        <div className="flex flex-row space-x-20 px-3 py-2 list-none">
            <NavbarItem value="all" {...props} />
            <NavbarItem value="frontend" {...props} />
            <NavbarItem value="backend" {...props} />
            <NavbarItem value="fullstack" {...props} />
        </div>
    );
};

export default ProjectsNavbar;
