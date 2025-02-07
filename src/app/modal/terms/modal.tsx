﻿'use client'

import {useRouter} from "next/navigation";

export default function TermsModal() {

    const router = useRouter()

    function closeModal() {
        router.back();
    }

    return (
        <div className="portfolio-modal">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal" onClick={closeModal}>
                    <div className="lr">
                        <div className="rl">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body justify">
                                <h2>Terms of Use</h2>
                                <h3>1. Terms</h3>
                                <p>By accessing the website at <a
                                    href="https://hugoflsilva.com">https://hugoflsilva.com</a>, you are agreeing to be
                                    bound by these terms of service, all applicable laws and regulations, and agree that
                                    you are responsible for compliance with any applicable local laws. If you do not
                                    agree with any of these terms, you are prohibited from using or accessing this site.
                                    The materials contained in this website are protected by applicable copyright and
                                    trademark law.</p>
                                <h3>2. Use License</h3>
                                <p>
                                    <ol type="a">
                                        <li>Permission is granted to temporarily download one copy of the materials
                                            (information or software) on Hugo Silva&apos;s website for personal,
                                            non-commercial transitory viewing only. This is the grant of a license, not
                                            a transfer of title, and under this license you may not:
                                            <ol type="i">
                                                <li>modify or copy the materials;</li>
                                                <li>use the materials for any commercial purpose, or for any public
                                                    display (commercial or non-commercial);
                                                </li>
                                                <li>attempt to decompile or reverse engineer any software contained on
                                                    Hugo Silva&apos;s website;
                                                </li>
                                                <li>remove any copyright or other proprietary notations from the
                                                    materials; or
                                                </li>
                                                <li>transfer the materials to another person or &quot;mirror&quot; the materials
                                                    on any other server.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>This license shall automatically terminate if you violate any of these
                                            restrictions and may be terminated by Hugo Silva at any time. Upon
                                            terminating your viewing of these materials or upon the termination of this
                                            license, you must destroy any downloaded materials in your possession
                                            whether in electronic or printed format.
                                        </li>
                                    </ol>
                                </p>
                                <h3>3. Disclaimer</h3>
                                <p>
                                    <ol type="a">
                                        <li>The materials on Hugo Silva&apos;s website are provided on an &apos;as is&apos; basis. Hugo
                                            Silva makes no warranties, expressed or implied, and hereby disclaims and
                                            negates all other warranties including, without limitation, implied
                                            warranties or conditions of merchantability, fitness for a particular
                                            purpose, or non-infringement of intellectual property or other violation of
                                            rights.
                                        </li>
                                        <li>Further, Hugo Silva does not warrant or make any representations concerning
                                            the accuracy, likely results, or reliability of the use of the materials on
                                            its website or otherwise relating to such materials or on any sites linked
                                            to this site.
                                        </li>
                                    </ol>
                                </p>
                                <h3>4. Limitations</h3>
                                <p>In no event shall Hugo Silva or its suppliers be liable for
                                any damages (including, without limitation, damages for loss of data or profit, or due
                                to business interruption) arising out of the use or inability to use the materials on
                                Hugo Silva&apos;s website, even if Hugo Silva or a Hugo Silva authorized representative has
                                been notified orally or in writing of the possibility of such damage. Because some
                                jurisdictions do not allow limitations on implied warranties, or limitations of
                                liability for consequential or incidental damages, these limitations may not apply to
                                you.</p>
                                <h3>5. Accuracy of materials</h3>
                                <p>The materials appearing on Hugo Silva&apos;s website could include technical,
                                    typographical, or photographic errors. Hugo Silva does not warrant that any of the
                                    materials on its website are accurate, complete or current. Hugo Silva may make
                                    changes to the materials contained on its website at any time without notice.
                                    However Hugo Silva does not make any commitment to update the materials.</p>
                                <h3>6. Links</h3>
                                <p>Hugo Silva has not reviewed all of the sites linked to its website and is not
                                    responsible for the contents of any such linked site. The inclusion of any link does
                                    not imply endorsement by Hugo Silva of the site. Use of any such linked website is
                                    at the users own risk.</p>
                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                        onClick={closeModal}>
                                    <i className="fa fa-times"></i> Close Terms of Service
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}