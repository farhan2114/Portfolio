// Navigation, Scroll Progress, and Mobile Menu Management
export class Navigation {
  constructor() {
    this.header = document.getElementById('main-nav');
    this.progressBar = document.getElementById('scroll-progress');
    this.mobileToggle = document.getElementById('mobile-menu-toggle');
    this.mobileDrawer = document.getElementById('mobile-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }

  init() {
    this.setupScrollProgress();
    this.setupSectionObserver();
    this.setupMobileMenu();
    this.setupSmoothScroll();
  }

  setupScrollProgress() {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      if (this.progressBar) {
        this.progressBar.style.width = scrolled + '%';
      }

      if (this.header) {
        if (winScroll > 50) {
          this.header.classList.add('nav-scrolled');
        } else {
          this.header.classList.remove('nav-scrolled');
        }
      }
    }, { passive: true });
  }

  setupSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('text-cyan-400', 'border-b-2', 'border-cyan-400');
              link.classList.remove('text-gray-400');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('text-cyan-400', 'border-b-2', 'border-cyan-400');
              link.classList.add('text-gray-400');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));
  }

  setupMobileMenu() {
    if (!this.mobileToggle || !this.mobileDrawer) return;

    this.mobileToggle.addEventListener('click', () => {
      const isExpanded = this.mobileToggle.getAttribute('aria-expanded') === 'true';
      this.toggleMobileMenu(!isExpanded);
    });

    // Close on link click
    this.mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.toggleMobileMenu(false));
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileDrawer.classList.contains('active')) {
        this.toggleMobileMenu(false);
      }
    });
  }

  toggleMobileMenu(open) {
    if (open) {
      this.mobileDrawer.classList.add('active');
      this.mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
    } else {
      this.mobileDrawer.classList.remove('active');
      this.mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    }
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: document.documentElement.classList.contains('reduce-motion') ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}
