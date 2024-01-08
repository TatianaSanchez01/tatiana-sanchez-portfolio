import React from "react";
import Image from "next/image";
import AnimatedText from "./utils/AnimatedText";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
const AboutComponent = () => {
    return (
        <>
            <AnimatedText
                text="Turning ideas into innovations"
                className="mb-16"
            />
            <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-5 flex flex-col items-start justify-start">
                    <h2 className="mb-4 text-lg font-bold uppercase text-secondary/75">
                        Passion and Drive
                    </h2>
                    <p className="font-medium">
                        At my core, I&apos;m a lifelong learner, constantly
                        pushing myself to expand my skillset and stay ahead of
                        the curve in the ever-evolving world of software
                        development. I believe in the power of collaboration and
                        thrive in team environments where we can brainstorm,
                        innovate, and bring our collective expertise to life.
                    </p>
                    <h2 className="mt-8 text-lg font-bold uppercase text-secondary/75">
                        Skills and Expertise
                    </h2>
                    <ul className="font-medium list-disc mb-4">
                        <li className="my-2">
                            <span className="font-bold">Languages:</span> While
                            I wouldn&apos;t claim mastery of any one language,
                            I&apos;m a jack-of-all-trades with experience in
                            various languages and technologies, including [List
                            of languages and technologies with relevant icons].
                        </li>
                        <li className="my-2">
                            <span className="font-bold">
                                Frameworks and Libraries:
                            </span>{" "}
                            I&apos;m adept at utilizing frameworks and libraries
                            like [List of frameworks and libraries with relevant
                            icons] to build efficient and scalable solutions.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Databases:</span> I
                            understand the power of data and have experience
                            working with databases like [List of databases with
                            relevant icons] to manage and extract valuable
                            insights
                        </li>
                    </ul>
                    <h2 className="my-4 text-lg font-bold uppercase text-secondary/75">
                        Skills and Expertise
                    </h2>
                    <p className="font-medium">
                        I am highly motivated and results-oriented professional
                        with a talent for creative problem-solving and teamwork.
                        I thrive in environments where I can take initiative,
                        tackle challenges head-on, and contribute to
                        organizational goals. My strengths include:
                    </p>

                    <h2 className="mt-8 text-lg font-bold uppercase text-secondary/75">
                        Let&apos;s connect
                    </h2>
                    <p className="font-medium">
                        I&apos;m always eager to discuss new projects,
                        collaborate with creative minds, and learn from
                        experienced professionals. Reach out to me through
                        [Contact information with icons] and let&apos;s explore
                        the possibilities together.
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-secondary bg-light p-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-secondary" />
                    <Image
                        src={profilePic}
                        alt="Tatiana"
                        className="w-full h-auto rounded-2xl"
                        priority={true}
                    />
                </div>
            </div>
        </>
    );
};

export default AboutComponent;
