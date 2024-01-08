import React from "react";
import Layout from "../components/utils/Layout";
import AnimatedText from "../components/utils/AnimatedText";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText text="Contact me" />
                <h4 className="text-secondary/90 text-2xl text-center mb-10">
                    Get in touch!
                </h4>
                <div className="flex flex-row gap-24 w-full">
                    <div className="w-full flex flex-col items-center justify-center">
                        <article className="flex flex-col items-center bg-light text-dark hover:text-light text-center rounded-lg border-2 border-secondary px-5 py-4 w-3/5 my-5 hover:bg-secondary transition-all duration-300 ease-in-out group">
                            <MdOutlineEmail className="size-5" />
                            <h4 className="font-medium text-lg text-dark group-hover:text-light my-2">
                                Email
                            </h4>
                            <h5 className="text-dark text-base group-hover:text-light my-1">
                                tatiana.sanchez.sanin@gmail.com
                            </h5>
                            <a
                                href="mailto:tatiana.sanchez.sanin@gmail.com"
                                className="text-secondary font-medium hover:underline hover:underline-offset-2 group-hover:text-light"
                                target="_blank"
                            >
                                Send a message
                            </a>
                        </article>
                        <article className="flex flex-col items-center bg-light text-dark hover:text-light text-center rounded-lg border-2 border-secondary px-5 py-4 w-3/5 my-5 hover:bg-secondary transition-all duration-300 ease-in-out group">
                            <FaLinkedin className="size-5" />
                            <h4 className="font-medium text-lg text-dark group-hover:text-light my-2">
                                LinkedIn
                            </h4>
                            <h5 className="text-dark text-base group-hover:text-light my-1">
                                /tatiana-sanchez-sanin
                            </h5>
                            <a
                                href="https://www.linkedin.com/in/tatiana-sanchez-sanin/"
                                className="text-secondary font-medium hover:underline hover:underline-offset-2 group-hover:text-light"
                                target="_blank"
                            >
                                Send a message
                            </a>
                        </article>
                        <article className="flex flex-col items-center bg-light text-dark hover:text-light text-center rounded-lg border-2 border-secondary px-5 py-4 w-3/5 my-5 hover:bg-secondary transition-all duration-300 ease-in-out group">
                            <FaGithub className="size-5" />
                            <h4 className="font-medium text-lg text-dark group-hover:text-light my-2">
                                Github
                            </h4>
                            <h5 className="text-dark text-base group-hover:text-light my-1">
                                /TatianaSanchez01
                            </h5>
                            <a
                                href="https://github.com/TatianaSanchez01"
                                className="text-secondary font-medium hover:underline hover:underline-offset-2 group-hover:text-light"
                                target="_blank"
                            >
                                Send a message
                            </a>
                        </article>
                    </div>
                    <form action="" className="w-full flex flex-col">
                        <input
                            type="text"
                            name="name"
                            required
                            minLength={3}
                            maxLength={50}
                            autoComplete="off"
                            placeholder="Your Full Name"
                            className="my-5 border rounded-md border-secondary bg-light p-3"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            minLength={3}
                            maxLength={50}
                            autoComplete="off"
                            placeholder="Your Email"
                            className="my-5 border rounded-md border-secondary bg-light p-3"
                        />
                        <textarea
                            placeholder="Your Message"
                            name="message"
                            rows={4}
                            minLength={10}
                            maxLength={500}
                            required
                            autoComplete="off"
                            className="my-5 border rounded-md border-secondary bg-light p-3 h-full"
                        />
                        <button
                            type="submit"
                            className="w-2/3 bg-secondary text-light rounded-lg px-3 py-2 font-bold text-lg border-2 border-transparent hover:border-secondary hover:bg-light hover:text-dark transition-all duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </Layout>
        </main>
    );
}

export default Contact;
