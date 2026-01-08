/**
* Template Name: MyResume
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  // Header background/shadow change when scrolling past hero
  const header = select('#header')
  const hero = select('#hero')
  const toggleHeaderSection = () => {
    if (!header || !hero) return
    const heroBottom = hero.offsetTop + hero.offsetHeight
    if (window.scrollY + 10 >= heroBottom) {
      header.classList.add('section-active')
    } else {
      header.classList.remove('section-active')
    }
  }
  window.addEventListener('load', toggleHeaderSection)
  onscroll(document, toggleHeaderSection)

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect (Typed.js)
   */
  const heroTyped = select('#hero-typed')
  if (heroTyped) {
    const typed_strings = heroTyped.getAttribute('data-typed-items') || ''
    const strings = typed_strings
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    if (typeof Typed !== 'undefined' && strings.length) {
      new Typed('#hero-typed', {
        strings,
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
      })
    }
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    const animateSkills = () => {
      let progress = select('.progress .progress-bar', true);
      progress.forEach((el) => {
        const val = el.getAttribute('aria-valuenow') || '0'
        el.style.width = val + '%'
        const skillVal = el.closest('.progress').querySelector('.skill .val')
        if (skillVal) skillVal.textContent = val + '%'
        el.classList.add('animated')
      });
    }

    if (typeof Waypoint !== 'undefined') {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          animateSkills()
          this.destroy()
        }
      })
    } else if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          animateSkills()
          io.disconnect()
        })
      }, { threshold: 0.15 })
      io.observe(skilsContent)
    } else {
      window.addEventListener('load', animateSkills)
    }
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  });

  /**
   * Initiate portfolio lightboxes
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.portfolio-lightbox' });
    GLightbox({ selector: '.portfolio-details-lightbox', width: '90%', height: '90vh' });
  }

  /**
   * Click portfolio card to open external link
   */
  on('click', '.portfolio .portfolio-wrap', function(e) {
    if (e.target && e.target.closest && e.target.closest('a')) return

    const external = this.querySelector('a.portfolio-external')
    if (!external || !external.href) return

    window.open(external.href, '_blank', 'noopener,noreferrer')
  }, true)

  /**
   * Portfolio details slider
   */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

})()