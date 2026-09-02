// Engineering Lab Interactive Micro-Demonstrations - Dark Technical Edition
export class EngineeringLab {
  constructor() {
    this.container = document.getElementById('engineering-lab-container');
    if (!this.container) return;
    this.activeTab = 'api';
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="border border-white/10 rounded-2xl bg-charcoal-900/60 p-4 md:p-6 space-y-6">
        <!-- Lab Header & Tabs -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span class="text-xs font-mono text-cyan-400 tracking-wider">SANDBOX // ENGINEERING LAB</span>
            <h3 class="text-xl md:text-2xl font-bold text-white mt-1">Interactive System Demonstrations</h3>
          </div>

          <!-- Tabs -->
          <div class="flex flex-wrap gap-2">
            <button type="button" data-lab-tab="api" class="lab-tab-btn min-h-[38px] px-3 py-1.5 text-xs font-mono rounded-lg border ${this.activeTab === 'api' ? 'border-cyan-400 text-cyan-300 bg-cyan-950/60 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-white/10 text-gray-300 hover:text-white hover:border-white/20'}">
              1. API FLOW
            </button>
            <button type="button" data-lab-tab="rag" class="lab-tab-btn min-h-[38px] px-3 py-1.5 text-xs font-mono rounded-lg border ${this.activeTab === 'rag' ? 'border-cyan-400 text-cyan-300 bg-cyan-950/60 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-white/10 text-gray-300 hover:text-white hover:border-white/20'}">
              2. RAG PIPELINE
            </button>
            <button type="button" data-lab-tab="ml" class="lab-tab-btn min-h-[38px] px-3 py-1.5 text-xs font-mono rounded-lg border ${this.activeTab === 'ml' ? 'border-cyan-400 text-cyan-300 bg-cyan-950/60 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-white/10 text-gray-300 hover:text-white hover:border-white/20'}">
              3. ML CLASSIFIER
            </button>
            <button type="button" data-lab-tab="a11y" class="lab-tab-btn min-h-[38px] px-3 py-1.5 text-xs font-mono rounded-lg border ${this.activeTab === 'a11y' ? 'border-cyan-400 text-cyan-300 bg-cyan-950/60 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-white/10 text-gray-300 hover:text-white hover:border-white/20'}">
              4. ACCESSIBILITY LAB
            </button>
          </div>
        </div>

        <!-- Active Demo Canvas -->
        <div id="lab-canvas" class="min-h-[300px]">
          ${this.renderActiveTab()}
        </div>
      </div>
    `;

    this.container.querySelectorAll('[data-lab-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.getAttribute('data-lab-tab');
        this.render();
      });
    });

    this.bindDemoEvents();
  }

  renderActiveTab() {
    switch (this.activeTab) {
      case 'api':
        return `
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-gray-300">
              <span>DEMO: REST API & MICROSERVICES ROUTING</span>
              <button type="button" id="run-api-demo" class="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-bold rounded-lg shadow transition-all min-h-[40px]">
                ▶ EXECUTE API REQUEST
              </button>
            </div>

            <!-- Responsive Pipeline Visual Nodes -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-center text-xs font-mono">
              <div id="api-step-1" class="p-3 rounded-xl border border-white/10 bg-charcoal-950 text-gray-300 transition-all">
                <div class="text-[10px] text-cyan-400">STEP 1</div>
                <div class="font-bold text-white">CLIENT</div>
              </div>
              <div id="api-step-2" class="p-3 rounded-xl border border-white/10 bg-charcoal-950 text-gray-300 transition-all">
                <div class="text-[10px] text-cyan-400">STEP 2</div>
                <div class="font-bold text-white">GATEWAY</div>
              </div>
              <div id="api-step-3" class="p-3 rounded-xl border border-white/10 bg-charcoal-950 text-gray-300 transition-all">
                <div class="text-[10px] text-cyan-400">STEP 3</div>
                <div class="font-bold text-white">SERVICE</div>
              </div>
              <div id="api-step-4" class="p-3 rounded-xl border border-white/10 bg-charcoal-950 text-gray-300 transition-all">
                <div class="text-[10px] text-cyan-400">STEP 4</div>
                <div class="font-bold text-white">DATABASE</div>
              </div>
              <div id="api-step-5" class="p-3 rounded-xl border border-white/10 bg-charcoal-950 text-gray-300 transition-all col-span-2 sm:col-span-1">
                <div class="text-[10px] text-cyan-400">STEP 5</div>
                <div class="font-bold text-white">RESPONSE</div>
              </div>
            </div>

            <!-- Console Log Output -->
            <div class="p-4 rounded-xl bg-charcoal-950 border border-white/10 font-mono text-xs text-cyan-300 h-36 overflow-y-auto space-y-1.5" id="api-log-output">
              <span class="text-gray-400">// Press "EXECUTE API REQUEST" to simulate microservices payload routing...</span>
            </div>
          </div>
        `;

      case 'rag':
        return `
          <div class="space-y-4">
            <div class="text-xs font-mono text-gray-300">
              DEMO: DOCUMENT RAG CHUNKING & VECTOR RETRIEVAL
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <label for="rag-query-input" class="block text-xs font-mono text-cyan-400">QUERY DOCUMENT PROMPT</label>
                <input type="text" id="rag-query-input" value="How does the evaluation pipeline handle failure patterns?" class="w-full px-3 py-2 bg-charcoal-950 border border-white/15 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400" />

                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-mono text-gray-300">
                    <span>Chunk Size: <span id="chunk-size-val">512</span> tokens</span>
                    <span>Similarity: <span id="similarity-val">0.89</span></span>
                  </div>
                  <input type="range" id="chunk-slider" min="128" max="1024" step="128" value="512" aria-label="Chunk size slider" class="w-full accent-cyan-400" />
                </div>

                <button type="button" id="run-rag-demo" class="w-full py-2.5 bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-mono font-bold text-xs rounded-lg min-h-[40px]">
                  SEARCH VECTOR STORE & GENERATE
                </button>
              </div>

              <!-- Output Box -->
              <div class="p-4 rounded-xl bg-charcoal-950 border border-white/10 font-mono text-xs space-y-2" id="rag-output-box">
                <div class="text-gray-400">// Vector search context grounding result will appear here...</div>
              </div>
            </div>
          </div>
        `;

      case 'ml':
        return `
          <div class="space-y-4">
            <div class="text-xs font-mono text-gray-300 flex justify-between">
              <span>DEMO: PHISHING DETECTION ML CLASSIFIER</span>
              <span class="text-cyan-400 font-semibold">ICCET 2026 RESEARCH SIMULATOR</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <label for="ml-url-select" class="block text-xs font-mono text-cyan-400">TARGET URL FOR PREDICTION</label>
                <select id="ml-url-select" class="w-full px-3 py-2 bg-charcoal-950 border border-white/15 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400 min-h-[40px]">
                  <option value="safe">https://github.com/mohammedfarhan/portfolio</option>
                  <option value="phishing">http://secure-login-update-bank-verification.com/login.php</option>
                  <option value="suspicious">http://192.168.1.1/account-update/auth</option>
                </select>

                <div class="space-y-2">
                  <label class="flex items-center justify-between text-xs font-mono text-gray-300 min-h-[32px]">
                    <span>IP Address Indicator:</span>
                    <input type="checkbox" id="ml-ip-check" class="accent-cyan-400 w-4 h-4" />
                  </label>
                  <label class="flex items-center justify-between text-xs font-mono text-gray-300 min-h-[32px]">
                    <span>Valid SSL Certificate:</span>
                    <input type="checkbox" id="ml-ssl-check" checked class="accent-cyan-400 w-4 h-4" />
                  </label>
                </div>

                <button type="button" id="run-ml-demo" class="w-full py-2.5 bg-cyan-400 hover:bg-cyan-300 text-charcoal-950 font-mono font-bold text-xs rounded-lg min-h-[40px]">
                  CLASSIFY THREAT SCORE
                </button>
              </div>

              <!-- ML Output Result -->
              <div class="p-4 rounded-xl bg-charcoal-950 border border-white/10 font-mono text-xs flex flex-col justify-center items-center text-center space-y-2 min-h-[160px]" id="ml-result-box">
                <span class="text-gray-400">// Select URL features and press CLASSIFY THREAT SCORE</span>
              </div>
            </div>
          </div>
        `;

      case 'a11y':
        return `
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-2">
              <span class="text-xs font-mono text-cyan-400">DEMO: WCAG ACCESSIBILITY PATTERNS</span>
              <span class="text-[10px] font-mono text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">SELF-INITIATED DEMONSTRATION</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Controls -->
              <div class="space-y-3">
                <label for="a11y-email" class="block text-xs font-mono text-gray-300">TEST ACCESSIBLE FORM VALIDATION:</label>
                <div>
                  <label for="a11y-email" class="block text-xs font-mono text-gray-400 mb-1">Email Address (Required)</label>
                  <input type="text" id="a11y-email" aria-describedby="a11y-error-msg" aria-invalid="true" class="w-full px-3 py-2 bg-charcoal-950 border border-red-500/60 rounded-lg text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-red-400" value="invalid-email-format" />
                  <p id="a11y-error-msg" class="text-xs text-red-400 mt-1 font-mono flex items-center">
                    <span class="mr-1">⚠</span> Error: Please provide a valid email format (e.g. user@domain.com)
                  </p>
                </div>

                <div class="pt-2 flex flex-wrap gap-2">
                  <button type="button" id="announce-aria" class="px-3.5 py-2 bg-charcoal-800 hover:bg-charcoal-700 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-mono min-h-[38px]">
                    TRIGGER ARIA LIVE ANNOUNCEMENT
                  </button>
                </div>
              </div>

              <!-- Screen Reader Output Log -->
              <div class="p-4 rounded-xl bg-charcoal-950 border border-white/10 font-mono text-xs space-y-2">
                <div class="text-xs font-bold text-gray-300 mb-2 border-b border-white/10 pb-1">SIMULATED SCREEN-READER TELEMETRY (NVDA / VoiceOver)</div>
                <div id="aria-log-box" class="text-cyan-300 space-y-1">
                  <div>[Focus]: Email input field selected.</div>
                  <div>[Alert]: "Error: Please provide a valid email format."</div>
                </div>
              </div>
            </div>
          </div>
        `;

      default:
        return '';
    }
  }

  bindDemoEvents() {
    const runApiBtn = document.getElementById('run-api-demo');
    if (runApiBtn) {
      runApiBtn.addEventListener('click', () => this.runApiDemo());
    }

    const runRagBtn = document.getElementById('run-rag-demo');
    if (runRagBtn) {
      const slider = document.getElementById('chunk-slider');
      if (slider) {
        slider.addEventListener('input', (e) => {
          document.getElementById('chunk-size-val').textContent = e.target.value;
          document.getElementById('similarity-val').textContent = (0.7 + (e.target.value / 1024) * 0.25).toFixed(2);
        });
      }
      runRagBtn.addEventListener('click', () => this.runRagDemo());
    }

    const runMlBtn = document.getElementById('run-ml-demo');
    if (runMlBtn) {
      runMlBtn.addEventListener('click', () => this.runMlDemo());
    }

    const announceBtn = document.getElementById('announce-aria');
    if (announceBtn) {
      announceBtn.addEventListener('click', () => {
        const box = document.getElementById('aria-log-box');
        if (box) {
          const timestamp = new Date().toLocaleTimeString();
          box.innerHTML += `<div class="text-emerald-400">[ARIA-LIVE ${timestamp}]: "System status verified. Keyboard navigation focus ring active."</div>`;
        }
      });
    }
  }

  runApiDemo() {
    const steps = [
      { id: 'api-step-1', msg: '-> GET /api/v1/orders/analytics Header: Bearer <JWT_TOKEN>' },
      { id: 'api-step-2', msg: '-> API Gateway: Validating JWT signature & Rate limiting...' },
      { id: 'api-step-3', msg: '-> Flask Microservice: Routing request to analytics engine...' },
      { id: 'api-step-4', msg: '-> PostgreSQL DB: Executing profiled SQL query (3.2ms latency)...' },
      { id: 'api-step-5', msg: '<- HTTP 200 OK: Response payload delivered [JSON 1.4KB]' }
    ];

    const logBox = document.getElementById('api-log-output');
    logBox.innerHTML = '';

    steps.forEach((step, idx) => {
      setTimeout(() => {
        steps.forEach(s => {
          const el = document.getElementById(s.id);
          if (el) el.classList.remove('border-cyan-400', 'bg-cyan-950', 'text-cyan-300');
        });

        const activeEl = document.getElementById(step.id);
        if (activeEl) activeEl.classList.add('border-cyan-400', 'bg-cyan-950', 'text-cyan-300');

        logBox.innerHTML += `<div>${step.msg}</div>`;
        logBox.scrollTop = logBox.scrollHeight;
      }, idx * 500);
    });
  }

  runRagDemo() {
    const query = document.getElementById('rag-query-input').value;
    const chunkSize = document.getElementById('chunk-size-val').textContent;
    const similarity = document.getElementById('similarity-val').textContent;
    const outputBox = document.getElementById('rag-output-box');

    outputBox.innerHTML = `
      <div class="text-cyan-400">[RAG QUERY]: "${query}"</div>
      <div class="text-gray-300 text-[11px]">Chunking document at ${chunkSize} tokens...</div>
      <div class="text-emerald-400 font-mono text-[11px]">Top-1 Vector match found (Cosine Similarity: ${similarity})</div>
      <div class="w-full bg-charcoal-900 rounded-full h-1.5 border border-white/10 my-2">
        <div class="bg-cyan-400 h-1.5 rounded-full" style="width: ${similarity * 100}%"></div>
      </div>
      <div class="p-3 rounded-lg bg-charcoal-900 border border-white/10 text-gray-200 text-xs mt-2">
        <span class="text-cyan-400 font-bold">LLM ANSWER:</span> "Ethara.ai evaluation pipelines execute automated validation workflows across structured datasets, logging model behavior edge cases and failure-pattern profiles."
      </div>
    `;
  }

  runMlDemo() {
    const urlType = document.getElementById('ml-url-select').value;
    const isIp = document.getElementById('ml-ip-check').checked;
    const hasSsl = document.getElementById('ml-ssl-check').checked;
    const resultBox = document.getElementById('ml-result-box');

    let score = 0.12;
    if (urlType === 'phishing') score += 0.72;
    if (urlType === 'suspicious') score += 0.55;
    if (isIp) score += 0.25;
    if (!hasSsl) score += 0.20;

    score = Math.min(score, 0.99);

    const isHigh = score > 0.60;
    const statusColor = isHigh ? 'text-red-400' : 'text-emerald-400';
    const badgeBg = isHigh ? 'bg-red-950 border-red-500/50' : 'bg-emerald-950 border-emerald-500/50';

    resultBox.innerHTML = `
      <div class="text-xs font-mono text-gray-400">ML MODEL THREAT CLASSIFICATION PREDICTION</div>
      <div class="text-3xl font-bold font-mono ${statusColor}">${(score * 100).toFixed(1)}%</div>
      <div class="px-3 py-1 rounded-full border text-xs font-mono ${badgeBg} ${statusColor}">
        ${isHigh ? '⚠ PHISHING / SUSPICIOUS SITE DETECTED' : '✓ LEGITIMATE DOMAIN VERIFIED'}
      </div>
      <div class="w-full bg-charcoal-900 rounded-full h-2 border border-white/10 my-1 overflow-hidden">
        <div class="${isHigh ? 'bg-red-400' : 'bg-emerald-400'} h-2 transition-all duration-500" style="width: ${score * 100}%"></div>
      </div>
      <div class="text-[11px] text-gray-400">Based on ICCET 2026 multi-model ML/DL feature extraction</div>
    `;
  }
}
