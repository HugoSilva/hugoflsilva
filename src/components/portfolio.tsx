import Image from "next/image";
import {DataType} from "@/lib/DataTypes.d";
import {getLocalData} from "@/api/dataLayer";
import Link from "next/link";

export default async function Portfolio() {

    const data:DataType = await getLocalData();

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-details">
                <div className="section-heading text-center">
                    <h2>portfolio</h2>
                </div>
                <div className="container">
                    <div className="portfolio-content">
                        <div className="isotope">
                        {
                            data.projects.map((project) => (
                            <div key={"project_"+project.id} className="col-sm-4">

                                <Link href={"/project/"+project.id} className="portfolio-link" data-target="#exampleModal">
                                    <div className="item">
                                        <Image
                                            src={project.image}
                                            alt={project.image_alt}
                                            width={488}
                                            height={290}
                                        />
                                        <div className="isotope-overlay">
                                            <h1>{project.title}</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}