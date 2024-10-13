"use client";
import React from "react";
import Layout from "@/app/components/atoms/Layout";
import AboutComponent from "@/app/components/organisms/About";
import Skills from "@/app/components/organisms/Skills";
import Experience from "@/app/components/organisms/Experience";
import Education from "@/app/components/organisms/Education";
import TransitionEffect from "@/app/components/atoms/TransitionEffect";

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
