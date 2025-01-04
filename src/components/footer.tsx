import Link from "next/link";

export default function Footer() {
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
                    <div id="scroll-Top">
                        <div className="return-to-top">
                            <i className="fa fa-angle-up " id="scroll-top"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}