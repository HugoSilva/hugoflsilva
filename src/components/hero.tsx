import * as motion from "motion/react-client"

const fadeInUp = {
    visible: {y: "0%", opacity: 1, transition: {duration: 0.3, ease: "easeIn"}},
    hidden: {y: "20px", opacity: 0, transition: {duration: 0.3, ease: "easeIn"}},
}

const fadeInDown = {
    visible: {y: "0%", opacity: 1, transition: {duration: 0.3, ease: "easeIn"}},
    hidden: {y: "-20px", opacity: 0, transition: {duration: 0.3, ease: "easeIn"}},
}

export default function Hero() {
    return (
        <section id="welcome-hero" className="welcome-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="header-text">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}>
                                <h2 dangerouslySetInnerHTML={{__html: 'Just <span>your</span> friendly<br>neighborhood <span>game</span> dev'}}></h2>
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}>
                                <p>Game dev and Lead programmer</p>
                            </motion.div>
                            <motion.div
                                variants={fadeInDown}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}>
                                <a href="/download/hugoflsilva_cv.pdf" download>download resume</a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
}