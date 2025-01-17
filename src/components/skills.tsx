import {DataType} from "@/lib/DataTypes.d";
import {getLocalData} from "@/utils/dataLayer";
import * as motion from "motion/react-client"

export default async function Skills() {

    const data: DataType = await getLocalData();

    return (
        <section id="skills" className="skills">
            <div className="skill-content">
                <div className="section-heading text-center">
                    <h2>skills</h2>
                </div>
                <div className="container">
                    <div className="single-skill-content">
                        {
                            data.skills.map((skill) => (
                                <div key={skill.name} className="col-md-6">
                                    <div className="barWrapper">
                                        <span className="progressText">{skill.name}</span>
                                        <div className="single-progress-txt">
                                            <div className="progress ">
                                                <motion.div
                                                    className="progress-bar" role="progressbar"
                                                    variants={{
                                                        visible: {width: skill.value + "%"},
                                                        hidden: {width: "0%"},
                                                    }}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{once: true}}
                                                    transition={{
                                                        duration: 0.1,
                                                        ease: "easeIn"
                                                    }}>
                                                </motion.div>
                                            </div>
                                            <h3>{skill.value}%</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
