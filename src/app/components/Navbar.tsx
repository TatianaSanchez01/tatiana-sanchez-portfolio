"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { LinkedinIcon, GithubIcon } from "./Icons";

const CustomLink = ({
    href,
    title,
    className = "",
}: {
    href: string;
    title: string;
    className?: string;
}) => {
    const pathName = usePathname();
    const cleanHref = href.split("?")[0];

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    pathName === cleanHref ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const Navbar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4 " />
                <CustomLink href="/about" title="About" className="mx-4 " />
                <CustomLink
                    href="/projects"
                    title="Projects"
                    className="ml-4 "
                />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="https://www.linkedin.com/in/tatiana-sanchez-sanin/"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                >
                    <LinkedinIcon />
                </motion.a>
                <motion.a
                    href="https://github.com/TatianaSanchez01"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                >
                    <GithubIcon />
                </motion.a>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
