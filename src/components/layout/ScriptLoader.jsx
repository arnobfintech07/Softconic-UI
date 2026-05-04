import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScriptLoader = () => {
  const location = useLocation();

  useEffect(() => {
    // These are libraries that only need to be loaded once
    const libraries = [
      "/assets/js/jquery-3.6.0.min.js",
      "/assets/js/jquery-ui.js",
      "/assets/js/jquery.timeago.js",
      "/assets/js/bootstrap.bundle.min.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/jquery.nice-select.js",
      "/assets/js/jquery.fancybox.min.js",
      "/assets/js/morphext.min.js",
      "/assets/js/odometer.min.js",
      "/assets/js/jquery.marquee.min.js",
      "/assets/js/viewport.jquery.js",
      "/assets/js/isotope.pkgd.min.js",
      "/assets/js/SmoothScroll.js",
      "/assets/js/jquery.nice-number.min.js",
      "/assets/js/jquery.magnific-popup.min.js",
      "/assets/js/masonry.pkgd.min.js",
      "/assets/js/wow.min.js",
      "/assets/js/preloader.js",
      "/assets/js/waypoints.min.js",
      "/assets/js/jquery.counterup.min.js"
    ];

    const loadScript = (src) => {
      if (document.querySelector(`script[src="${src}"]`)) return Promise.resolve();
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Maintain order
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load libraries sequentially
    const loadAll = async () => {
      for (const lib of libraries) {
        await loadScript(lib);
      }
      
      // After libraries, load custom.js (re-run it on every route change)
      const existingCustom = document.querySelector('script[src="/assets/js/custom.js"]');
      if (existingCustom) existingCustom.remove();

      const customScript = document.createElement('script');
      customScript.src = "/assets/js/custom.js";
      customScript.onload = () => {
        // Special re-initialization for things custom.js might miss on route change
        setTimeout(() => {
          if (window.$ && window.$.fn) {
              
              // 1. Re-init WOW
              if (window.WOW) {
                  new window.WOW({
                      boxClass: 'wow',
                      animateClass: 'animated',
                      offset: 100,
                      mobile: true,
                      live: true
                  }).init();
              }

              // 2. Re-init Counter (with retry)
              const initCounter = () => {
                  if (window.$.fn.counterUp) {
                      window.$('.counter').counterUp({
                          delay: 10,
                          time: 1500
                      });
                  } else {
                      setTimeout(initCounter, 500);
                  }
              };
              initCounter();

              // 3. Re-init Team Slider (with retry)
              const initTeamSlider = () => {
                  if (window.Swiper) {
                      const teamSelector = ".home3-team-slider";
                      if (document.querySelector(teamSelector)) {
                          new window.Swiper(teamSelector, {
                              loop: true,
                              spaceBetween: 30,
                              speed: 2000,
                              pagination: {
                                  el: ".swiper-pagination22",
                                  clickable: true,
                              },
                              autoplay: {
                                  delay: 5000
                              },
                              breakpoints: {
                                  280: { slidesPerView: 1 },
                                  386: { slidesPerView: 1 },
                                  576: { slidesPerView: 2 },
                                  768: { slidesPerView: 2 },
                                  992: { slidesPerView: 3 },
                                  1200: { slidesPerView: 4 },
                                  1400: { slidesPerView: 4 },
                              }
                          });
                      }
                  } else {
                      setTimeout(initTeamSlider, 500);
                  }
              };
              initTeamSlider();

              // 4. Re-init Testimonial Slider (with retry)
              const initTestimonialSlider = () => {
                  if (window.Swiper) {
                      const sliderSelector = ".home3-testimonial-slider";
                      if (document.querySelector(sliderSelector)) {
                          new window.Swiper(sliderSelector, {
                              loop: true,
                              spaceBetween: 30,
                              speed: 2000,
                              centeredSlides: true,
                              navigation: {
                                  nextEl: ".nextbtn2",
                                  prevEl: ".prevbtn2",
                              },
                              autoplay: {
                                  delay: 5000
                              },
                              breakpoints: {
                                  280: { slidesPerView: 1 },
                                  386: { slidesPerView: 1 },
                                  576: { slidesPerView: 1 },
                                  768: { slidesPerView: 1.5 },
                                  992: { slidesPerView: 2 },
                                  1200: { slidesPerView: 2 },
                                  1400: { slidesPerView: 2 },
                              }
                          });
                      }
                  } else {
                      setTimeout(initTestimonialSlider, 500);
                  }
              };
              initTestimonialSlider();

              // 5. Re-init Marquee (with retry)
              const initMarquee = () => {
                  if (window.$ && window.$.fn && window.$.fn.marquee) {
                      const m1 = window.$(".marquee_text");
                      const m2 = window.$(".marquee_text2");

                      if (m1.length) {
                          try { m1.marquee('destroy'); } catch(e) {}
                          m1.marquee({
                              direction: "left",
                              duration: 25000,
                              gap: 50,
                              delayBeforeStart: 0,
                              duplicated: true,
                              startVisible: true,
                          });
                      }

                      if (m2.length) {
                          try { m2.marquee('destroy'); } catch(e) {}
                          m2.marquee({
                              direction: "right",
                              duration: 25000,
                              gap: 50,
                              delayBeforeStart: 0,
                              duplicated: true,
                              startVisible: true,
                          });
                      }
                  } else {
                      setTimeout(initMarquee, 500);
                  }
              };
              initMarquee();

              // 4. Trigger window load
              window.$(window).trigger('load');
          }
        }, 500);
      };
      
      document.body.appendChild(customScript);
    };

    loadAll();
  }, [location.pathname]);

  return null;
};

export default ScriptLoader;
