import { Category } from "../molecules/ProjectCard";

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