"use client";
import React from "react";
import Layout from "../components/atoms/Layout";
import AboutComponent from "../components/organisms/About";
import Skills from "../components/organisms/Skills";
import Experience from "../components/organisms/Experience";
import Education from "../components/organisms/Education";
import TransitionEffect from "../components/atoms/TransitionEffect";

const About = () => {
    return (
        <>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AboutComponent />
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default About;
