import React from "react";
import { motion, useScroll } from "framer-motion";

interface ListIconProps {
    reference: React.RefObject<HTMLElement>;
}

const ListIcon: React.FC<ListIconProps> = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start center", "start start"],
    });

    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
            <svg
                className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
                width="75"
                height="75"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-secondary dark:stroke-secondaryDark stroke-1 fill-none"
                />
                <motion.circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-light dark:fill-dark"
                    style={{ pathLength: scrollYProgress }}
                />
                <circle
                    cx="75"
                    cy="50"
                    r="10"
                    className="animate-pulse stroke-1 fill-secondary dark:fill-secondaryDark"
                />
            </svg>
        </figure>
    );
};

export default ListIcon;
