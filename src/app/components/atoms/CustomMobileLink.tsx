import React from 'react'
import { useRouter } from "next/navigation";

interface Props {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
}

function CustomMobileLink({
    href,
    title,
    className = "",
    toggle,
}: Props) {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-dark`}
            >
                {""}
            </span>
        </button>
    );
}

export default CustomMobileLink
