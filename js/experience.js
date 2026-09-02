// Interactive Experience Timeline Component - Dark Technical Edition
import { EXPERIENCE } from './data.js';

export class ExperienceTimeline {
  constructor() {
    this.container = document.getElementById('experience-container');
    if (!this.container) return;
    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12 py-4">
        ${EXPERIENCE.map((exp, idx) => `
          <div class="relative pl-6 md:pl-8 group">
            <!-- Node Marker -->
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-400 bg-charcoal-950 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,240,255,0.4)]"></div>

            <div class="border border-white/10 rounded-2xl bg-charcoal-900/50 p-6 space-y-4 hover:border-cyan-500/30 hover:bg-charcoal-900/70 transition-all duration-300">
              <!-- Header -->
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <span class="text-xs font-mono text-cyan-400 tracking-wider">${exp.company}</span>
                  <h3 class="text-xl font-bold text-white mt-0.5">${exp.role}</h3>
                </div>
                <div class="text-xs font-mono text-gray-400 bg-charcoal-950 px-3 py-1 rounded border border-white/10 self-start md:self-auto">
                  ${exp.period}
                </div>
              </div>

              <!-- Highlights -->
              <ul class="space-y-2 text-sm text-gray-300 font-sans">
                ${exp.highlights.map(h => `
                  <li class="flex items-start space-x-2">
                    <span class="text-cyan-400 font-mono text-xs mt-0.5">▸</span>
                    <span class="leading-relaxed">${h}</span>
                  </li>
                `).join('')}
              </ul>

              <!-- Tech Stack Tags -->
              <div>
                <h4 class="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">Verified Core Responsibilities</h4>
                <div class="flex flex-wrap gap-1.5">
                  ${exp.techStack.map(t => `
                    <span class="px-2 py-0.5 text-xs font-mono bg-charcoal-950 text-gray-300 rounded border border-white/10">
                      ${t}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}
