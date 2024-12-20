import * as motion from "motion/react-client"
import Image from "next/image";

const SlideRight = {
    visible: {x: 0, opacity: 1, scale: 1},
    hidden: {x: -100, opacity: 0.5, scale: 0.8},
}
const SlideLeft = {
    visible: {x: 0, opacity: 1, scale: 1},
    hidden: {x: 100, opacity: 0.5, scale: 0.8},
}

export default function About() {
    return (
        <section id="about" className="about">
            <div className="section-heading text-center">
                <h2>about me</h2>
            </div>
            <div className="container">
                <div className="about-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <motion.div
                                variants={SlideRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{
                                    duration: 0.1,
                                    ease: "easeOut"
                                }}>
                                <div className="single-about-txt">
                                    <h3>
                                        Hi, I’m a seasoned lead programmer going on 7 years of experience in game
                                        development, specializing in UI design and implementation. My objective is to
                                        create intuitive and responsive interfaces that blend seamlessly with gameplay
                                        experiences.
                                    </h3>
                                    <p>
                                        I’m passionate about finding creative ways to display information to players,
                                        always aiming to elevate the gaming experience. As a team motivator, I focus on
                                        driving projects to excellence while fostering collaboration. I’m constantly
                                        learning—running a small dev studio allows me to explore different fields of
                                        game
                                        development, like animation and gameplay, broadening my skill set. I’m also an
                                        avid
                                        follower of gaming news and pop culture, often being the go-to person for random
                                        trivia and industry insights!
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-sm-offset-1 col-sm-5">
                            <motion.div
                                variants={SlideLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{
                                    duration: 0.1,
                                    ease: "easeOut"
                                }}>
                                <div className="single-about-img">
                                    <Image src="/images/about/profile_image.jpg" alt="profile_image" width={500} height={466}/>
                                    <div className="about-list-icon">
                                        <ul>
                                            <li>
                                                <a href="https://www.linkedin.com/in/hugoflsilva">
                                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/rockslidestudios/">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://x.com/hugoflsilva">
                                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="http://blog.rockslidestudios.co.uk/">
                                                    <i className="fa fa-wordpress" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
