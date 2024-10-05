"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "./utils/AnimatedText";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
const AboutComponent = () => {
    return (
        <>
            <AnimatedText
                text="Turning ideas into innovations"
                className="mb-16 text-secondary dark:text-secondaryDark lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 lg:order-2 lg:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-secondary/75 dark:text-secondaryDark/75">
                        Passion and Drive
                    </h2>
                    <p className="font-medium text-dark dark:text-light text-lg">
                        At my core, I&apos;m a lifelong learner, constantly
                        pushing myself to expand my skillset and stay ahead of
                        the curve in the ever-evolving world of software
                        development. I believe in the power of collaboration and
                        thrive in team environments where we can brainstorm,
                        innovate, and bring our collective expertise to life.
                    </p>
                    <h2 className="my-4 text-lg font-bold uppercase text-secondary/75 dark:text-secondaryDark/75">
                        Skills and Expertise
                    </h2>
                    <p className="font-medium text-dark dark:text-light text-lg">
                        I am highly motivated and results-oriented professional
                        with a talent for creative problem-solving and teamwork.
                        I thrive in environments where I can take initiative,
                        tackle challenges head-on, and contribute to
                        organizational goals. My strengths include:
                    </p>

                    <ul className="font-medium list-disc mb-4 text-dark dark:text-light text-lg ml-4">
                        <li className="my-2">
                            <span className="font-bold">Communication:</span> I
                            am a clear and concise communicator, both verbally
                            and in writing. I am an active listener who builds
                            strong relationships based on trust and respect.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Problem-solving:</span>I
                            possess strong analytical skills and a creative
                            mindset. I can break down complex problems into
                            manageable components and develop innovative
                            solutions.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Organization:</span> I
                            am highly organized and efficient in managing my
                            time and tasks. I am adept at prioritizing tasks and
                            meeting deadlines.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Teamwork:</span> I am a
                            collaborative team player who enjoys working with
                            others. I am always willing to share my knowledge
                            and skills to achieve common goals.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Creativity:</span> I am
                            a creative thinker who is always looking for new and
                            innovative ways to approach challenges and identify
                            opportunities.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Proactivity:</span> I am
                            a proactive individual who takes initiative and is
                            driven to achieve results. I am always eager to take
                            on new challenges and drive projects forward.
                        </li>
                        <li className="my-2">
                            <span className="font-bold">Responsibility:</span> I
                            am a reliable and responsible individual who is
                            committed to fulfilling my obligations. I am
                            accountable for my actions and am always learning
                            from my experiences.
                        </li>
                    </ul>

                    <h2 className="mt-8 text-lg font-bold uppercase text-secondary/75 dark:text-secondaryDark/75">
                        Let&apos;s connect
                    </h2>
                    <p className="font-medium text-dark dark:text-light text-lg">
                        I&apos;m always eager to discuss new projects,
                        collaborate with creative minds, and learn from
                        experienced professionals. Reach out to me through
                        [Contact information with icons] and let&apos;s explore
                        the possibilities together.
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-secondary dark:border-secondaryDark bg-light p-8 xl:col-span-4 lg:order-1 lg:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-secondary dark:bg-secondaryDark" />
                    <Image
                        src={profilePic}
                        alt="Tatiana"
                        className="w-full h-auto rounded-2xl"
                        priority={true}
                        sizes="(max-width: 768px;) 100vw, (max-width: 1200px;) 50vw, 33vw"
                    />
                </div>
            </div>
        </>
    );
};

export default AboutComponent;
