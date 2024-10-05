"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import experienceList from "../../../public/data/experienceList.json";
import ListIcon from "./utils/ListIcon";
const Details = ({
    position,
    company,
    time,
    address,
    description,
}: {
    position: string;
    company: string;
    time: string;
    address: string;
    description: string;
}) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[70%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
        >
            <ListIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl text-dark dark:text-light sm:text-xl xs:text-lg ">
                    {position}&nbsp;
                    <span className="text-secondary dark:text-secondaryDark">
                        @{company}
                    </span>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
                    {time} | {address}
                </span>
                <p className="whitespace-pre text-wrap font-medium w-full text-dark dark:text-light md:text-sm">
                    {description}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });

    return ( 
        <div className="my-64 lg:my-48 md:my-18">
            <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light md:text-6xl lg:mb-28 md:mb-12">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
                    {experienceList.map((experienceItem, index) => {
                        return (
                            <Details
                                key={index}
                                position={experienceItem.position}
                                company={experienceItem.company}
                                time={experienceItem.time}
                                address={experienceItem.address}
                                description={experienceItem.description}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
