import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScriptLoader = () => {
  const location = useLocation();

  useEffect(() => {
    const initAll = () => {
      // 1. Re-init custom.js
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
                  try {
                      new window.WOW({
                          boxClass: 'wow',
                          animateClass: 'animated',
                          offset: 100,
                          mobile: true,
                          live: true
                      }).init();
                  } catch (e) {
                      console.log("WOW init error:", e);
                  }
              }

              // 2. Re-init Counter (with retry)
              const initCounter = () => {
                  if (window.$ && window.$.fn && window.$.fn.counterUp) {
                      window.$('.counter').counterUp({
                          delay: 10,
                          time: 1500
                      });
                  } else {
                      setTimeout(initCounter, 500);
                  }
              };
              initCounter();

              // 3. Re-init Swipers (generic check)
              if (window.Swiper) {
                  // Re-init specific sliders if needed
                  document.querySelectorAll('.swiper').forEach(el => {
                      if (el.swiper) el.swiper.update();
                  });
              }

              // 4. Trigger window load and scroll
              window.$(window).trigger('load');
              window.$(window).trigger('scroll');
          }
        }, 300);
      };
      document.body.appendChild(customScript);
    };

    // Check if jQuery is ready before initializing
    const checkJquery = () => {
      if (window.$ && window.$.fn) {
        initAll();
      } else {
        setTimeout(checkJquery, 100);
      }
    };

    checkJquery();
  }, [location.pathname]);

  return null;
};

export default ScriptLoader;
