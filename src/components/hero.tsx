export default function Hero() {
    return (
        <section id="welcome-hero" className="welcome-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="header-text">
                            <h2 dangerouslySetInnerHTML={{__html: 'Just <span>your</span> friendly<br>neighborhood <span>game</span> dev'}}></h2>
                            <p>Game dev and Lead programmer</p>
                            <a href="/download/hugoflsilva_cv.pdf" download>download resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}