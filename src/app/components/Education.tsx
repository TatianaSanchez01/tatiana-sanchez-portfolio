"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import educationList from "../../../public/data/educationList.json";
import ListIcon from "./utils/ListIcon";
const Details = ({
    title,
    institution,
    time,
    description,
}: {
    title: string;
    institution: string;
    time: string;
    description: string;
}) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
        >
            <ListIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl text-dark dark:text-light">
                    {title}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {institution}
                </span>
                <p className="whitespace-pre text-wrap font-medium w-full text-dark dark:text-light ">
                    {description}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });

    return (
        <div className="my-64 lg:my-48 md:my-18">
            <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light md:text-6xl lg:mb-28 md:mb-12">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative ">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    {educationList.map((educationItem, index) => {
                        return (
                            <Details
                                key={index}
                                title={educationItem.title}
                                institution={educationItem.institution}
                                time={educationItem.time}
                                description={educationItem.description}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Education;
