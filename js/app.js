// Main Application Entry Point
import { NetworkCanvas } from './canvasNetwork.js';
import { CustomCursor } from './customCursor.js';
import { Navigation } from './navigation.js';
import { SystemMap } from './systemMap.js';
import { ProjectsSection } from './projects.js';
import { CaseStudyModal } from './caseStudyModal.js';
import { EngineeringLab } from './engineeringLab.js';
import { ExperienceTimeline } from './experience.js';
import { SkillsMatrix } from './skills.js';
import { PublicationSection } from './publication.js';
import { EngineeringDna } from './engineeringDna.js';
import { TerminalModal } from './terminal.js';
import { CommandPalette } from './commandPalette.js';
import { ResumeModal } from './resumeModal.js';
import { AccessibilityManager } from './accessibility.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Accessibility & Motion Manager
  const a11yManager = new AccessibilityManager();

  // 2. Custom Cursor (Desktop)
  const cursor = new CustomCursor();

  // 3. Navigation & Scroll Progress
  const nav = new Navigation();

  // 4. Hero Node Network Canvas
  const networkCanvas = new NetworkCanvas('hero-network-canvas');

  // 5. Case Study & Resume Modals
  const caseStudyModal = new CaseStudyModal();
  const resumeModal = new ResumeModal();

  // 6. System Map (How I Build)
  const systemMap = new SystemMap();

  // 7. Projects Showcase
  const projectsSection = new ProjectsSection((projectId) => {
    caseStudyModal.open(projectId);
  });

  // 8. Engineering Lab Micro-Demos
  const lab = new EngineeringLab();

  // 9. Experience Timeline
  const experienceTimeline = new ExperienceTimeline();

  // 10. Skills Matrix
  const skillsMatrix = new SkillsMatrix();

  // 11. Publication Spotlight
  const publicationSection = new PublicationSection();

  // 12. Engineering DNA Sequence
  const dna = new EngineeringDna();

  // 13. Terminal Easter Egg CLI
  const terminal = new TerminalModal(() => {
    resumeModal.open();
  });

  // 14. Command Palette (Cmd+K)
  const commandPalette = new CommandPalette(
    () => resumeModal.open(),
    (projectId) => caseStudyModal.open(projectId)
  );

  console.log('✓ Mohammed Farhan Universal Engineering Portfolio Initialized Successfully.');
});
