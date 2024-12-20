'use client'

export default function Tech() {
    return (
        <section id="profiles" className="profiles">
            <div className="profiles-details">
                <div className="section-heading text-center">
                    <h2>Tech</h2>
                </div>
                <div className="container">
                    <div className="profiles-content">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="single-profile"
                                     onClick={() => window.open("https://www.unrealengine.com")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-unreal_engine"></i>
                                        <div className="profile-icon-name">Unreal Engine</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-unreal_engine"></i>
                                            <div className="profile-icon-name">Unreal Engine</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile"
                                     onClick={() => window.open("https://www.perforce.com")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-perforce"></i>
                                        <div className="profile-icon-name">Perforce</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-perforce"></i>
                                            <div className="profile-icon-name">Perforce</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile"
                                     onClick={() => window.open("https://unity.com")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-unity"></i>
                                        <div className="profile-icon-name">Unity</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-unity"></i>
                                            <div className="profile-icon-name">Unity</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile profile-no-border"
                                     onClick={() => window.open("https://github.com/")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="flaticon-github-logo"></i>
                                        <div className="profile-icon-name">github</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="flaticon-github-logo"></i>
                                            <div className="profile-icon-name">github</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-border"></div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="single-profile"
                                     onClick={() => window.open("https://www.jetbrains.com/rider/")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-rider"></i>
                                        <div className="profile-icon-name">Rider</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-rider"></i>
                                            <div className="profile-icon-name">Rider</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile"
                                     onClick={() => window.open("https://www.adobe.com/products/photoshop.html")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-photoshop"></i>
                                        <div className="profile-icon-name">Photoshop</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-photoshop"></i>
                                            <div className="profile-icon-name">Photoshop</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile"
                                     onClick={() => window.open("https://www.figma.com")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-figma"></i>
                                        <div className="profile-icon-name">Figma</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-figma"></i>
                                            <div className="profile-icon-name">Figma</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile profile-no-border"
                                     onClick={() => window.open("https://www.blender.org")}
                                     style={{cursor: 'pointer'}}>
                                    <div className="profile-txt">
                                        <i className="icon-blender"></i>
                                        <div className="profile-icon-name">Blender</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt selected">
                                            <i className="icon-blender"></i>
                                            <div className="profile-icon-name">Blender</div>
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