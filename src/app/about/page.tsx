import React from "react";
import Layout from "../components/utils/Layout";
import AboutComponent from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

const About = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16">
                <AboutComponent />
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    );
};

export default About;
