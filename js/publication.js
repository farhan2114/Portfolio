// Sophisticated Publication Showcase Component - Dark Technical Edition
import { PUBLICATION } from './data.js';

export class PublicationSection {
  constructor() {
    this.container = document.getElementById('publication-container');
    if (!this.container) return;
    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="border border-cyan-500/30 rounded-2xl bg-gradient-to-br from-charcoal-900/90 to-cyan-950/30 p-6 md:p-8 relative overflow-hidden space-y-4">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 text-xs font-mono bg-cyan-950 text-cyan-300 rounded border border-cyan-500/40">
            PEER-REVIEWED RESEARCH PUBLICATION
          </span>
          <span class="text-xs font-mono text-gray-400">${PUBLICATION.year}</span>
        </div>

        <h3 class="text-xl md:text-2xl font-bold text-white leading-tight">
          "${PUBLICATION.title}"
        </h3>

        <div class="text-xs font-mono text-cyan-400">
          Published at: ${PUBLICATION.conference}
        </div>

        <p class="text-sm text-gray-300 leading-relaxed font-sans">
          ${PUBLICATION.abstract}
        </p>

        <div class="pt-2 border-t border-white/10">
          <h4 class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Key Methodological Contributions:</h4>
          <ul class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${PUBLICATION.highlights.map(h => `
              <li class="p-3 rounded-lg bg-charcoal-950/80 border border-white/5 text-xs text-gray-300 flex items-start space-x-2">
                <span class="text-cyan-400 font-mono">▸</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }
}
