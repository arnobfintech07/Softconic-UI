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
      "/assets/js/preloader.js"
    ];

    const loadScript = (src) => {
      return new Promise((resolve) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          if (existingScript.getAttribute('data-loaded') === 'true') {
            resolve();
          } else {
            existingScript.addEventListener('load', resolve);
          }
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => {
          script.setAttribute('data-loaded', 'true');
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      // 1. Load all libraries sequentially
      for (const lib of libraries) {
        await loadScript(lib);
      }

      // 2. Remove old custom.js if it exists to re-run it for the new route
      const oldCustom = document.querySelector(`script[src="/assets/js/custom.js"]`);
      if (oldCustom) {
        oldCustom.remove();
        // Destroy existing swiper instances so re-initializing doesn't break them
        document.querySelectorAll('.swiper').forEach(el => {
          if (el.swiper) {
             el.swiper.destroy(true, true);
          }
        });
      }

      // 3. Re-inject custom.js so that it binds to the new DOM nodes
      const customScript = document.createElement('script');
      customScript.src = "/assets/js/custom.js";
      customScript.async = false;
      customScript.onload = () => {
        // After custom.js is loaded, manually trigger window load so WOW.js and other plugins initialize
        setTimeout(() => {
            if (window.$) {
                // Initialize Marquee
                if (window.$.fn.marquee) {
                    setTimeout(() => {
                        try { window.$(".marquee_text").marquee('destroy'); } catch(e) {}
                        try { window.$(".marquee_text2").marquee('destroy'); } catch(e) {}

                        window.$(".marquee_text").marquee({
                            direction: "left",
                            duration: 25000,
                            gap: 50,
                            delayBeforeStart: 0,
                            duplicated: true,
                            startVisible: true,
                        });
                        window.$(".marquee_text2").marquee({
                            direction: "top",
                            duration: 25000,
                            gap: 50,
                            delayBeforeStart: 0,
                            duplicated: true,
                            startVisible: true,
                        });
                    }, 500);
                }
                
                // Initialize WOW since window.onload may have already passed
                if (window.WOW) {
                    new window.WOW({
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 100,
                        mobile: true,
                        live: true
                    }).init();
                }

                // Trigger load event just in case
                window.$(window).trigger('load');
            }
        }, 300);
      };
      
      document.body.appendChild(customScript);
    };

    loadAllScripts();

  }, [location.pathname]); // Re-run when the route changes

  return null;
};

export default ScriptLoader;
