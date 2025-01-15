import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Tech from "@/components/tech";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ReactLenis from "lenis/react";
import {LenisOptions} from "lenis";

export default function Page() {

    const lenisOptions: LenisOptions = {
        duration: 0.6,
        smoothWheel: true,
        syncTouch: true
    };

    return (
        <div id="page-top">
            <Script src="/js/jquery.js" strategy="beforeInteractive"></Script>
            <Script src="/js/modernizr.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/bootsnav.js" strategy="beforeInteractive"></Script>
            <Script src="/js/jquery.sticky.js" strategy="beforeInteractive"></Script>
            <Script src="/js/progressbar.js" strategy="beforeInteractive"></Script>
            <Script src="/js/jquery.appear.js" strategy="beforeInteractive"></Script>
            <Script src="/js/jquery.easing.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/custom.js" strategy="beforeInteractive"></Script>
            <ReactLenis options={lenisOptions} root>
                <Navbar></Navbar>
                <Hero></Hero>
                <About></About>
                <Skills></Skills>
                <Experience></Experience>
                <Tech></Tech>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Footer></Footer>
            </ReactLenis>
        </div>
    );
}
