import React, { useState } from 'react';
import OptionWheel from './OptionWheel';
import { CarouselItem } from './CircularCarousel';
import { ArrowLeft, ArrowUpRight, Sparkles, Layers, ShieldCheck, Zap, Globe } from 'lucide-react';

interface ProjectsWheelShowcaseProps {
  projects: CarouselItem[];
  onSelectProject: (project: CarouselItem) => void;
  onBackToHome: () => void;
  onSwitchToSphere?: () => void;
}

export const ProjectsWheelShowcase: React.FC<ProjectsWheelShowcaseProps> = ({
  projects,
  onSelectProject,
  onBackToHome,
  onSwitchToSphere
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProject = projects[selectedIndex] || projects[0];

  // Clean, punchy labels for the OptionWheel
  const wheelLabels: string[] = projects.map((p, idx) => {
    const title = p.title || `Project ${idx + 1}`;
    if (title.includes('WebSocket')) return 'WebSocket Concurrency';
    if (title.includes('Healthcare')) return 'Healthcare RCM Engine';
    if (title.includes('Claims')) return 'Claims Audit Crawler';
    if (title.includes('Distributed')) return 'Task Queue & Cache';
    if (title.includes('Containerized')) return 'Cloud VPS Microservices';
    if (title.includes('Portfolio')) return 'Interactive 3D Portfolio';
    return title;
  });

  return (
    <div className="fixed inset-0 w-screen h-screen z-10 bg-[#060a14] overflow-hidden flex flex-col select-none">
      {/* Ambient background glow mapped to selected project */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToHome}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-2 text-xs font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Overview</span>
          </button>
          <div className="h-4 w-px bg-slate-800" />
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
              Interactive Case Studies
            </div>
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Production Architectures
            </h1>
          </div>
        </div>

        {/* View Switcher / Hint */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Scroll or drag the wheel to explore</span>
          </div>

          {onSwitchToSphere && (
            <button
              onClick={onSwitchToSphere}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>3D Sphere View</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Split Body: Left OptionWheel, Right Active Project Showcase */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left / Middle Column: The OptionWheel (Takes 5 cols on lg) */}
        <div className="lg:col-span-5 h-[36vh] lg:h-full relative flex items-center border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-slate-950/40">
          <div className="w-full h-full">
            <OptionWheel
              items={wheelLabels}
              defaultSelected={0}
              onChange={(index) => setSelectedIndex(index)}
              side="left"
              fontSize={1.75}
              spacing={1.65}
              curve={1.2}
              tilt={7}
              blur={1.6}
              fade={0.3}
              minOpacity={0.08}
              smoothing={200}
              inset={40}
              loop={true}
              draggable={true}
              textColor="#64748b"
              activeColor="#38bdf8"
              className="w-full h-full"
            />
          </div>

          {/* Vertical scroll instruction badge on desktop */}
          <div className="hidden lg:flex absolute left-4 bottom-6 text-[10px] font-mono text-slate-600 uppercase tracking-wider items-center gap-2 pointer-events-none">
            <span>↑↓ Keys / Wheel / Drag</span>
          </div>
        </div>

        {/* Right Column: Active Project Detailed Card (Takes 7 cols on lg) */}
        <div className="lg:col-span-7 h-full overflow-y-auto p-6 sm:p-10 flex items-center justify-center">
          <div className="max-w-2xl w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-in fade-in">
            {/* Visual Screenshot Container */}
            <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 relative border border-slate-800 bg-slate-950">
              <img
                src={activeProject.src}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Bottom Image Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Verified Production Deliverable</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeProject.title}
                  </h2>
                </div>

                {activeProject.metrics && (
                  <div className="shrink-0 bg-blue-600/20 border border-blue-500/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-right">
                    <div className="text-xs sm:text-sm font-mono font-bold text-blue-300 tabular-nums">
                      {activeProject.metrics}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description & Technical Architecture */}
            <div className="space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {activeProject.description}
              </p>

              {/* Technology Tags */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                  Integrated Technologies & Libraries
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  {activeProject.tags?.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs text-slate-400 font-mono">
                  Project {selectedIndex + 1} of {projects.length}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(activeProject)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Inspect Architecture & Metrics</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
