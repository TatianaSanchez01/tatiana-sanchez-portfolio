import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export type Category = "frontend" | "backend" | "fullstack";

const FeaturedProject = ({
    category,
    technologies,
    title,
    summary,
    img,
    link,
    github,
}: {
    category: string[];
    technologies: string[];
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    github: string;
}) => {
    const [showDetail, setShowDetail] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (showDetail && cardRef.current) {
            const offsetTop = (cardRef.current as HTMLElement).offsetTop;
            const detailView = document.getElementById("detailView");

            if (detailView) {
                detailView.style.top = `${offsetTop}px`;
            }
        }
    }, [showDetail]);

    return (
        <article
            ref={cardRef}
            className="col-span-12 sm:col-span-4 md:col-span-4 bg-light border-2 border-solid border-dark px-5 py-5 rounded-lg shadow-lg drop-shadow-lg"
        >
            <div className="h-5/6 flex items-center justify-center">
                <Image
                    src={img.src}
                    alt={title}
                    layout="responsive"
                    className="cursor-pointer rounded-lg w-full h-full object-cover"
                    width={10000}
                    height={10000}
                    onClick={() => setShowDetail(true)}
                />
            </div>
            <p
                className="my-4 text-center font-bold text-xl text-wrap w-full cursor-pointer hover:underline-offset-4 hover:underline h-1/6"
                onClick={() => setShowDetail(true)}
            >
                {title}
            </p>
            {showDetail && (
                <div
                    id="detailView"
                    className="flex flex-row absolute -top-2 left-0 z-10 h-auto w-full gap-x-12 bg-light text-dark border-2 border-dark rounded-xl px-10 py-8"
                >
                    <div className="w-1/2">
                        <Image
                            src={img.src}
                            alt={title}
                            className="w-auto h-auto rounded-xl"
                            width={1000}
                            height={1000}
                        />
                        <div className="flex flex-row items-center justify-around mt-6 my-4 space-x-3">
                            <Link
                                href={github}
                                target="_blank"
                                className="flex  items-center justify-center px-4 py-2 space-x-3 text-lg text-center bg-dark/20 rounded-xl"
                            >
                                <AiFillGithub />
                                <span>Github</span>
                            </Link>
                            <Link
                                href={link}
                                target="_blank"
                                className="flex items-center justify-center px-4 py-2 space-x-3 text-lg text-center bg-dark/20 rounded-xl"
                            >
                                <AiFillProject />
                                <span>Live Project</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="mb-3 text-2xl font-medium text-secondary">
                            {title}
                        </h2>
                        <h4 className="mb-3 font-medium">{summary}</h4>
                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {technologies.map((tech, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="px-2 py-1 my-1 bg-dark/20 rounded-md font-medium"
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <button
                        onClick={() => setShowDetail(false)}
                        className="absolute right-10 rounded-full focus:outline-none "
                    >
                        <MdClose size={30} />
                    </button>
                </div>
            )}
        </article>
    );
};

export default FeaturedProject;
