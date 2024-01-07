"use client";
import React from "react";
import skillsList from "../../../public/data/skills.json";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Skills
            </h2>
            <div className="grid grid-cols-2 gap-10">
                <div className="col-span-1 ">
                    <h4 className="text-center font-semibold text-2xl mb-5">
                        Languages & Frameworks
                    </h4>
                    <div className="border-2 border-secondary rounded-lg h-full w-full px-8 py-5 flex flex-col justify-start gap-4">
                        {skillsList.map((skill, index) => {
                            if (
                                skill.type === "language" ||
                                skill.type === "framework"
                            ) {
                                return (
                                    <div
                                        key={index}
                                        className="text-left flex flex-col"
                                    >
                                        <div className="flex justify-between">
                                            <span className="text-base font-medium text-dark ">
                                                {skill.language}
                                            </span>
                                            <span className="text-base font-medium text-dark ">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="bg-dark/50 outline outline-2 outline-offset-4 outline-secondary mt-2 rounded-full">
                                            <motion.div
                                                className="px-4 py-2 flex items-center rounded-full bg-secondary"
                                                style={{ width: skill.level }}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: skill.level,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    type: "spring",
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="col-span-1">
                    <h4 className="text-center font-medium text-2xl mb-5">
                        Tools & Softwares
                    </h4>

                    <div className="border-2 border-secondary rounded-lg h-full w-full px-5 py-3 flex flex-col justify-start gap-4">
                        {skillsList.map((skill, index) => {
                            if (
                                skill.type === "tool" ||
                                skill.type === "software"
                            ) {
                                return (
                                    <div
                                        key={index}
                                        className="text-left flex flex-col"
                                    >
                                        <div className="flex justify-between">
                                            <span className="text-base font-medium text-dark ">
                                                {skill.language}
                                            </span>
                                            <span className="text-base font-medium text-dark ">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="bg-dark/50 outline outline-2 outline-offset-4 outline-secondary mt-2 rounded-full">
                                            <motion.div
                                                className="px-4 py-2 flex items-center rounded-full bg-secondary"
                                                style={{ width: skill.level }}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: skill.level,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    type: "spring",
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
