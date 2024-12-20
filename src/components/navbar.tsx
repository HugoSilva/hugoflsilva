import Link from "next/link";

export default function Navbar() {
    return (
        <header className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" href="/">HugoflSilva</Link>
                        </div>
                        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="smooth-menu active"></li>
                                <li className="smooth-menu"><Link href="#about">about</Link></li>
                                <li className="smooth-menu"><Link href="#skills">skills</Link></li>
                                <li className="smooth-menu"><Link href="#experience">experience</Link></li>
                                <li className="smooth-menu"><Link href="#profiles">tech</Link></li>
                                <li className="smooth-menu"><Link href="#portfolio">portfolio</Link></li>
                                <li className="smooth-menu"><Link href="#contact">contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="clearfix"></div>
        </header>
    );
}