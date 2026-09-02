// Detailed Project Case Study Modal Component - Dark Technical Edition
import { PROJECTS } from './data.js';

export class CaseStudyModal {
  constructor() {
    this.modal = document.getElementById('case-study-modal');
    this.modalContent = document.getElementById('case-study-content');
    this.closeBtn = document.getElementById('case-study-close');
    this.previouslyFocused = null;

    if (!this.modal || !this.modalContent) return;
    this.init();
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    this.previouslyFocused = document.activeElement;
    const cs = project.caseStudy;

    this.modalContent.innerHTML = `
      <div class="space-y-6">
        <!-- Header -->
        <div class="border-b border-white/10 pb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-mono text-cyan-400 tracking-wider">CASE STUDY // ${project.category}</span>
            <span class="px-2.5 py-0.5 text-xs font-mono bg-cyan-950 text-cyan-300 rounded border border-cyan-800">VERIFIED PROFILE</span>
          </div>
          <h2 id="case-study-title" class="text-2xl md:text-3xl font-bold text-white">${project.title}</h2>
          <p class="text-sm text-gray-400 mt-1">${project.subtitle}</p>
        </div>

        <!-- Problem Statement -->
        <div>
          <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Problem Statement</h3>
          <div class="p-4 rounded-xl bg-charcoal-900 border border-white/5 text-sm text-gray-300 leading-relaxed font-sans">
            ${cs.problem}
          </div>
        </div>

        <!-- Architectural Approach -->
        <div>
          <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Architectural Approach</h3>
          <div class="p-4 rounded-xl bg-charcoal-900 border border-white/5 text-sm text-gray-300 leading-relaxed font-sans">
            ${cs.approach}
          </div>
        </div>

        <!-- Architecture Breakdown -->
        <div>
          <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// System Components</h3>
          <ul class="space-y-2 text-sm text-gray-300 font-sans">
            ${cs.architecture.map(item => `
              <li class="flex items-start space-x-2 p-2.5 rounded bg-charcoal-950 border border-white/5">
                <span class="text-cyan-400 font-mono">▸</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Implementation & Testing -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Implementation Details</h3>
            <div class="p-3.5 rounded-lg bg-charcoal-900 border border-white/5 text-xs text-gray-300 leading-relaxed">
              ${cs.implementation}
            </div>
          </div>
          <div>
            <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Software Testing & Reliability</h3>
            <div class="p-3.5 rounded-lg bg-charcoal-900 border border-white/5 text-xs text-gray-300 leading-relaxed">
              ${cs.testing}
            </div>
          </div>
        </div>

        <!-- Technical Outcome -->
        <div>
          <h3 class="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">// Technical Outcome</h3>
          <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-sm text-emerald-200">
            ${cs.outcome}
          </div>
        </div>

        <!-- Verified Tech Stack -->
        <div>
          <h3 class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">// Verified Tech Stack</h3>
          <div class="flex flex-wrap gap-1.5">
            ${project.tech.map(t => `
              <span class="px-2.5 py-1 text-xs font-mono bg-charcoal-950 text-cyan-300 rounded border border-cyan-800/40">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');

    if (this.closeBtn) {
      this.closeBtn.focus();
    }
  }

  close() {
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');

    if (this.previouslyFocused) {
      this.previouslyFocused.focus();
    }
  }
}
