import React from "react";
import Link from "next/link";
import Layout from "../atoms/Layout";
const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg text-dark dark:text-light sm:text-base ">
            <Layout className="py-10 flex items-center justify-between lg:flex-col lg:py-6">
                <span>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <div className="flex items-center lg:py:2">
                    Build with{" "}
                    <span className="text-primary text-2xl px-1">&#9825;</span>
                    by&nbsp;{" "}
                    <Link
                        href="https://www.linkedin.com/in/tatiana-sanchez-sanin/"
                        className="underline underline-offset-2"
                        target="_blank"
                    >
                        Tatiana Sanchez
                    </Link>
                </div>
                <Link href="/contact" className="underline underline-offset-2">
                    Say Hello
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
