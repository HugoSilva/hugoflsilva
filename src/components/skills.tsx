import {DataType} from "@/lib/DataTypes.d";
import {getLocalData} from "@/api/dataLayer";

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
                                                <div className="progress-bar" role="progressbar" aria-valuenow={skill.value}
                                                     aria-valuemin={10}
                                                     aria-valuemax={100}>

                                                </div>
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
