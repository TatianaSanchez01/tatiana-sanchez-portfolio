import Image from "next/image";
import Link from "next/link";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import { LinkIcon } from "./components/Icons";

export default function Home() {
    return (
        <main className="flex items-center text-dark w-full min-h-screen">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2 flex flex-col items-center self-center ">
                        <AnimatedText
                            text="Good design adds value faster than it adds cost."
                            className="!text-6xl !text-left"
                        />
                        <p className="my-4 text-base font-medium">
                            A skilled computer science student. I am focus on
                            software and web development and dedicated to
                            turningf ideas into innovative applications. You can
                            explore my latest projects showcasing my expertise
                            in{" "}
                        </p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                href="/TatianaSanchez_CV.pdf"
                                target="_blank"
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all duration-300 ease-in-out"
                                download={true}
                            >
                                Resume
                                <LinkIcon className="w-6 ml-1" />
                            </Link>
                            <Link
                                href="mailto:tatiana.sanchez.sanin@gmail.com"
                                target="_blank"
                                className="ml-12 text-lg font-medium capitalize text-dark hover:underline hover:underline-offset-2 transition-all duration-500 ease-in-out"
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
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
}
