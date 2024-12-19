import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Tech from "@/components/tech";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Script from "next/script";

export default function Page() {

    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Tech></Tech>
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
