// Motion Toggle & Reduced Motion State Manager
export class AccessibilityManager {
  constructor() {
    this.motionToggleBtn = document.getElementById('motion-toggle');
    this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isMotionDisabled = false;

    this.init();
  }

  init() {
    // Check initial state
    if (this.mediaQuery.matches || localStorage.getItem('motion-preference') === 'reduced') {
      this.setReducedMotion(true);
    }

    // Toggle button listener
    if (this.motionToggleBtn) {
      this.motionToggleBtn.addEventListener('click', () => {
        this.setReducedMotion(!this.isMotionDisabled);
      });
    }

    // System OS listener
    this.mediaQuery.addEventListener('change', (e) => {
      this.setReducedMotion(e.matches);
    });
  }

  setReducedMotion(disable) {
    this.isMotionDisabled = disable;
    const html = document.documentElement;

    if (disable) {
      html.classList.add('reduce-motion');
      localStorage.setItem('motion-preference', 'reduced');
      if (this.motionToggleBtn) {
        this.motionToggleBtn.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-red-400"></span>
          <span>MOTION: OFF</span>
        `;
        this.motionToggleBtn.setAttribute('aria-label', 'Motion is currently reduced. Click to enable animations.');
      }
    } else {
      html.classList.remove('reduce-motion');
      localStorage.setItem('motion-preference', 'full');
      if (this.motionToggleBtn) {
        this.motionToggleBtn.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-green-400"></span>
          <span>MOTION: ON</span>
        `;
        this.motionToggleBtn.setAttribute('aria-label', 'Motion is currently active. Click to reduce animations.');
      }
    }
  }
}
