"use client";
import Image from "next/image";
import Link from "next/link";
import Layout from "./components/utils/Layout";
import AnimatedText from "./components/utils/AnimatedText";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import { LinkIcon } from "./components/utils/Icons";
import TransitionEffect from "./components/TransitionEffect";

export default function Home() {
    return (
        <>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col-reverse">
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
                            <AnimatedText
                                text="Good design adds value faster than it adds cost."
                                className="!text-6xl !text-left !text-secondary dark:!text-secondaryDark xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                Hi there! I&apos;m Tatiana, a passionate
                                computer science student at Universidad de
                                Antioquia, Colombia. My focus is on software and
                                web development, and I thrive on transforming
                                ideas into innovative applications. I&apos;m not
                                just about the code, though; I&apos;m equally
                                fascinated by crafting dynamic and interactive
                                user experiences that resonate with people.
                            </p>

                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="/TatianaSanchez_CV.pdf"
                                    target="_blank"
                                    className="flex items-center bg-secondary  dark:bg-secondaryDark text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-secondary dark:hover:text-secondaryDark border-2 border-solid border-transparent hover:border-secondary dark:hover:border-secondaryDark transition-all duration-300 ease-in-out md:p-2 md:px-4 md:text-base"
                                    download={true}
                                >
                                    Resume
                                    <LinkIcon className="w-6 ml-1 hover:text-secondary dark:hover:text-secondaryDark" />
                                </Link>
                                <Link
                                    href="mailto:tatiana.sanchez.sanin@gmail.com"
                                    target="_blank"
                                    className="ml-12 text-lg font-medium capitalize text-dark dark:text-light hover:underline hover:underline-offset-2 transition-all duration-500 ease-in-out md:text-base"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-full sm:mb-5 md:mb-0">
                            <Image
                                src={profilePic}
                                alt=""
                                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                                priority={true}
                                sizes="(max-width: 768px) 100vh, (max-width:1200px) 50vh, 50vh"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
