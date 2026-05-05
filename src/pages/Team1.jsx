import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Team1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
    <section className="breadcrumbs">
        <div className="breadcrumb-sm-images">
            <div className="inner-banner-1 magnetic-item">
                <img src="/assets/img/inner-pages/inner-banner-1.png" alt="" />
            </div>
            <div className="inner-banner-2 magnetic-item">
                <img src="/assets/img/inner-pages/inner-banner-2.png" alt="" />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-wrapper">
                        <div className="breadcrumb-cnt">
                            <span>Team</span>
                            <h1>"Meet Our Expertise"</h1>
                            <div className="breadcrumb-list">
                                <Link to="/">Home</Link><img src="/assets/img/inner-pages/breadcrumb-arrow.svg" alt="" /> Team
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End breadcrumbs section */}
    <div className="home3-team-area sec-mar">
        <div className="container"> 
            <div className="row">
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-01.png" alt="" />
                            <div className="expert-social">
                                <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Mateo Daniel</h4>
                            <span>Founder, CTO</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-02.png" alt="" />
                            <div className="expert-social">
                               <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Elias Josiah</h4>
                            <span>Co-Founder, CEO</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-03.png" alt="" />
                            <div className="expert-social">
                               <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Miles Jaxon</h4>
                            <span>Head of HR & Manager</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-04.png" alt="" />
                            <div className="expert-social">
                               <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Silas Nicholas</h4>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-05.png" alt="" />
                            <div className="expert-social">
                                <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Mateo Jhon</h4>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-06.png" alt="" />
                            <div className="expert-social">
                               <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Ralph Oscar</h4>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-07.png" alt="" />
                            <div className="expert-social">
                               <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Myles Hunter</h4>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                    <div className="experts-card magnetic-item">
                        <div className="experts-img">
                            <img className="img-fluid" src="/assets/img/home-4/experts-08.png" alt="" />
                            <div className="expert-social">
                               <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="bx bxl-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt"></i></Link></li>
                                    <li><Link href="https://www.pinterest.com/"><i className="bx bxl-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="experts-content">
                            <h4>Aaron Jackson</h4>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    {/* Start Footer section */}
        </>
    );
};

export default Team1;
