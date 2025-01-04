'use client'

import Link from "next/link";
import {useEffect, useState} from 'react';
import Lenis from "lenis";

export default function Navbar() {
    const [lenisRef, setLenis] = useState<Lenis>();
    const [rafState, setRaf] = useState<number>(0);

    useEffect(() => {
        const scroller = new Lenis({
            duration: 0.6, // Control the duration of the scroll
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
            smoothWheel: true,
            syncTouch: true, // Enable smooth scrolling on touch devices
        });
        let rf:number;

        function update(time: number) {
            scroller.raf(time);
            requestAnimationFrame(update);
        }

        rf = requestAnimationFrame(update);
        setRaf(rf);
        setLenis(scroller);

        return () => {
            if (lenisRef) {
                cancelAnimationFrame(rafState);
                lenisRef.destroy();
            }
        };
    }, []);
    
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
                            <Link className="navbar-brand" href="#page-top">HugoflSilva</Link>
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