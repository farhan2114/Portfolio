// Hero Background Interactive Node Network Canvas - Dark Technical Edition
export class NetworkCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.mouse = { x: -1000, y: -1000, active: false };
    this.animId = null;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    if (this.isTouch) {
      this.canvas.style.pointerEvents = 'none';
    } else {
      const heroSection = document.getElementById('hero');
      const target = heroSection || window;
      
      target.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        this.mouse.active = true;
      });

      target.addEventListener('mouseleave', () => {
        this.mouse.active = false;
      });
    }

    this.createNodes();
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.clientWidth;
    this.canvas.height = parent.clientHeight;
    if (this.nodes.length > 0) {
      this.createNodes();
    }
  }

  createNodes() {
    const domains = [
      { name: "Frontend", color: "#00F0FF", size: 5 },
      { name: "Backend", color: "#10B981", size: 5 },
      { name: "AI / ML", color: "#8B5CF6", size: 5 },
      { name: "Cloud", color: "#F59E0B", size: 5 },
      { name: "Data", color: "#3B82F6", size: 5 },
      { name: "Testing", color: "#EC4899", size: 5 }
    ];

    const width = this.canvas.width;
    const height = this.canvas.height;
    this.nodes = [];

    domains.forEach((d, idx) => {
      const angle = (idx / domains.length) * Math.PI * 2;
      const radius = Math.min(width, height) * (width < 640 ? 0.35 : 0.3);
      const cx = width / 2 + Math.cos(angle) * radius;
      const cy = height / 2 + Math.sin(angle) * radius;

      this.nodes.push({
        x: cx,
        y: cy,
        baseX: cx,
        baseY: cy,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        name: d.name,
        color: d.color,
        radius: d.size,
        isDomain: true
      });
    });

    const numSubNodes = width < 768 ? 12 : 24;
    for (let i = 0; i < numSubNodes; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      this.nodes.push({
        x: rx,
        y: ry,
        baseX: rx,
        baseY: ry,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        name: null,
        color: "#64748B",
        radius: 2,
        isDomain: false
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const isMotionOff = document.documentElement.classList.contains('reduce-motion') || this.isReducedMotion;

    this.nodes.forEach(node => {
      if (!isMotionOff) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 15 || node.x > this.canvas.width - 15) node.vx *= -1;
        if (node.y < 15 || node.y > this.canvas.height - 15) node.vy *= -1;

        if (!this.isTouch && this.mouse.active) {
          const dx = this.mouse.x - node.x;
          const dy = this.mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            node.x -= (dx / dist) * force * 2.5;
            node.y -= (dy / dist) * force * 2.5;
          }
        }
      }
    });

    const maxDist = this.canvas.width < 640 ? 120 : 160;
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.2;
          this.ctx.beginPath();
          this.ctx.moveTo(n1.x, n1.y);
          this.ctx.lineTo(n2.x, n2.y);
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    this.nodes.forEach(node => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = node.color;
      this.ctx.shadowColor = node.color;
      this.ctx.shadowBlur = node.isDomain ? 8 : 0;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      if (node.isDomain && node.name && this.canvas.width >= 480) {
        this.ctx.font = "10px 'JetBrains Mono', monospace";
        this.ctx.fillStyle = "rgba(243, 244, 246, 0.75)";
        this.ctx.fillText(node.name, node.x + 8, node.y + 3);
      }
    });

    this.animId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}
