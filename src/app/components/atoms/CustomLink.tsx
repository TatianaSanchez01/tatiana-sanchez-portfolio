import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    href: string;
    title: string;
    className?: string;
}

function CustomLink({ href, title, className = "" }: Props) {
    const pathName = usePathname();
    const cleanHref = href.split("?")[0];

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    pathName === cleanHref ? "w-full" : "w-0"
                } dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

export default CustomLink;
