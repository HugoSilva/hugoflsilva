'use client'

import {ProjectType} from "@/lib/DataTypes.d";
import {useParams, useRouter} from "next/navigation";
import Modal from "react-modal";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function PageModal( {projects}: {projects: ProjectType[]}) {

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
        <div>
            <Modal
                isOpen={true}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className="portfolio-modal ">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
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
                                        <p className="item-intro text-muted">type</p>
                                        <Slider {...settings}>
                                            {
                                                selectedProject.images.map(image => (
                                                    <div key={"img_" + image.id}>
                                                        <Image className="img-responsive img-centered" src={image.url}
                                                             alt=""/>
                                                    </div>
                                                ))
                                            }
                                        </Slider>

                                        <p>{selectedProject.text_intro}</p>
                                        <p>{selectedProject.text_dev}{selectedProject.text_link ?
                                            <a href={selectedProject.text_link.url} target="_blank"
                                               rel="noopener noreferrer">{selectedProject.text_link.label}</a> : ""}</p>
                                        <p><strong>Technologies:</strong> {selectedProject.text_tech}</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={closeModal}><i
                                            className="fa fa-times"></i> Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
)
;
}