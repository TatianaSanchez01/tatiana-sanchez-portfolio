import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";

export type Category = "frontend" | "backend" | "fullstack";

interface Props {
    category: string[];
    technologies: string[];
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    github: string;
}

const FeaturedProject = ({
    category,
    technologies,
    title,
    summary,
    img,
    link,
    github,
}: Props) => {
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
        <>
            <article
                ref={cardRef}
                className=" col-span-4 2xl:col-span-6 xl:col-span-12 bg-light dark:bg-dark border-2 border-solid border-dark dark:border-light p-5 rounded-lg shadow-lg drop-shadow-lg"
            >
                <div className="h-full ">
                    <div className="h-5/6 flex items-center justify-center">
                        <Image
                            src={img.src}
                            alt={title}
                            className="cursor-pointer rounded-lg w-full h-full object-cover"
                            width={10000}
                            height={10000}
                            onClick={() => setShowDetail(true)}
                            priority={true}
                        />
                    </div>
                    <p
                        className="my-4 text-center font-bold text-dark dark:text-light text-lg text-wrap w-full cursor-pointer hover:underline-offset-4 hover:underline h-1/6"
                        onClick={() => setShowDetail(true)}
                    >
                        {title}
                    </p>
                </div>
            </article>
            {showDetail &&
                ReactDOM.createPortal(
                    <div
                        id="detailView"
                        className="absolute top-0 mt-96 left-0 z-50 w-full h-full overflow-hidden bg-light dark:bg-dark flex justify-center items-center p-20 border border-dark dark:border-light"
                    >
                        <div className="w-1/2 mr-10">
                            <Image
                                src={img.src}
                                alt={title}
                                className="w-auto h-auto rounded-xl"
                                width={800}
                                height={800}
                                priority={true}
                            />
                            <div className="flex flex-row items-center justify-around mt-6 my-4 space-x-3">
                                <Link
                                    href={github}
                                    target="_blank"
                                    className="flex  items-center justify-center px-4 py-2 space-x-3 text-lg text-center bg-dark/20 dark:bg-light/20 rounded-xl"
                                >
                                    <AiFillGithub className="text-dark dark:text-light" />
                                    <span className="text-dark dark:text-light">
                                        Github
                                    </span>
                                </Link>
                                <Link
                                    href={link}
                                    target="_blank"
                                    className="flex items-center justify-center px-4 py-2 space-x-3 text-lg text-center bg-dark/20 dark:bg-light/20 rounded-xl"
                                >
                                    <AiFillProject className="text-dark dark:text-light" />
                                    <span className="text-dark dark:text-light">
                                        Live Project
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 ml-10">
                            <h2 className="mb-3 text-2xl font-medium text-secondary dark:text-secondaryDark">
                                {title}
                            </h2>
                            <h4 className="mb-3 font-medium text-dark dark:text-light">
                                {summary}
                            </h4>
                            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                {technologies.map((tech, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className="px-2 py-1 my-1 text-dark dark:text-light bg-dark/20 dark:bg-light/20 rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <button
                            onClick={() => setShowDetail(false)}
                            className="absolute top-10 right-10 rounded-full focus:outline-none text-dark dark:text-light "
                        >
                            <MdClose size={30} />
                        </button>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default FeaturedProject;
