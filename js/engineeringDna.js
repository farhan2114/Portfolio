// Engineering DNA Animated Interactive Sequence Component - Dark Technical Edition
import { ENGINEERING_DNA } from './data.js';

export class EngineeringDna {
  constructor() {
    this.container = document.getElementById('dna-container');
    if (!this.container) return;
    this.activeStep = 0;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="space-y-6">
        <!-- Sequence Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          ${ENGINEERING_DNA.map((dna, idx) => `
            <button 
              type="button" 
              data-dna-idx="${idx}"
              class="dna-step-btn p-3 rounded-xl border text-center transition-all duration-300 ${idx === this.activeStep ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]' : 'border-white/10 bg-charcoal-900/50 text-gray-400 hover:text-white hover:border-white/20'}"
            >
              <div class="text-[10px] font-mono text-gray-500">0${idx + 1}</div>
              <div class="text-sm font-mono font-bold tracking-wider">${dna.step}</div>
            </button>
          `).join('')}
        </div>

        <!-- Detail Box -->
        <div class="border border-white/10 rounded-2xl bg-charcoal-950/90 p-6 space-y-3 transition-all duration-300">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-cyan-400">DNA CYCLE // STEP 0${this.activeStep + 1}</span>
            <span class="text-xs font-mono font-bold text-white">${ENGINEERING_DNA[this.activeStep].step}</span>
          </div>
          <h3 class="text-xl font-bold text-white">${ENGINEERING_DNA[this.activeStep].tagline}</h3>
          <p class="text-sm text-gray-300 font-sans leading-relaxed">
            ${ENGINEERING_DNA[this.activeStep].desc}
          </p>
        </div>
      </div>
    `;

    this.container.querySelectorAll('[data-dna-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeStep = parseInt(btn.getAttribute('data-dna-idx'), 10);
        this.render();
      });
      btn.addEventListener('mouseenter', () => {
        this.activeStep = parseInt(btn.getAttribute('data-dna-idx'), 10);
        this.render();
      });
    });
  }
}
