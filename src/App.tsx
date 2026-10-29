import React, { useState, useEffect } from 'react';
import {
  Home,
  Briefcase,
  Layers,
  ArrowRight,
  ArrowLeft,
  Mail,
  X,
  Cpu,
  Sparkles
} from 'lucide-react';

import GradientASCII from './components/GradientASCII';
import TechText from './components/TechText';
import { DEFAULT_ITEMS, CarouselItem } from './components/CircularCarousel';
import ThreeCanvas from './components/ThreeCanvas';
import InfiniteMenu, { InfiniteMenuItem } from './components/InfiniteMenu';
import Dock, { DockItemData } from './components/Dock';
import { TechStackBento } from './components/TechStackBento';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactHub } from './components/ContactHub';
import { ProjectsWheelShowcase } from './components/ProjectsWheelShowcase';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [projectViewMode, setProjectViewMode] = useState<'wheel' | 'sphere'>('wheel');
  const [bgMode] = useState<'hybrid' | 'three' | 'ascii'>('hybrid');
  const [activeProjectModal, setActiveProjectModal] = useState<CarouselItem | null>(null);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Map all production projects directly to InfiniteMenu items
  const infiniteMenuItems: InfiniteMenuItem[] = DEFAULT_ITEMS.map(item => ({
    image: item.src,
    title: item.title,
    description: item.metrics || item.subtitle || item.description,
    link: '#',
    rawItem: item
  }));

  // React Bits macOS Dock configuration
  const dockItems: DockItemData[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      active: currentPage === 'home',
      onClick: () => {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      icon: <Layers className="w-5 h-5" />,
      label: 'Projects',
      active: currentPage === 'projects',
      badge: 6,
      onClick: () => {
        setCurrentPage('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    { separator: true },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: 'Experience',
      onClick: () => {
        if (currentPage !== 'home') {
          setCurrentPage('home');
          setTimeout(() => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      label: 'Skills',
      onClick: () => {
        if (currentPage !== 'home') {
          setCurrentPage('home');
          setTimeout(() => {
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Contact',
      onClick: () => {
        if (currentPage !== 'home') {
          setCurrentPage('home');
          setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#090d16] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* Background Ambience Layers */}
      {(bgMode === 'three' || bgMode === 'hybrid') && (
        <ThreeCanvas opacity={bgMode === 'hybrid' ? 0.12 : 0.22} />
      )}
      {(bgMode === 'ascii' || bgMode === 'hybrid') && (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
          <GradientASCII
            colors={['#1e3fd8', '#2563eb', '#60a5fa', '#38bdf8']}
            shape="horizon"
            characters=" 01+=#@*"
            cellSize={22}
            density={0.6}
            glow={0.2}
            speed={0.7}
            mouseInteraction={true}
          />
        </div>
      )}

      {/* Floating macOS-Style Dock Navigation on Right Side */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <Dock
          items={dockItems}
          position="right"
          baseItemSize={48}
          magnification={68}
          panelHeight={64}
          distance={130}
          theme="dark"
          bounce={true}
          tiles={true}
          showLabels={true}
          showIndicators={true}
          showBadges={true}
          badgeColor="#3b82f6"
          accentColor="#3b82f6"
          className="pointer-events-auto"
        />
      </div>

      {/* ========================================================================= */}
      {/* SEPARATE VIEW 1: INTERACTIVE PROJECTS PAGE (POWERED BY OPTIONWHEEL)        */}
      {/* ========================================================================= */}
      {currentPage === 'projects' ? (
        projectViewMode === 'wheel' ? (
          <ProjectsWheelShowcase
            projects={DEFAULT_ITEMS}
            onSelectProject={(project) => setActiveProjectModal(project)}
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSwitchToSphere={() => setProjectViewMode('sphere')}
          />
        ) : (
          <main className="fixed inset-0 w-screen h-screen z-10 bg-[#090d16] overflow-hidden">
            <div className="absolute top-5 left-6 z-30 flex items-center gap-3">
              <button
                onClick={() => setProjectViewMode('wheel')}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold backdrop-blur-md shadow-lg flex items-center gap-2 hover:bg-slate-800 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-blue-400" />
                <span>OptionWheel View</span>
              </button>
            </div>
            <InfiniteMenu
              items={infiniteMenuItems}
              count={160}
              tileSize={0.65}
              roundness={0.25}
              zoom={1.65}
              pullBack={1.0}
              stretch={0.6}
              inertia={0.65}
              autoplay={3.5}
              grayscale={true}
              dim={0.45}
              intro={true}
              showInfo={true}
              theme="dark"
              accentColor="#3b82f6"
              onItemClick={(item) => {
                if (item.rawItem) {
                  setActiveProjectModal(item.rawItem);
                }
              }}
              className="w-full h-full"
            />
          </main>
        )
      ) : (
        /* ========================================================================= */
        /* SEPARATE VIEW 2: HOME PORTFOLIO PAGE                                      */
        /* ========================================================================= */
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16">
            <div className="max-w-5xl mx-auto text-center w-full">
              {/* Clean Unboxed Metadata */}
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mb-6">
                <span>Available for Full-Stack Roles</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Remote Worldwide</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Python & Backend Architecture</span>
              </div>

              {/* Interactive TechText Kinetic Typography Canvas */}
              <div className="w-full my-3 flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl h-28 sm:h-36 md:h-44 relative flex items-center justify-center">
                  <TechText
                    text="MUAZZAM MIRZA"
                    fontWeight={800}
                    fontSize={125}
                    letterSpacing={-0.03}
                    reveal="letter"
                    dashLength={4}
                    dashGap={2}
                    specks={14}
                    intro="assemble"
                    introDuration={1.6}
                    color="#f8fafc"
                    accentColor="#3b82f6"
                    draggable={true}
                    clickKick={true}
                    guides={false}
                  />
                </div>
              </div>

              {/* Grounded Human Engineering Summary */}
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mt-6 mb-8 leading-relaxed font-normal text-balance">
                Full-Stack Software Engineer and Python Automation Specialist. I build resilient backend architectures, automated healthcare billing workflows, and high-concurrency real-time systems.
              </p>

              {/* Action Area: Jump to Projects Page & Contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={() => {
                    setCurrentPage('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Explore Projects (Interactive 3D)
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  Discuss Opportunities
                </a>
              </div>

              {/* Concrete Production Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400 font-mono tabular-nums">2+</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide font-medium">Years Experience</div>
                  <div className="text-xs text-slate-500 mt-0.5">Production deployments</div>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-slate-100 font-mono tabular-nums">10,000+</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide font-medium">Concurrent Sockets</div>
                  <div className="text-xs text-slate-500 mt-0.5">Asyncio benchmarked</div>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-slate-100 font-mono tabular-nums">500,000+</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide font-medium">Records Extracted</div>
                  <div className="text-xs text-slate-500 mt-0.5">Structured data pipelines</div>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-400 font-mono tabular-nums">78%</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide font-medium">Error Reduction</div>
                  <div className="text-xs text-slate-500 mt-0.5">Automated claims audits</div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Experience Timeline */}
          <ExperienceTimeline />

          {/* Technical Expertise / Skills Bento Grid */}
          <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative border-t border-slate-800/60">
            <div className="text-center mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 font-mono">
                Tooling & System Architectures
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Technical Stack
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
                Core languages, frameworks, and storage systems used daily in production. Click any technology to inspect verified architecture patterns and metrics.
              </p>
            </div>

            <TechStackBento onSelectProject={() => setCurrentPage('projects')} />
          </section>

          {/* Direct Executive Contact Hub */}
          <ContactHub />

          {/* Footer (Only rendered on Home page) */}
          <footer className="py-10 border-t border-slate-800 text-center text-xs text-slate-500 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>© 2026 Muazzam Mirza · Full-Stack Software Engineer & Python Automation Specialist</p>
              <div className="flex items-center gap-4 text-slate-400">
                <a href="mailto:muazzammirza4477@gmail.com" className="hover:text-white transition">
                  muazzammirza4477@gmail.com
                </a>
                <span>·</span>
                <button
                  onClick={() => {
                    setCurrentPage('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition cursor-pointer"
                >
                  Projects
                </button>
                <span>·</span>
                <button
                  onClick={() => {
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition cursor-pointer"
                >
                  Technical Stack
                </button>
              </div>
            </div>
          </footer>
        </main>
      )}

      {/* Project Detail Lightbox Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-44 sm:h-52 w-full rounded-xl overflow-hidden mb-6 relative">
              <img
                src={activeProjectModal.src}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  Architecture Overview
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeProjectModal.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-400 mb-1">Implementation</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              {activeProjectModal.metrics && (
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-xs font-semibold uppercase text-slate-400 block mb-0.5">Production Metric</span>
                  <span className="text-sm text-blue-400 font-mono">{activeProjectModal.metrics}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Technologies</h4>
                <div className="text-xs text-slate-300 font-mono flex items-center gap-2 flex-wrap">
                  {activeProjectModal.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setActiveProjectModal(null);
                    setCurrentPage('home');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="flex-1 py-2.5 text-center text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer"
                >
                  Discuss This Project
                </button>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2.5 text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
