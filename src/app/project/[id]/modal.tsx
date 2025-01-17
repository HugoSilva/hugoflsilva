'use client'

import {ProjectType} from "@/lib/DataTypes.d";
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectModal({projects}: { projects: ProjectType[] }) {

    const router = useRouter()
    const params = useParams<{ id: string }>()

    const id = Number(params.id);
    const selectedProject = projects[id]

    function closeModal() {
        router.back();
    }

    const settings = {
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots slick-dots-expection",
        infinite: true,
        speed: 1000
    };

    return (
        <div className="portfolio-modal ">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal" onClick={closeModal}>
                    <div className="lr">
                        <div className="rl">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <h2>{selectedProject.title}</h2>
                                <p className="item-intro text-muted">{selectedProject.company}</p>
                                {selectedProject.images.length > 1 ? (
                                    <Slider {...settings}>
                                        {
                                            selectedProject.images.map(image => (
                                                <div key={"img_" + image.id}>
                                                    <Image className="img-responsive img-centered" src={image.url}
                                                           alt="" width={1920} height={1080}/>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                ) : (
                                    <div key={"img_" + selectedProject.images[0].id}>
                                        <Image className="img-responsive img-centered"
                                               src={selectedProject.images[0].url}
                                               alt="" width={1920} height={1080}/>
                                    </div>
                                )}
                                <p>{selectedProject.text_intro}</p>
                                <p>{selectedProject.text_dev}{selectedProject.text_link ?
                                    <a href={selectedProject.text_link.url} target="_blank"
                                       rel="noopener noreferrer">{selectedProject.text_link.label}</a> : ""}</p>
                                <p><strong>Technologies:</strong> {selectedProject.text_tech}</p>
                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                        onClick={closeModal}>
                                    <i className="fa fa-times"></i> Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}