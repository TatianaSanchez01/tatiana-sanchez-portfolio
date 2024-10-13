"use client";
import React, { useRef } from 'react'
import ListIcon from './ListIcon';
import { motion } from 'framer-motion';

interface Props {
    position: string;
    company: string;
    time: string;
    address: string;
    description: string;
}

function ExperienceDetails({
    position,
    company,
    time,
    address,
    description,
}: Props) {
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
}

export default ExperienceDetails