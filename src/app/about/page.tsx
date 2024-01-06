import React from "react";
import Layout from "../components/Layout";
import AboutComponent from "../components/About";
import Skills from "../components/Skills";

const About = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16">
                <AboutComponent />
                <Skills />
            </Layout>
        </main>
    );
};

export default About;
