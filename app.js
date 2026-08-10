/* =========================================================
   DEV PRATAP SINGH — PREMIUM PORTFOLIO
   Navigation + Scroll + Mobile Menu + Smooth Scrolling
   Purple / Indigo / Violet Theme
   ========================================================= */


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
);

const mobile_menu = document.querySelector(
  '.header .nav-bar .nav-list ul'
);

const menu_item = document.querySelectorAll(
  '.header .nav-bar .nav-list ul li a'
);

const header = document.querySelector(
  '.header.container'
);


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

if (hamburger && mobile_menu) {

  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');

    mobile_menu.classList.toggle('active');

  });

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

document.addEventListener('scroll', () => {

  const scroll_position = window.scrollY;

  if (!header) {
    return;
  }


  /* -----------------------------------------
     SCROLLED HEADER
     ----------------------------------------- */

  if (scroll_position > 250) {

    header.style.background =
      'rgba(8, 4, 15, 0.94)';

    header.style.backdropFilter =
      'blur(14px)';

    header.style.webkitBackdropFilter =
      'blur(14px)';

    header.style.borderBottom =
      '1px solid rgba(167, 139, 250, 0.20)';

    header.style.boxShadow =
      '0 8px 30px rgba(76, 29, 149, 0.18)';

  }


  /* -----------------------------------------
     TOP OF PAGE
     ----------------------------------------- */

  else {

    header.style.background =
      'transparent';

    header.style.backdropFilter =
      'none';

    header.style.webkitBackdropFilter =
      'none';

    header.style.borderBottom =
      '1px solid transparent';

    header.style.boxShadow =
      'none';

  }

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

menu_item.forEach((item) => {

  item.addEventListener('click', () => {

    if (hamburger) {

      hamburger.classList.remove('active');

    }

    if (mobile_menu) {

      mobile_menu.classList.remove('active');

    }

  });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

menu_item.forEach((item) => {

  item.addEventListener('click', () => {

    menu_item.forEach((link) => {

      link.classList.remove('active');

    });

    item.classList.add('active');

  });

});


/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

document.querySelectorAll(
  'a[href^="#"]'
).forEach((anchor) => {

  anchor.addEventListener('click', function (event) {

    const targetId =
      this.getAttribute('href');


    /* Ignore empty anchors */

    if (
      !targetId ||
      targetId === '#'
    ) {

      return;

    }


    const target =
      document.querySelector(targetId);


    /* Scroll only when target exists */

    if (target) {

      event.preventDefault();

      target.scrollIntoView({

        behavior: 'smooth',

        block: 'start'

      });

    }

  });

});


/* =========================================================
   HEADER STATE ON PAGE LOAD
   ========================================================= */

function updateHeader() {

  if (!header) {
    return;
  }

  const scroll_position =
    window.scrollY;


  if (scroll_position > 250) {

    header.style.background =
      'rgba(8, 4, 15, 0.94)';

    header.style.backdropFilter =
      'blur(14px)';

    header.style.webkitBackdropFilter =
      'blur(14px)';

    header.style.borderBottom =
      '1px solid rgba(167, 139, 250, 0.20)';

    header.style.boxShadow =
      '0 8px 30px rgba(76, 29, 149, 0.18)';

  }

  else {

    header.style.background =
      'transparent';

    header.style.backdropFilter =
      'none';

    header.style.webkitBackdropFilter =
      'none';

    header.style.borderBottom =
      '1px solid transparent';

    header.style.boxShadow =
      'none';

  }

}


/* =========================================================
   INITIALIZE HEADER
   ========================================================= */

updateHeader();


/* =========================================================
   ACTIVE SECTION DETECTION
   ========================================================= */

const sections = document.querySelectorAll(
  'section[id]'
);

if (sections.length > 0) {

  window.addEventListener(
    'scroll',
    () => {

      let currentSection = '';

      sections.forEach((section) => {

        const sectionTop =
          section.offsetTop - 180;

        const sectionHeight =
          section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {

          currentSection =
            section.getAttribute('id');

        }

      });


      menu_item.forEach((item) => {

        item.classList.remove(
          'active'
        );


        const href =
          item.getAttribute('href');


        if (
          href === `#${currentSection}`
        ) {

          item.classList.add(
            'active'
          );

        }

      });

    }
  );

}


/* =========================================================
   PREVENT MOBILE MENU FROM STAYING OPEN
   AFTER RESIZING TO DESKTOP
   ========================================================= */

window.addEventListener(
  'resize',
  () => {

    if (
      window.innerWidth > 768
    ) {

      if (hamburger) {

        hamburger.classList.remove(
          'active'
        );

      }

      if (mobile_menu) {

        mobile_menu.classList.remove(
          'active'
        );

      }

    }

  }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

if (hamburger) {

  hamburger.setAttribute(
    'role',
    'button'
  );

  hamburger.setAttribute(
    'aria-label',
    'Toggle navigation menu'
  );

  hamburger.setAttribute(
    'tabindex',
    '0'
  );


  hamburger.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter' ||
        event.key === ' '
      ) {

        event.preventDefault();

        hamburger.click();

      }

    }
  );

}


/* =========================================================
   END
   ========================================================= */
