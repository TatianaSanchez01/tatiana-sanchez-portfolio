"use client";
import React, { useRef, useState } from "react";
import Layout from "../components/utils/Layout";
import AnimatedText from "../components/utils/AnimatedText";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import TransitionEffect from "../components/TransitionEffect";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const form = useRef<HTMLFormElement>(null);

    const serviceId = process.env.SERVICE_ID ? process.env.SERVICE_ID : "";
    const templateId = process.env.TEMPLATE_ID ? process.env.TEMPLATE_ID : "";
    const publicKey = process.env.PUBLIC_KEY ? process.env.PUBLIC_KEY : "";

    const templateParams = {
        nombre: name,
        correo: email,
        mensaje: message,
    };

    const onSubmit = async (event: any, data: any) => {
        emailjs
            .send(serviceId, templateId, templateParams, {
                publicKey: publicKey,
            })
            .then((response) => {
                console.log(
                    "Correo enviado con éxito",
                    response.status,
                    response.text
                );
                // setShowMessage(true);
                // setShowValidationError(false);
                // setModalIsOpen(true);
            });
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (
        <>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Contact me"
                        className="text-secondary dark:text-secondaryDark lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <h4 className="text-black text-2xl text-center mb-10">
                        Get in touch!
                    </h4>
                    <div className="flex flex-row gap-24 w-full">
                        <div className="w-full flex flex-col items-center justify-center">
                            <article className="flex flex-col items-center bg-light dark:bg-dark text-dark dark:text-light hover:text-light dark:hover:text-dark text-center rounded-lg border-2 border-secondary dark:border-secondaryDark px-5 py-4 w-3/5 my-5 hover:bg-secondary dark:hover:bg-secondaryDark transition-all duration-300 ease-in-out group">
                                <MdOutlineEmail className="size-5" />
                                <h4 className="font-medium text-lg text-dark dark:text-light group-hover:text-light dark:group-hover:text-dark my-2">
                                    Email
                                </h4>
                                <h5 className="text-dark dark:text-light  text-base group-hover:text-light dark:group-hover:text-dark my-1">
                                    tatiana.sanchez.sanin@gmail.com
                                </h5>
                                <a
                                    href="mailto:tatiana.sanchez.sanin@gmail.com"
                                    className="text-secondary dark:text-secondaryDark font-medium hover:underline hover:underline-offset-2 group-hover:text-light dark:group-hover:text-dark"
                                    target="_blank"
                                >
                                    Send a message
                                </a>
                            </article>
                            <article className="flex flex-col items-center bg-light dark:bg-dark text-dark dark:text-light hover:text-light dark:hover:text-dark text-center rounded-lg border-2 border-secondary dark:border-secondaryDark px-5 py-4 w-3/5 my-5 hover:bg-secondary dark:hover:bg-secondaryDark transition-all duration-300 ease-in-out group">
                                <FaLinkedin className="size-5" />
                                <h4 className="font-medium text-lg text-dark dark:text-light group-hover:text-light dark:group-hover:text-dark my-2">
                                    LinkedIn
                                </h4>
                                <h5 className="text-dark dark:text-light  text-base group-hover:text-light dark:group-hover:text-dark my-1">
                                    /tatiana-sanchez-sanin
                                </h5>
                                <a
                                    href="https://www.linkedin.com/in/tatiana-sanchez-sanin/"
                                    className="text-secondary dark:text-secondaryDark font-medium hover:underline hover:underline-offset-2 group-hover:text-light dark:group-hover:text-dark"
                                    target="_blank"
                                >
                                    Send a message
                                </a>
                            </article>
                            <article className="flex flex-col items-center bg-light dark:bg-dark text-dark dark:text-light hover:text-light dark:hover:text-dark text-center rounded-lg border-2 border-secondary dark:border-secondaryDark px-5 py-4 w-3/5 my-5 hover:bg-secondary dark:hover:bg-secondaryDark transition-all duration-300 ease-in-out group">
                                <FaGithub className="size-5" />
                                <h4 className="font-medium text-lg text-dark dark:text-light group-hover:text-light dark:group-hover:text-dark my-2">
                                    Github
                                </h4>
                                <h5 className="text-dark dark:text-light  text-base group-hover:text-light dark:group-hover:text-dark my-1">
                                    /TatianaSanchez01
                                </h5>
                                <a
                                    href="https://github.com/TatianaSanchez01"
                                    className="text-secondary dark:text-secondaryDark font-medium hover:underline hover:underline-offset-2 group-hover:text-light dark:group-hover:text-dark"
                                    target="_blank"
                                >
                                    Send a message
                                </a>
                            </article>
                        </div>
                        {/* <form
                        ref={form}
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col"
                    >
                        <div className="flex flex-col mb-2">
                            <label
                                htmlFor="name"
                                className="text-dark dark:text-light"
                            >
                                Your name*
                            </label>
                            <input
                                type="text"
                                required
                                minLength={3}
                                maxLength={50}
                                autoComplete="off"
                                className={`my-5 border rounded-md border-secondary dark:border-secondaryDark bg-light dark:bg-dark p-3 focus:border-secondary dark:focus:border-secondaryDark ${
                                    errors.email ? "border-red-700" : ""
                                }`}
                                {...register("name", {
                                    required: true,
                                })}
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                            />
                            {errors.name?.type === "required" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000]">
                                        Falta completar el nombre
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col mb-2">
                            <label
                                htmlFor="email"
                                className="my-0 text-dark dark:text-light"
                            >
                                Your email*
                            </label>
                            <input
                                type="email"
                                required
                                minLength={3}
                                maxLength={50}
                                autoComplete="off"
                                className={`my-5 border rounded-md border-secondary dark:border-secondaryDark bg-light dark:bg-dark p-3 focus:border-secondary dark:focus:border-secondaryDark ${
                                    errors.email ? "border-red-700" : ""
                                }`}
                                {...register("email", {
                                    required: true,
                                    pattern: emailPattern,
                                })}
                                defaultValue={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                            />
                            {errors.email?.type === "required" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000]">
                                        Falta completar el email
                                    </p>
                                </div>
                            )}
                            {errors.email?.type === "pattern" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000] text-sm my-1 text-left">
                                        El mail es incorrecto. Por favor,
                                        reingréselo siguiendo el formato
                                        mail@proveedor.xxx
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col mb-2">
                            <label
                                htmlFor="message"
                                className="text-dark dark:text-light"
                            >
                                Your message*
                            </label>
                            <textarea
                                rows={4}
                                minLength={10}
                                maxLength={500}
                                required
                                autoComplete="off"
                                className={`my-5 border rounded-md border-secondary dark:border-secondaryDark bg-light dark:bg-dark p-3 focus:border-secondary dark:focus:border-secondaryDark ${
                                    errors.message ? "border-red-700" : ""
                                }`}
                                {...register("message", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 500,
                                })}
                                defaultValue={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name="message"
                            />
                            {errors.message?.type === "required" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000]">
                                        Falta completar el mensaje
                                    </p>
                                </div>
                            )}
                            {errors.message?.type === "minLenght" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000] text-sm my-1 text-left">
                                        El mensaje debe tener un mínimo de 10
                                        caracteres
                                    </p>
                                </div>
                            )}
                            {errors.message?.type === "minLenght" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000] text-sm my-1 text-left">
                                        El mensaje no puede tener más de 500
                                        caracteres
                                    </p>
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-2/3 bg-secondary dark:bg-secondaryDark text-light dark:text-dark rounded-lg px-3 py-2 font-bold text-lg border-2 border-transparent hover:border-secondary dark:hover:border-secondaryDark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light transition-all duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </form> */}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Contact;
