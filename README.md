# Mohammed Farhan — Universal Software Engineering Portfolio

Universal Software Engineering Portfolio for **Mohammed Farhan** built with modular HTML5, ES Modules, CSS Custom Properties, Tailwind CSS, and HTML5 Canvas API.

## 🚀 Live Demo & Deployment
- **Local Dev Server**: `http://localhost:3000/`
- **Deployment Platform**: Vercel / GitHub Pages

## 🛠 Features
- **Kinetic Hero Canvas**: Responsive HTML5 Canvas node network with cursor distance spring mechanics.
- **System Map ("How I Build")**: Interactive SVG topology graph mapping Farhan's core engineering domains.
- **Editorial Project Case Studies**: Interactive system architecture diagrams and expandable case study drawers.
- **Engineering Lab**: 4 live micro-demonstrations (REST API Flow Visualizer, RAG Vector Search Simulator, ML Threat Classifier, WCAG Accessibility Lab).
- **Accessibility & Motion Management**: Persistent Motion Toggle control (`MOTION: ON/OFF`), full WCAG 2.1 AA contrast compliance, keyboard focus rings, and `prefers-reduced-motion` synchronization.
- **Keyboard Shortcuts**: Command Palette (`Cmd+K` / `Ctrl+K`) and Terminal Shell (`~` / `Cmd+J`).

## 📁 Project Structure
```
farhan-portfolio/
├── index.html           # Main HTML5 entry markup
├── server.js            # Node HTTP server for local serving
├── vercel.json          # Vercel deployment routing configuration
├── package.json         # NPM package manifest
├── .gitignore           # Git ignore file
├── css/
│   └── styles.css       # Custom design system & animations
└── js/
    ├── data.js          # Verified profile & project data model
    ├── canvasNetwork.js # Hero interactive canvas node mesh
    ├── systemMap.js     # "How I Build" interactive SVG map
    ├── projects.js      # Editorial project showcase & flow diagrams
    ├── caseStudyModal.js# Accessible case study modal
    ├── engineeringLab.js# 4 live micro-demos
    ├── experience.js    # Interactive career history timeline
    ├── skills.js        # Competency matrix
    ├── publication.js   # ICCET 2026 paper spotlight
    ├── engineeringDna.js# Build -> Test -> Debug sequence
    ├── terminal.js      # CLI Easter egg modal
    ├── commandPalette.js# Cmd+K search modal
    ├── resumeModal.js   # Printable & downloadable resume viewer
    ├── accessibility.js # Motion toggle & reduced-motion manager
    └── app.js           # Main application entry point
```

## 💻 Local Running Instructions
```bash
# Run local Node HTTP server
node server.js
```
Open [http://localhost:3000/](http://localhost:3000/) in your web browser.
