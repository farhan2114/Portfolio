// Signature "HOW I BUILD" Interactive Topology Map - Dark Technical Edition
export class SystemMap {
  constructor() {
    this.container = document.getElementById('system-map-container');
    this.detailPanel = document.getElementById('system-map-detail');
    if (!this.container || !this.detailPanel) return;

    this.activeDomain = 'FRONTEND';
    this.domainData = {
      FRONTEND: {
        title: "Frontend Engineering & UI Systems",
        tagline: "Component-driven architectures, responsive state, accessible UI",
        tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "AG Grid", "MUI Data Grid", "React Flow", "React Query", "Material UI"],
        philosophy: "Building high-density data views, interactive dashboards, and predictable state synchronization layers with WCAG accessibility principles.",
        metrics: ["Component Reusability", "Focus Ring Navigation", "Low Latency Rendering"]
      },
      BACKEND: {
        title: "Backend Infrastructure & Microservices",
        tagline: "Decoupled APIs, multi-tier routing, query profiling",
        tech: ["Python", "Flask", "Node.js", "Express.js", "Spring Boot", ".NET Core", "REST APIs", "Microservices", "JWT"],
        philosophy: "Architecting resilient RESTful microservices with strict input validation middleware, structured logging, and optimized payload delivery.",
        metrics: ["Decoupled Fault Domains", "Query Profiling", "Strict Validation"]
      },
      "AI / ML": {
        title: "AI / ML & Evaluation Pipelines",
        tagline: "RAG architectures, LLM evaluation, predictive classifiers",
        tech: ["PyTorch", "LLMs", "RAG", "Embeddings", "Vector Search", "Prompt Engineering", "NLP", "Scikit-Learn"],
        philosophy: "Formulating systematic evaluation workflows, vector search pipelines, and failure-pattern diagnostics for complex datasets.",
        metrics: ["Evaluation Documentation", "Failure-Pattern Logs", "Vector Similarity"]
      },
      CLOUD: {
        title: "Cloud Infrastructure & Containerization",
        tagline: "GCP, RHEL, Docker, CI/CD automated deployments",
        tech: ["Google Cloud (GCE)", "Docker", "Kubernetes", "Red Hat Enterprise Linux", "CI/CD", "Git", "GitHub", "Bitbucket"],
        philosophy: "Deploying enterprise containerized environments backed by GCP Associate Cloud Engineer practices and RHEL Unix administration standards.",
        metrics: ["Immutable Containers", "RHCSA Compliance", "Cloud Telemetry"]
      },
      DATA: {
        title: "Data Processing & Relational Engineering",
        tagline: "Data flow analysis, SQL query profiling, RDBMS & NoSQL",
        tech: ["PostgreSQL", "SQL", "MySQL", "MongoDB", "Data Validation", "Python Processing", "Query Optimization"],
        philosophy: "Structuring relational schemas, tuning SQL query indexes, and executing static/dynamic log data analysis for automated pipelines.",
        metrics: ["Data Quality Checks", "Index Tuning", "Schema Validation"]
      },
      TESTING: {
        title: "Testing, Reliability & System Debugging",
        tagline: "Functional testing, test scripts, bug tracking, root-cause analysis",
        tech: ["Functional Testing", "Test Scripts", "Regression Suites", "Software Validation", "Log Analysis", "Bug Tracking", "Root Cause Analysis"],
        philosophy: "Executing empirical log inspection, automated regression workflows, and technical issue investigation for continuous software reliability.",
        metrics: ["Defect Analysis", "Log Verification", "Regression Coverage"]
      }
    };

    this.init();
  }

  init() {
    this.renderNodes();
    this.updateDetail('FRONTEND');
    window.addEventListener('resize', () => this.renderNodes());
  }

  renderNodes() {
    const isMobile = window.innerWidth < 768;

    const nodes = [
      { id: 'FRONTEND', label: 'FRONTEND', color: '#00F0FF', x: isMobile ? 18 : 20, y: isMobile ? 20 : 20 },
      { id: 'BACKEND', label: 'BACKEND', color: '#10B981', x: isMobile ? 82 : 80, y: isMobile ? 20 : 20 },
      { id: 'AI / ML', label: 'AI / ML', color: '#8B5CF6', x: isMobile ? 85 : 85, y: isMobile ? 78 : 75 },
      { id: 'CLOUD', label: 'CLOUD', color: '#F59E0B', x: isMobile ? 50 : 50, y: isMobile ? 88 : 88 },
      { id: 'DATA', label: 'DATA', color: '#3B82F6', x: isMobile ? 15 : 15, y: isMobile ? 78 : 75 },
      { id: 'TESTING', label: 'TESTING', color: '#EC4899', x: isMobile ? 50 : 50, y: isMobile ? 12 : 12 }
    ];

    let html = `
      <div class="relative w-full h-[360px] md:h-[440px] border border-white/10 rounded-2xl bg-charcoal-900/80 overflow-hidden flex items-center justify-center p-4">
        <!-- SVG Connections -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.3"/>
            </linearGradient>
          </defs>
          ${nodes.map(n => `
            <line x1="50" y1="50" x2="${n.x}" y2="${n.y}" stroke="url(#lineGrad)" stroke-width="0.6" stroke-dasharray="2 2" class="node-connection-line" data-node="${n.id}"/>
          `).join('')}
        </svg>

        <!-- Central Hub Node -->
        <div class="absolute z-10 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-cyan-400/80 bg-charcoal-950 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,240,255,0.3)] animate-pulse-slow">
          <span class="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">CORE</span>
          <span class="text-xs md:text-sm font-bold text-white tracking-wider">FARHAN</span>
          <span class="text-[9px] font-mono text-gray-400">ENGINEER</span>
        </div>

        <!-- Orbit Nodes -->
        ${nodes.map(n => `
          <button 
            type="button"
            data-domain="${n.id}"
            class="system-node absolute z-20 transform -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-xl border border-white/15 bg-charcoal-950/95 text-[11px] md:text-xs font-mono font-semibold transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[36px] flex items-center justify-center ${n.id === this.activeDomain ? 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'text-gray-300 hover:text-white'}"
            style="left: ${n.x}%; top: ${n.y}%;"
          >
            <span class="inline-block w-2 h-2 rounded-full mr-1.5" style="background-color: ${n.color};"></span>
            ${n.label}
          </button>
        `).join('')}
      </div>
    `;

    this.container.innerHTML = html;

    this.container.querySelectorAll('[data-domain]').forEach(btn => {
      btn.addEventListener('click', () => {
        const domain = btn.getAttribute('data-domain');
        this.selectDomain(domain);
      });

      btn.addEventListener('mouseenter', () => {
        const domain = btn.getAttribute('data-domain');
        this.highlightConnection(domain);
      });
    });
  }

  selectDomain(domainKey) {
    this.activeDomain = domainKey;
    
    this.container.querySelectorAll('[data-domain]').forEach(btn => {
      const isSelected = btn.getAttribute('data-domain') === domainKey;
      if (isSelected) {
        btn.classList.add('border-cyan-400', 'text-cyan-300', 'shadow-[0_0_15px_rgba(0,240,255,0.4)]');
        btn.classList.remove('text-gray-300');
      } else {
        btn.classList.remove('border-cyan-400', 'text-cyan-300', 'shadow-[0_0_15px_rgba(0,240,255,0.4)]');
        btn.classList.add('text-gray-300');
      }
    });

    this.updateDetail(domainKey);
  }

  highlightConnection(domainKey) {
    this.container.querySelectorAll('.node-connection-line').forEach(line => {
      if (line.getAttribute('data-node') === domainKey) {
        line.setAttribute('stroke', '#00F0FF');
        line.setAttribute('stroke-width', '1.2');
      } else {
        line.setAttribute('stroke', 'url(#lineGrad)');
        line.setAttribute('stroke-width', '0.6');
      }
    });
  }

  updateDetail(domainKey) {
    const data = this.domainData[domainKey];
    if (!data) return;

    this.detailPanel.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <span class="text-xs font-mono text-cyan-400 tracking-wider">DOMAIN // ${domainKey}</span>
            <h3 class="text-lg md:text-xl font-bold text-white mt-0.5">${data.title}</h3>
          </div>
          <span class="px-2.5 py-1 text-[10px] font-mono rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">VERIFIED</span>
        </div>

        <p class="text-sm text-gray-300 leading-relaxed font-sans">${data.philosophy}</p>

        <div>
          <h4 class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Technologies & Tooling</h4>
          <div class="flex flex-wrap gap-1.5">
            ${data.tech.map(t => `
              <span class="px-2.5 py-1 text-xs font-mono bg-charcoal-950 text-gray-200 rounded border border-white/10 hover:border-cyan-500/50 transition-colors">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Engineering Focus Areas</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            ${data.metrics.map(m => `
              <div class="p-2 rounded bg-charcoal-950/80 border border-white/10 text-center">
                <span class="text-[11px] font-mono text-cyan-400 block">${m}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}
