'use client'

import {TechType} from "@/lib/DataTypes.d";
import * as motion from "motion/react-client"

const FadeIn = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
}

export default function TechWidget({tech}: { tech: TechType }) {

    return (
        <motion.div
            variants={FadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeIn"
            }}>
            <div className="col-sm-3 ">
                <div className={"single-profile " + (tech.hasBorder === false ? "profile-no-border" : "")}
                     onClick={() => window.open(tech.url)}
                     style={{cursor: 'pointer'}}>
                    <div className="profile-txt">
                        <i className={tech.icon}></i>
                        <div className="profile-icon-name">{tech.name}</div>
                    </div>
                    <div className="single-profile-overlay">
                        <div className="profile-txt selected">
                            <i className={tech.icon}></i>
                            <div className="profile-icon-name">{tech.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}