// Command Palette (Cmd+K / Ctrl+K) Component - Dark Technical Edition
import { PROJECTS } from './data.js';

export class CommandPalette {
  constructor(openResumeCallback, openCaseStudyCallback) {
    this.modal = document.getElementById('command-palette-modal');
    this.input = document.getElementById('cmd-input');
    this.resultsContainer = document.getElementById('cmd-results');
    this.closeBtn = document.getElementById('cmd-close');
    this.openResumeCallback = openResumeCallback;
    this.openCaseStudyCallback = openCaseStudyCallback;
    this.selectedIndex = 0;

    if (!this.modal || !this.input || !this.resultsContainer) return;
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      }
    });

    document.querySelectorAll('[data-open-cmd]').forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    this.input.addEventListener('input', () => {
      this.selectedIndex = 0;
      this.renderResults(this.input.value.trim());
    });

    this.input.addEventListener('keydown', (e) => {
      const items = this.resultsContainer.querySelectorAll('[data-cmd-item]');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.selectedIndex = (this.selectedIndex + 1) % items.length;
        this.updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.selectedIndex = (this.selectedIndex - 1 + items.length) % items.length;
        this.updateSelection(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = items[this.selectedIndex];
        if (selected) selected.click();
      } else if (e.key === 'Escape') {
        this.close();
      }
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
    this.input.value = '';
    this.selectedIndex = 0;
    this.renderResults('');
    this.input.focus();
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  getActions() {
    const actions = [
      { category: 'NAVIGATION', label: 'Go to Work / Projects', action: () => this.scrollTo('#projects') },
      { category: 'NAVIGATION', label: 'Go to System Map (How I Build)', action: () => this.scrollTo('#system-map') },
      { category: 'NAVIGATION', label: 'Go to Engineering Lab', action: () => this.scrollTo('#lab') },
      { category: 'NAVIGATION', label: 'Go to Experience Timeline', action: () => this.scrollTo('#experience') },
      { category: 'NAVIGATION', label: 'Go to Skills Matrix', action: () => this.scrollTo('#skills') },
      { category: 'NAVIGATION', label: 'Go to Research Publication', action: () => this.scrollTo('#publication') },
      { category: 'NAVIGATION', label: 'Go to Engineering DNA', action: () => this.scrollTo('#dna') },
      { category: 'NAVIGATION', label: 'Go to Contact', action: () => this.scrollTo('#contact') },
      { category: 'RESUME', label: 'View / Print Resume', action: () => { if (this.openResumeCallback) this.openResumeCallback(); } },
      { category: 'EASTER EGG', label: 'Open Terminal Shell (~)', action: () => { const t = document.getElementById('terminal-trigger'); if (t) t.click(); } }
    ];

    PROJECTS.forEach(p => {
      actions.push({
        category: 'PROJECT',
        label: `Case Study: ${p.title}`,
        action: () => {
          if (this.openCaseStudyCallback) this.openCaseStudyCallback(p.id);
        }
      });
    });

    return actions;
  }

  renderResults(query) {
    const allActions = this.getActions();
    const filtered = query ? allActions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())) : allActions;

    if (filtered.length === 0) {
      this.resultsContainer.innerHTML = `<div class="p-4 text-xs font-mono text-gray-400 text-center">No matching commands found.</div>`;
      return;
    }

    this.resultsContainer.innerHTML = filtered.map((act, idx) => `
      <button 
        type="button" 
        data-cmd-item="${idx}"
        class="w-full text-left px-4 py-3 min-h-[44px] flex items-center justify-between text-xs font-mono transition-colors ${idx === this.selectedIndex ? 'bg-cyan-950/90 text-cyan-300 border-l-2 border-cyan-400 font-semibold' : 'text-gray-300 hover:bg-charcoal-800'}"
      >
        <span>${act.label}</span>
        <span class="text-[10px] text-gray-400 px-2 py-0.5 rounded bg-charcoal-950 border border-white/10">${act.category}</span>
      </button>
    `).join('');

    const items = this.resultsContainer.querySelectorAll('[data-cmd-item]');
    items.forEach((item, idx) => {
      item.addEventListener('click', () => {
        this.close();
        filtered[idx].action();
      });
    });
  }

  updateSelection(items) {
    items.forEach((item, idx) => {
      if (idx === this.selectedIndex) {
        item.classList.add('bg-cyan-950/90', 'text-cyan-300', 'border-l-2', 'border-cyan-400', 'font-semibold');
        item.classList.remove('text-gray-300');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('bg-cyan-950/90', 'text-cyan-300', 'border-l-2', 'border-cyan-400', 'font-semibold');
        item.classList.add('text-gray-300');
      }
    });
  }

  scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
