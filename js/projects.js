// Editorial Project Panels & Flow Visualizers - Dark Technical Edition
import { PROJECTS } from './data.js';

export class ProjectsSection {
  constructor(openModalCallback) {
    this.container = document.getElementById('projects-container');
    this.openModalCallback = openModalCallback;

    if (!this.container) return;
    this.init();
  }

  init() {
    this.renderProjects();
  }

  renderProjects() {
    this.container.innerHTML = PROJECTS.map((proj, idx) => `
      <article 
        class="project-panel group relative border border-white/10 rounded-2xl bg-charcoal-900/40 p-6 md:p-8 transition-all duration-300 hover:border-cyan-500/50 hover:bg-charcoal-900/75 focus-within:ring-2 focus-within:ring-cyan-400"
        data-project-id="${proj.id}"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <!-- Left Info Column -->
          <div class="lg:col-span-6 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-cyan-400 tracking-wider">PROJECT // 0${idx + 1}</span>
              <span class="px-2.5 py-0.5 text-[11px] font-mono text-cyan-300 border border-cyan-800/40 rounded-full bg-cyan-950/40">${proj.category}</span>
            </div>

            <h3 class="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              ${proj.title}
            </h3>

            <p class="text-sm text-gray-300 font-sans leading-relaxed">
              ${proj.summary}
            </p>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              ${proj.tech.map(t => `
                <span class="px-2.5 py-1 text-[11px] font-mono bg-charcoal-950 text-gray-200 rounded border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  ${t}
                </span>
              `).join('')}
            </div>

            <!-- Action Button -->
            <div class="pt-4">
              <button 
                type="button"
                data-open-case-study="${proj.id}"
                class="inline-flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 focus:outline-none min-h-[38px]"
              >
                <span>READ DETAILED CASE STUDY</span>
                <span class="transform group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          <!-- Right Flow Diagram Column -->
          <div class="lg:col-span-6 border border-white/10 rounded-xl bg-charcoal-950/90 p-4 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
            <div class="text-[10px] font-mono text-gray-400 mb-3 flex items-center justify-between border-b border-white/10 pb-2">
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
              <span class="text-cyan-400 font-semibold flex items-center space-x-1">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>INTERACTIVE ENGINE</span>
              </span>
            </div>
            ${this.renderFlowDiagram(proj.flowType)}
          </div>

        </div>
      </article>
    `).join('');

    this.container.querySelectorAll('[data-open-case-study]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-open-case-study');
        if (this.openModalCallback) {
          this.openModalCallback(id);
        }
      });
    });
  }

  renderFlowDiagram(flowType) {
    switch (flowType) {
      case 'taskFlow':
        return `
          <div class="space-y-2 font-mono text-xs py-1">
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-900 border border-cyan-500/30 text-cyan-300">
              <span class="font-bold">1. REACT FRONTEND</span>
              <span class="text-[10px] text-gray-300">JWT AUTH & STATE</span>
            </div>
            <div class="text-center text-cyan-400/70 text-[10px]">↓ RESTful API Middleware</div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-900 border border-emerald-500/30 text-emerald-300">
              <span class="font-bold">2. NODE / EXPRESS</span>
              <span class="text-[10px] text-gray-300">ROLE CONTROLS & ROUTER</span>
            </div>
            <div class="text-center text-cyan-400/70 text-[10px]">↓ DB Aggregation Pipeline</div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-900 border border-purple-500/30 text-purple-300">
              <span class="font-bold">3. MONGODB DB</span>
              <span class="text-[10px] text-gray-300">INDEXED SCHEMAS</span>
            </div>
          </div>
        `;

      case 'microservicesFlow':
        return `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-center py-2">
            <div class="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold">
              CLIENT
            </div>
            <div class="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
              API GATEWAY
            </div>
            <div class="p-2.5 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold">
              FLASK SERVICE
            </div>
            <div class="p-2.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-300 font-bold">
              POSTGRESQL
            </div>
          </div>
        `;

      case 'pipelineFlow':
        return `
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-[10px] font-mono text-center py-3">
            <div class="p-2 rounded-lg bg-charcoal-900 border border-white/10 text-cyan-300 font-bold">DATA</div>
            <div class="p-2 rounded-lg bg-charcoal-900 border border-white/10 text-emerald-300 font-bold">PROCESS</div>
            <div class="p-2 rounded-lg bg-charcoal-900 border border-white/10 text-amber-300 font-bold">VALIDATE</div>
            <div class="p-2 rounded-lg bg-charcoal-900 border border-white/10 text-purple-300 font-bold">ANALYZE</div>
            <div class="p-2 rounded-lg bg-charcoal-900 border border-white/10 text-pink-300 font-bold">DIAGNOSE</div>
            <div class="p-2 rounded-lg bg-charcoal-900 border border-white/10 text-cyan-300 font-bold">METRICS</div>
          </div>
        `;

      case 'ragFlow':
        return `
          <div class="flex items-center justify-between text-[10px] font-mono py-2 gap-1 overflow-x-auto">
            <span class="px-2.5 py-1.5 rounded-lg bg-charcoal-900 text-gray-200 border border-white/10 whitespace-nowrap">DOCUMENT</span>
            <span class="text-cyan-400">→</span>
            <span class="px-2.5 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800 whitespace-nowrap">CHUNK</span>
            <span class="text-cyan-400">→</span>
            <span class="px-2.5 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 whitespace-nowrap">EMBED</span>
            <span class="text-cyan-400">→</span>
            <span class="px-2.5 py-1.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-800 whitespace-nowrap">VECTOR SEARCH</span>
            <span class="text-cyan-400">→</span>
            <span class="px-2.5 py-1.5 rounded-lg bg-amber-950 text-amber-300 border border-amber-800 whitespace-nowrap">LLM</span>
          </div>
        `;

      case 'mlFlow':
        return `
          <div class="space-y-2 font-mono text-xs py-1">
            <div class="flex items-center justify-between p-2 rounded-lg bg-charcoal-900 border border-white/10">
              <span class="text-cyan-400 font-bold">URL INPUT</span>
              <span class="text-gray-300 text-[10px]">LEXICAL & SSL ATTRIBUTES</span>
            </div>
            <div class="flex items-center justify-between p-2 rounded-lg bg-charcoal-900 border border-white/10">
              <span class="text-purple-400 font-bold">FEATURE EXTRACTION</span>
              <span class="text-gray-300 text-[10px]">STRUCTURAL INDICATORS</span>
            </div>
            <div class="flex items-center justify-between p-2 rounded-lg bg-cyan-950 border border-cyan-500/50">
              <span class="text-cyan-300 font-bold">PYTORCH ML/DL MODEL</span>
              <span class="text-cyan-400 text-[10px] font-mono">ICCET 2026 RESEARCH PAPER</span>
            </div>
          </div>
        `;

      case 'blockchainFlow':
        return `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono text-center py-3">
            <div class="p-2 bg-charcoal-900 rounded-lg text-gray-200 border border-white/10">DOCUMENT</div>
            <div class="p-2 bg-cyan-950 text-cyan-300 rounded-lg border border-cyan-800 font-bold">SHA-256 HASH</div>
            <div class="p-2 bg-purple-950 text-purple-300 rounded-lg border border-purple-800 font-bold">SMART CONTRACT</div>
            <div class="p-2 bg-emerald-950 text-emerald-300 rounded-lg border border-emerald-800 font-bold">VERIFIED</div>
          </div>
        `;

      default:
        return '';
    }
  }
}
