import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudy1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const caseStudies = [
        {
            id: 1,
            category: "CLOUD HOSTING",
            title: "Unlocking Scalability, Reliability, and Efficiency.",
            description: "Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.",
            img: "/assets/img/home-6/home6-case-01.png",
            side: "left",
            borderBottom: true
        },
        {
            id: 2,
            category: "MOBILE DEVELOPMENT",
            title: "Empowering Businesses through Cutting-Edge Mobile.",
            description: "Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.",
            img: "/assets/img/home-6/home6-case-02.png",
            side: "left",
            borderBottom: false,
            paddingTop: true
        },
        {
            id: 3,
            category: "IT CONSULTING",
            title: "Empowering Business Performan through Expert.",
            description: "Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.",
            img: "/assets/img/home-6/home6-case-03.png",
            side: "right",
            borderBottom: true,
            paddingBottom: true
        },
        {
            id: 4,
            category: "CLOUD HOSTING",
            title: "Unlocking Scalability, Reliability, and Efficiency.",
            description: "Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.",
            img: "/assets/img/home-6/home6-case-04.png",
            side: "right",
            borderBottom: false,
            paddingTop: true
        }
    ];

    const leftStudies = caseStudies.filter(study => study.side === "left");
    const rightStudies = caseStudies.filter(study => study.side === "right");

    return (
        <>
            {/* Start breadcrumbs section */}
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
                                    <span>Case Study</span>
                                    <h1>"From Challenge to Triumph"</h1>
                                    <div className="breadcrumb-list">
                                        <Link to="/">Home</Link><img src="/assets/img/inner-pages/breadcrumb-arrow.svg" alt="" /> Case Study
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End breadcrumbs section */}

            <div className="home6-case-study-section sec-mar">
                <div className="container">
                    <div className="row g-lg-4 gy-5 border-rights">
                        <div className="col-lg-6">
                            <div className="case-left">
                                <div className="row g-lg-4 gy-5">
                                    {leftStudies.map((study) => (
                                        <div key={study.id} className={`col-lg-12 col-md-6 ${study.borderBottom ? 'border-bottom1' : ''}`}>
                                            <div className="home6-case-study">
                                                <div className={`case-img ${study.paddingTop ? 'pt-50' : ''} magnetic-item`}>
                                                    <img className="img-fluid" src={study.img} alt="" />
                                                </div>
                                                <div className={`case-content ${study.borderBottom ? 'pb-50' : ''}`}>
                                                    <span>{study.category}</span>
                                                    <h3><Link to="/case-study-details">{study.title}</Link></h3>
                                                    <p>{study.description}</p>
                                                    <div className="learn-btn">
                                                        <Link className="primary-btn9" to="/case-study-details">
                                                            <span>Learn More</span>
                                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5"></path>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="case-right">
                                <div className="row g-lg-4 gy-5">
                                    {rightStudies.map((study) => (
                                        <div key={study.id} className={`col-lg-12 col-md-6 ${study.borderBottom ? 'border-bottom2' : ''}`}>
                                            <div className={`home6-case-study ${study.paddingBottom ? 'pb-50' : ''}`}>
                                                <div className={`case-img ${study.paddingTop ? 'pt-50' : ''} magnetic-item`}>
                                                    <img className="img-fluid" src={study.img} alt="" />
                                                </div>
                                                <div className="case-content">
                                                    <span>{study.category}</span>
                                                    <h3><Link to="/case-study-details">{study.title}</Link></h3>
                                                    <p>{study.description}</p>
                                                    <div className="learn-btn">
                                                        <Link className="primary-btn9" to="/case-study-details">
                                                            <span>Learn More</span>
                                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5"></path>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link"><i className="bi bi-arrow-left"></i></a>
                                </li>
                                <li className="page-item"><Link className="page-link active" to="/case-study">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="/case-study">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/case-study">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="/case-study"><i className="bi bi-arrow-right"></i></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudy1;
