import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectMasonary = () => {
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
                            <span>Projects Masonary</span>
                            <h1>"Our Completed Projects"</h1>
                            <div className="breadcrumb-list">
                                <Link to="/">Home</Link><img src="/assets/img/inner-pages/breadcrumb-arrow.svg" alt="" /> Projects Masonary
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End breadcrumbs section */}
    <div className="portfolio-masonary-page sec-mar">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="isotope-menu">
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".ui">UI/UX</li>
                        <li data-filter=".web">Web Design</li>
                        <li data-filter=".developing">Developing</li>
                        <li data-filter=".graphic">Graphic Design</li>
                    </ul>
                </div>
            </div>
            <div className="row g-4 project-items mb-55">
                <div className="col-lg-5 col-sm-6 single-item ui">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-01.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Streamlining IT Infrastructure</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-6 single-item web">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-02.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Transforming Customer Experience</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 single-item developing">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-03.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Scaling Agile Development</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 single-item graphic">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-04.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Optimizing IT Operations</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 single-item graphic">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-05.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Maximizing Efficiency With DevOps</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 single-item ui">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-06.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Implementing Robotic Process Automation</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 single-item developing">
                    <div className="single-work magnetic-item">
                        <div className="work-img">
                            <img className="img-fluid" src="/assets/img/home-4/work-07.png" alt="" />
                        </div>
                        <div className="work-content">
                            <h3><Link to="/project-details">Scaling Agile Development</Link></h3>
                            <span>Web development</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="load-more-btn">
                        <Link className="primary-btn3" to="/project-masonary">Load More </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default ProjectMasonary;
