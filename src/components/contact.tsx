'use client'

import * as motion from "motion/react-client";
import {useForm} from "react-hook-form";
import {sendEmail} from "@/utils/sendLayer";

const SlideLeft = {
    visible: {x: 0, opacity: 1, scale: 1},
    hidden: {x: 150, opacity: 0.1, scale: 1},
}

const fadeInUp = {
    visible: {y: "0%", opacity: 1},
    hidden: {y: "30px", opacity: 0},
}

export type FormData = {
    name: string
    email: string
    message: string
};

export default function Contact() {

    const {register, handleSubmit} = useForm<FormData>();
    
    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <section id="contact" className="contact">
            <div className="section-heading text-center">
                <h2>contact me</h2>
            </div>
            <div className="container">
                <div className="contact-content">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-5 col-sm-6">
                            <div className="single-contact-box">
                                <div className="contact-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name"
                                                           placeholder="Name*" {...register("name")} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="Email*" {...register("email")} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="subject"
                                                           placeholder="Subject" name="subject"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" rows={8} id="comment"
                                                              placeholder="Message" {...register("message")}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <motion.div
                                            variants={fadeInUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{once: true}}
                                            transition={{
                                                delay: 0.2,
                                                duration: 0.3,
                                                ease: "easeIn"
                                            }}>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="single-contact-btn">
                                                        <input className="clear-styling white-color-text" type="submit" value="Submit"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            variants={SlideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            transition={{
                                delay: 0.2,
                                duration: 0.3,
                                ease: "easeIn"
                            }}>
                            <div className="col-md-offset-1 col-md-5 col-sm-6">
                                <div className="single-contact-box">
                                    <div className="contact-adress">
                                        <div className="contact-add-head">
                                            <h3>Hugo Silva</h3>
                                            <p>Lead Programmer</p>
                                        </div>
                                        <div className="contact-add-info">
                                            <div className="single-contact-add-info">
                                                <h3>phone</h3>
                                                <p>(+44) 0776 137 2025</p>
                                            </div>
                                            <div className="single-contact-add-info">
                                                <h3>email</h3>
                                                <p>hugoflsilva@sapo.pt</p>
                                            </div>
                                            <div className="single-contact-add-info">
                                                <h3>website</h3>
                                                <p>www.hugoflsilva.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hm-foot-icon">
                                        <ul>
                                            <li><a href="https://www.linkedin.com/in/hugoflsilva"><i
                                                className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://www.facebook.com/rockslidestudios/"><i
                                                className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://x.com/hugoflsilva"><i
                                                className="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="http://blog.rockslidestudios.co.uk/"><i
                                                className="fa fa-wordpress"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}