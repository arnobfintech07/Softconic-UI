import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Project = () => {
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
                            <span>Projects</span>
                            <h1>"Our Completed Projects"</h1>
                            <div className="breadcrumb-list">
                                <Link to="/">Home</Link><img src="/assets/img/inner-pages/breadcrumb-arrow.svg" alt="" /> Projects
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End breadcrumbs section */}
    <div className="home3-success-stories-area two sec-mar">
        <div className="container-fluid">
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="success-storie-card">
                        <div className="success-img">
                            <img className="img-fluid magnetic-item" src="/assets/img/home-3/home3-suc-sto-01.png" alt="" />
                        </div>
                        <div className="success-content">
                            <span>Web development</span>
                            <h3><Link to="/project-details">Streamlining IT Infrastructure</Link></h3>
                            <div className="view-btn">
                                <Link to="/project-details">
                                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="success-storie-card">
                        <div className="success-img">
                            <img className="img-fluid magnetic-item" src="/assets/img/home-3/home3-suc-sto-02.png" alt="" />
                        </div>
                        <div className="success-content">
                            <span>Web development</span>
                            <h3><Link to="/project-details">Transforming Customer Experience</Link></h3>
                            <div className="view-btn">
                                <Link to="/project-details">
                                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="success-storie-card">
                        <div className="success-img magnetic-item">
                            <img className="img-fluid" src="/assets/img/home-3/home3-suc-sto-03.png" alt="" />
                        </div>
                        <div className="success-content">
                            <span>Web development</span>
                            <h3><Link to="/project-details">Scaling Agile Development</Link></h3>
                            <div className="view-btn">
                                <Link to="/project-details">
                                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="success-storie-card">
                        <div className="success-img">
                            <img className="img-fluid magnetic-item" src="/assets/img/home-3/home3-suc-sto-01.png" alt="" />
                        </div>
                        <div className="success-content">
                            <span>Web development</span>
                            <h3><Link to="/project-details">Optimizing IT Operations</Link></h3>
                            <div className="view-btn">
                                <Link to="/project-details">
                                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="success-storie-card">
                        <div className="success-img">
                            <img className="img-fluid magnetic-item" src="/assets/img/home-3/home3-suc-sto-02.png" alt="" />
                        </div>
                        <div className="success-content">
                            <span>Web development</span>
                            <h3><Link to="/project-details">Maximizing Efficiency with DevOps</Link></h3>
                            <div className="view-btn">
                                <Link to="/project-details">
                                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="success-storie-card">
                        <div className="success-img magnetic-item">
                            <img className="img-fluid" src="/assets/img/home-3/home3-suc-sto-03.png" alt="" />
                        </div>
                        <div className="success-content">
                            <span>Web development</span>
                            <h3><Link to="/project-details">Implementing Robotic Process Automation</Link></h3>
                            <div className="view-btn">
                                <Link to="/project-details">
                                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <Link className="page-link"><i className="bi bi-arrow-left"></i></Link>
                      </li>
                      <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item">
                        <Link className="page-link" to="#"><i className="bi bi-arrow-right"></i></Link>
                      </li>
                    </ul>
                  </nav>
            </div>
        </div>
    </div>
        </>
    );
};

export default Project;
