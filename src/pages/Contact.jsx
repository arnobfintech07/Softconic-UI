import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>

    {/*  End header section  */}
    {/*  Start breadcrumbs section  */}
    <section className="breadcrumbs">
        <div className="breadcrumb-sm-images">
            <div className="inner-banner-1 magnetic-item">
                <img src="assets/img/inner-pages/inner-banner-1.png" alt="" />
            </div>
            <div className="inner-banner-2 magnetic-item">
                <img src="assets/img/inner-pages/inner-banner-2.png" alt="" />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-wrapper">
                        <div className="breadcrumb-cnt">
                            <span>Contact</span>
                            <h1>"For Any Querry"</h1>
                            <div className="breadcrumb-list">
                                <a href="index.html">Home</a><img src="assets/img/inner-pages/breadcrumb-arrow.svg" alt="" /> Contact
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*  End breadcrumbs section  */}
    <div className="contact-page-wrap sec-mar">
        <div className="container">
            <div className="row g-lg-4 gy-5">
                <div className="col-lg-6">
                    <div className="contact-content">
                        <span>CONTACT WITH US</span>
                        <h2>LET’S WORK TOGETHER?</h2>
                        <p>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
                        <div className="informations">
                            <div className="single-info">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info">
                                    <p>168/170, Avenue 01, Old York <br /> Drive Rich Mirpur DOHS, Bangladesh</p>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="info">
                                    <a href="tel:05661111985">+880 566 1111 985</a>
                                    <a href="tel:06571111576">+880 657 1111 576</a>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="info">
                                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#12327b7c747d52776a737f627e773c717d7f"><span className="__cf_email__" data-cfemail="157c7b737a55706d74786579703b767a78">[email&#160;protected]</span></a>
                                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#7b5b12151d143b080e0b0b14090f55181416"><span className="__cf_email__" data-cfemail="ec85828a83ac9f999c9c839e98c28f8381">[email&#160;protected]</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="follow-area">
                            <h5 className="blog-widget-title">Follow Us</h5>
                            <p className="para">Follow us on Social Network</p>
                            <div className="blog-widget-body">
                                <ul className="follow-list d-flex flex-row align-items-start gap-4">
                                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a></li>
                                    <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram"></i></a></li>
                                    <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-form-wrap">
                        <div className="form-tltle">
                            <h5>Make a Free Consulting</h5>
                        </div>
                       <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-20">
                                    <div className="form-inner">
                                        <label>first name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-20">
                                    <div className="form-inner">
                                        <label>Last name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <div className="form-inner">
                                        <label>Company/Organization</label>
                                        <input type="text" />      
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <div className="form-inner">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <div className="form-inner">
                                        <label>Phone</label>
                                        <input type="email" />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <div className="form-inner">
                                        <label>Message</label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-inner">
                                        <button className="primary-btn3" type="submit">Submit</button>
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763185785!2d90.36311167608078!3d23.834071185557615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1685535738307!5m2!1sen!2sbd" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    {/*  Start Footer section  */}
    
    </>
  );
};

export default Contact;
