"use client";
import React, { useState } from "react";
import Layout from "../components/atoms/Layout";
import AnimatedText from "../components/atoms/AnimatedText";
import FeaturedProject, { Category } from "../components/molecules/ProjectCard";
import { projectsList } from "../../../public/data/projectsList";
import ProjectsNavbar from "../components/molecules/ProjectsNavbar";
import TransitionEffect from "../components/atoms/TransitionEffect";

function Projects() {
    const [projects, setProjects] = useState(projectsList);
    const [active, setActive] = useState("all");

    const handleFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsList);
            setActive(category);
            return;
        }

        const newArray = projectsList.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };

    return (
        <>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Projects"
                        className="text-secondary dark:text-secondaryDark lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <p className="my-12 font-medium text-xl text-dark dark:text-light">
                        This section showcases a collection of my projects, each
                        demonstrating different skills and technologies. Whether
                        it&apos;s frontend, backend, or full-stack development,
                        these projects reflect my passion for coding and solving
                        real-world problems. Feel free to explore the projects,
                        check out their source code on GitHub, and even try out
                        the live demos!
                    </p>
                    <nav className="w-full my-8 flex items-center justify-center text-lg font-medium">
                        <ProjectsNavbar
                            handleFilterCategory={handleFilterCategory}
                            active={active}
                        />
                    </nav>
                    <div className="grid grid-cols-12 gap-24 md:gap-3 lg:gap-5 relative">
                        {projects.map((projectItem, index) => {
                            return (
                                <FeaturedProject
                                    key={index}
                                    title={projectItem.title}
                                    summary={projectItem.summary}
                                    img={projectItem.img}
                                    github={projectItem.github}
                                    link={projectItem.link}
                                    category={projectItem.category}
                                    technologies={projectItem.technologies}
                                />
                            );
                        })}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Projects;
