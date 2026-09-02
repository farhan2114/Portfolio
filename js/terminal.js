// Terminal Easter Egg Component - Dark Technical Edition
import { PROFILE, PROJECTS, EXPERIENCE, SKILLS_CATEGORIES } from './data.js';

export class TerminalModal {
  constructor(openResumeCallback) {
    this.modal = document.getElementById('terminal-modal');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.closeBtn = document.getElementById('terminal-close');
    this.triggerBtn = document.getElementById('terminal-trigger');
    this.openResumeCallback = openResumeCallback;

    if (!this.modal || !this.input || !this.output) return;
    this.init();
  }

  init() {
    if (this.triggerBtn) {
      this.triggerBtn.addEventListener('click', () => this.toggle());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    window.addEventListener('keydown', (e) => {
      if ((e.key === '`' || e.key === '~' || (e.ctrlKey && e.key === 'j')) && !e.target.matches('input, textarea')) {
        e.preventDefault();
        this.toggle();
      }
    });

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim().toLowerCase();
        this.executeCommand(cmd);
        this.input.value = '';
      }
    });

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
  }

  toggle() {
    if (this.modal.classList.contains('hidden')) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    this.input.focus();
    if (this.output.children.length === 0) {
      this.printWelcome();
    }
  }

  close() {
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
  }

  printWelcome() {
    this.output.innerHTML = `
      <div class="text-cyan-400">Mohammed Farhan Interactive Shell [v1.0.4]</div>
      <div class="text-gray-400 text-xs">Type <span class="text-yellow-400 font-bold">help</span> to list available commands.</div>
      <div class="my-2 border-b border-white/10"></div>
    `;
  }

  executeCommand(cmd) {
    this.output.innerHTML += `
      <div class="flex items-center space-x-2">
        <span class="text-cyan-400">farhan@portfolio ~ %</span>
        <span class="text-white">${cmd}</span>
      </div>
    `;

    switch (cmd) {
      case 'help':
        this.output.innerHTML += `
          <div class="text-gray-300 text-xs space-y-1 ml-4 my-1">
            <div><span class="text-yellow-400 w-24 inline-block">about</span> Print professional summary</div>
            <div><span class="text-yellow-400 w-24 inline-block">projects</span> List 6 verified engineering projects</div>
            <div><span class="text-yellow-400 w-24 inline-block">skills</span> List technical profile categories</div>
            <div><span class="text-yellow-400 w-24 inline-block">experience</span> Show Hexagon & Ethara.ai history</div>
            <div><span class="text-yellow-400 w-24 inline-block">contact</span> Display email and social links</div>
            <div><span class="text-yellow-400 w-24 inline-block">resume</span> Trigger resume viewer modal</div>
            <div><span class="text-yellow-400 w-24 inline-block">clear</span> Clear terminal buffer</div>
            <div><span class="text-yellow-400 w-24 inline-block">exit</span> Close terminal shell</div>
          </div>
        `;
        break;

      case 'about':
        this.output.innerHTML += `
          <div class="text-gray-300 text-xs ml-4 my-1 leading-relaxed">
            ${PROFILE.name} - ${PROFILE.title}<br/>
            ${PROFILE.bio}
          </div>
        `;
        break;

      case 'projects':
        this.output.innerHTML += `
          <div class="text-xs ml-4 my-1 space-y-1">
            ${PROJECTS.map((p, i) => `
              <div><span class="text-cyan-400">${i+1}. ${p.title}</span> <span class="text-gray-500">(${p.category})</span></div>
            `).join('')}
          </div>
        `;
        break;

      case 'skills':
        this.output.innerHTML += `
          <div class="text-xs ml-4 my-1 space-y-1">
            ${SKILLS_CATEGORIES.map(c => `
              <div><span class="text-emerald-400 font-bold">${c.name}:</span> <span class="text-gray-300">${c.skills.join(', ')}</span></div>
            `).join('')}
          </div>
        `;
        break;

      case 'experience':
        this.output.innerHTML += `
          <div class="text-xs ml-4 my-1 space-y-2">
            ${EXPERIENCE.map(e => `
              <div>
                <span class="text-cyan-400 font-bold">${e.company}</span> - <span class="text-white">${e.role}</span> <span class="text-gray-500">(${e.period})</span>
              </div>
            `).join('')}
          </div>
        `;
        break;

      case 'contact':
        this.output.innerHTML += `
          <div class="text-xs ml-4 my-1 space-y-1">
            <div>Email: <a href="mailto:${PROFILE.socials.email}" class="text-cyan-400 underline">${PROFILE.socials.email}</a></div>
            <div>GitHub: <a href="${PROFILE.socials.github}" target="_blank" class="text-cyan-400 underline">${PROFILE.socials.github}</a></div>
            <div>LinkedIn: <a href="${PROFILE.socials.linkedin}" target="_blank" class="text-cyan-400 underline">${PROFILE.socials.linkedin}</a></div>
          </div>
        `;
        break;

      case 'resume':
        if (this.openResumeCallback) this.openResumeCallback();
        this.output.innerHTML += `<div class="text-green-400 text-xs ml-4">Opening Resume Modal...</div>`;
        this.close();
        break;

      case 'clear':
        this.output.innerHTML = '';
        break;

      case 'exit':
        this.close();
        break;

      default:
        if (cmd !== '') {
          this.output.innerHTML += `<div class="text-red-400 text-xs ml-4">Command not recognized: '${cmd}'. Type 'help' for options.</div>`;
        }
        break;
    }

    this.output.scrollTop = this.output.scrollHeight;
  }
}
