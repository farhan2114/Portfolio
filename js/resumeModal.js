// Printable & Downloadable Resume Viewer Modal Component - Dark Technical Edition
import { PROFILE, EXPERIENCE, EDUCATION, CERTIFICATIONS, PROJECTS, SKILLS_CATEGORIES, PUBLICATION } from './data.js';

export class ResumeModal {
  constructor() {
    this.modal = document.getElementById('resume-modal');
    this.modalContent = document.getElementById('resume-modal-content');
    this.closeBtn = document.getElementById('resume-close');
    this.printBtn = document.getElementById('resume-print');
    this.triggerBtns = document.querySelectorAll('[data-open-resume]');

    if (!this.modal || !this.modalContent) return;
    this.init();
  }

  init() {
    this.triggerBtns.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.printBtn) {
      this.printBtn.addEventListener('click', () => window.print());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open() {
    this.renderResume();
    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  renderResume() {
    this.modalContent.innerHTML = `
      <div class="printable-resume space-y-6 text-gray-200 font-sans p-6 md:p-8 bg-charcoal-950 border border-white/10 rounded-xl">
        <!-- Header -->
        <div class="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-bold text-white tracking-wider">${PROFILE.name}</h1>
            <p class="text-sm font-mono text-cyan-400 mt-0.5">${PROFILE.title}</p>
          </div>
          <div class="text-xs font-mono text-gray-400 space-y-1">
            <div>Email: ${PROFILE.socials.email}</div>
            <div>GitHub: ${PROFILE.socials.github}</div>
            <div>LinkedIn: ${PROFILE.socials.linkedin}</div>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">// Professional Summary</h2>
          <p class="text-xs text-gray-300 leading-relaxed">${PROFILE.bio}</p>
        </div>

        <!-- Experience -->
        <div>
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">// Technical Experience</h2>
          <div class="space-y-4">
            ${EXPERIENCE.map(exp => `
              <div class="border-l-2 border-cyan-400/60 pl-3 space-y-1">
                <div class="flex justify-between items-baseline">
                  <span class="text-sm font-bold text-white">${exp.company} — <span class="font-normal text-cyan-300">${exp.role}</span></span>
                  <span class="text-[11px] font-mono text-gray-400">${exp.period}</span>
                </div>
                <ul class="list-disc list-inside text-xs text-gray-300 space-y-1">
                  ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Education -->
        <div>
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Education</h2>
          <div class="text-xs text-gray-300">
            <span class="font-bold text-white">${EDUCATION.degree}</span>
            <div class="text-gray-400 font-mono mt-0.5">Specializations: ${EDUCATION.specializations.join(' • ')}</div>
          </div>
        </div>

        <!-- Certifications -->
        <div>
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Certifications</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            ${CERTIFICATIONS.map(c => `
              <li class="p-2.5 rounded bg-charcoal-900 border border-white/5">
                <div class="font-bold text-white">${c.name}</div>
                <div class="text-[11px] text-gray-400">${c.issuer}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Publication -->
        <div>
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">// Publication</h2>
          <div class="text-xs text-gray-300">
            <div class="font-bold text-white">"${PUBLICATION.title}"</div>
            <div class="text-cyan-400 font-mono">${PUBLICATION.conference} (${PUBLICATION.year})</div>
          </div>
        </div>

        <!-- Key Skills Summary -->
        <div>
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">// Technical Profile</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-[11px] font-mono">
            ${SKILLS_CATEGORIES.map(cat => `
              <div>
                <span class="text-gray-400 font-bold block">${cat.name}:</span>
                <span class="text-gray-300">${cat.skills.slice(0, 5).join(', ')}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}
