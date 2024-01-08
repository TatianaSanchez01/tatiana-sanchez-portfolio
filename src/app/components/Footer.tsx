import React from "react";
import Link from "next/link";
import Layout from "./utils/Layout";
const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg ">
            <Layout className="py-10 flex items-center justify-between ">
                <span>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <div className="flex items-center">
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
