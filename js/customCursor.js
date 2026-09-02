// Desktop Refined Custom Cursor
export class CustomCursor {
  constructor() {
    this.dot = document.getElementById('cursor-dot');
    this.ring = document.getElementById('cursor-ring');
    this.label = document.getElementById('cursor-label');

    if (!this.dot || !this.ring) return;

    this.pos = { x: -100, y: -100 };
    this.target = { x: -100, y: -100 };
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.enabled = !this.isTouch;

    if (!this.enabled) {
      this.dot.style.display = 'none';
      this.ring.style.display = 'none';
      return;
    }

    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
      this.dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    // Hover delegates
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, [data-cursor], .interactive-node, .project-panel');
      if (target) {
        this.ring.classList.add('cursor-hover');

        const cursorType = target.getAttribute('data-cursor');
        if (cursorType === 'VIEW' || target.classList.contains('project-panel')) {
          this.label.textContent = 'VIEW';
          this.ring.classList.add('cursor-large');
        } else if (cursorType === 'INTERACT') {
          this.label.textContent = 'INTERACT';
          this.ring.classList.add('cursor-large');
        } else if (target.tagName === 'A' && target.target === '_blank') {
          this.label.textContent = '↗';
        } else {
          this.label.textContent = '';
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, [data-cursor], .interactive-node, .project-panel');
      if (target) {
        this.ring.classList.remove('cursor-hover', 'cursor-large');
        this.label.textContent = '';
      }
    });

    this.render();
  }

  render() {
    // Lerp smooth follow for outer ring
    this.pos.x += (this.target.x - this.pos.x) * 0.18;
    this.pos.y += (this.target.y - this.pos.y) * 0.18;

    if (this.ring) {
      this.ring.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0)`;
    }

    requestAnimationFrame(() => this.render());
  }
}
