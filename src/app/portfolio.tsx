import Image from "next/image";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-details">
                <div className="section-heading text-center">
                    <h2>portfolio</h2>
                </div>
                <div className="container">
                    <div className="portfolio-content">
                        <div className="isotope">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="item">
                                        <img src="/images/portfolio/p1.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                AYDR
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="item">
                                        <img src="/images/portfolio/p1.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                Twisted Metal
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="item">
                                        <img src="/images/portfolio/p1.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                Project Hannibal
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="item">
                                        <img src="/images/portfolio/squadron-small.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                Squadron 42
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="item">
                                        <Image
                                            src="/images/portfolio/star-small.jpg"
                                            alt="Star Citizen Logo"
                                            width={488}
                                            height={290}
                                        />
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                Star Citizen
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}