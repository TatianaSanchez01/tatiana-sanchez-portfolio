"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import experienceList from "../../../../public/data/experienceList.json";
import ExperienceDetails from "../atoms/ExperienceDetails";

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
            <div
                ref={ref}
                className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full"
            >
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
                    {experienceList.map((experienceItem, index) => {
                        return (
                            <ExperienceDetails
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
