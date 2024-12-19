import About from "@/app/about";
import Skills from "@/app/skills";
import Experience from "@/app/experience";
import Profiles from "@/app/profiles";
import Portfolio from "@/app/portfolio";
import Contact from "@/app/contact";
import Hero from "@/app/hero";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import Script from "next/script";

export default function Page() {
    
    return (
        <div>
            <Navbar></Navbar>

            <Hero></Hero>

            <About></About>

            <Skills></Skills>

            <Experience></Experience>

            <Profiles></Profiles>

            <Portfolio></Portfolio>

            <Contact></Contact>
                
            <Footer></Footer>
                
            <Script src="/js/jquery.js" strategy="beforeInteractive"></Script>
            <Script src="/js/modernizr.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/bootsnav.js" strategy="beforeInteractive"></Script>
            <Script src="/js/jquery.sticky.js" strategy="beforeInteractive"></Script>
            <Script src="/js/progressbar.js" strategy="beforeInteractive"></Script>
            <Script src="/js/jquery.appear.js" strategy="beforeInteractive"></Script>
            <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/jquery.easing.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/custom.js" strategy="beforeInteractive"></Script>
        </div>
    );
}
