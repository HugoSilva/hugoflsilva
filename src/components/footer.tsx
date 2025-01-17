'use client'

import Link from "next/link";
import * as motion from "motion/react-client";
import {useState} from "react";
import {useLenis} from "lenis/react";

const FadeIn = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
}

export default function Footer() {

    const [hidden, setHidden] = useState(true);

    const lenis = useLenis(({scroll}) => {
        if (scroll > 200) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    })

    function scrollTo(section: string): void {
        lenis?.scrollTo(section, {offset: -90})
    }

    return (
        <footer id="footer-copyright" className="footer-copyright">
            <div className="container">
                <div className="hm-footer-copyright text-center">
                    <div className="info col-md-6 col-sm-6">
                        <span className="copyright">Copyright &copy; hugoflsilva.com 2025</span>
                    </div>
                    <div className="info col-md-6 col-sm-6">
                        <ul className="list-inline quicklinks">
                            <li>
                                <Link href={"/modal/privacy"} className="portfolio-link">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={"/modal/terms"} className="portfolio-link">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                    <motion.div
                        variants={FadeIn}
                        animate={hidden ? "hidden" : "visible"}
                        transition={{
                            delay: 0.1,
                            duration: 0.2,
                            ease: "easeIn"
                        }}>
                        <div id="scroll-Top" onClick={() => scrollTo("#page-top")}>
                            <div className="return-to-top">
                                <i className="fa fa-angle-up" id="scroll-top"></i>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}