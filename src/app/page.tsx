import Image from "next/image";
import Link from "next/link";
import Layout from "./components/utils/Layout";
import AnimatedText from "./components/utils/AnimatedText";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import { LinkIcon } from "./components/utils/Icons";

export default function Home() {
    return (
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2 flex flex-col items-center self-center ">
                        <AnimatedText
                            text="Good design adds value faster than it adds cost."
                            className="!text-6xl !text-left !text-secondary dark:!text-secondaryDark"
                        />
                        <p className="my-4 text-base font-medium">
                            Hi there! I&apos;m Tatiana, a passionate computer
                            science student at Universidad de Antioquia,
                            Colombia. My focus is on software and web
                            development, and I thrive on transforming ideas into
                            innovative applications. I&apos;m not just about the
                            code, though; I&apos;m equally fascinated by
                            crafting dynamic and interactive user experiences
                            that resonate with people.
                        </p>

                        <div className="flex items-center self-start mt-2">
                            <Link
                                href="/TatianaSanchez_CV.pdf"
                                target="_blank"
                                className="flex items-center bg-secondary  dark:bg-secondaryDark text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-secondary dark:hover:text-secondaryDark border-2 border-solid border-transparent hover:border-secondary dark:hover:border-secondaryDark transition-all duration-300 ease-in-out"
                                download={true}
                            >
                                Resume
                                <LinkIcon className="w-6 ml-1 hover:text-secondary dark:hover:text-secondaryDark" />
                            </Link>
                            <Link
                                href="mailto:tatiana.sanchez.sanin@gmail.com"
                                target="_blank"
                                className="ml-12 text-lg font-medium capitalize text-dark dark:text-light hover:underline hover:underline-offset-2 transition-all duration-500 ease-in-out"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <Image
                            src={profilePic}
                            alt=""
                            className="w-full h-auto"
                            priority={true}
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
}
