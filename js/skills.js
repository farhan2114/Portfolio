// Skills Matrix Component - Dark Technical Edition
import { SKILLS_CATEGORIES } from './data.js';

export class SkillsMatrix {
  constructor() {
    this.container = document.getElementById('skills-container');
    if (!this.container) return;
    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${SKILLS_CATEGORIES.map(cat => `
          <div class="border border-white/10 rounded-2xl bg-charcoal-900/50 p-5 space-y-3 hover:border-cyan-500/30 transition-all">
            <div class="flex items-center justify-between border-b border-white/10 pb-2">
              <h3 class="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">${cat.name}</h3>
              <span class="text-[10px] font-mono text-gray-500">${cat.skills.length} TECH</span>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${cat.skills.map(s => `
                <span class="px-2.5 py-1 text-xs font-mono bg-charcoal-950 text-gray-200 rounded border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-colors">
                  ${s}
                </span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}
