import React from 'react';
import { Building2, Briefcase, Calendar, MapPin, TrendingUp, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  parentCompany?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  highlightMetric: string;
  highlightLabel: string;
  bullets: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'naseem-rcm',
    role: 'Full-Stack Software Engineer & Python Developer',
    company: 'Naseem Medical Billing and Collection Service',
    parentCompany: 'Omega RCM Solutions, USA',
    location: 'Remote / US Healthcare Practice',
    period: 'March 2024 – Present',
    isCurrent: true,
    highlightMetric: '60% Latency Cut',
    highlightLabel: 'Report Generation & Query Optimization',
    bullets: [
      'Designed and engineered backend systems, REST endpoints, and automated data pipelines supporting medical billing and collection operations for US healthcare providers.',
      'Optimized database schemas, indexing strategies, and complex SQL queries across PostgreSQL and MySQL environments, cutting report generation latency by 60%.',
      'Developed internal administrative tools and reporting modules using Django and Flask to automate claims auditing, payment tracking, and electronic remittance reconciliation.',
      'Enforced strict HIPAA data sanitization protocols and audit trails across all ETL scripts and transactional database interactions.'
    ],
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'ETL Automation', 'REST APIs', 'HIPAA RCM']
  },
  {
    id: 'independent-practice',
    role: 'Full-Stack Software Engineer & Automation Developer',
    company: 'Independent Engineering Practice',
    parentCompany: 'Contract & Client Engagements',
    location: 'Remote Worldwide',
    period: 'September 2025 – Present',
    isCurrent: true,
    highlightMetric: '500,000+ Records',
    highlightLabel: 'Systematic Directory & Claims Extraction',
    bullets: [
      'Engineered custom end-to-end full-stack web platforms and administration tools using FastAPI, Flask, and React for enterprise clients.',
      'Constructed resilient web scraping engines with Selenium WebDriver and Pandas to systematically parse, deduplicate, and validate directory datasets into structured database tables.',
      'Managed containerized deployments using Docker and Linux VPS instances, setting up automated cron tasks and reverse proxies via Nginx.',
      'Implemented automated rate-limiting, IP rotation, and retry policies ensuring zero IP bans across large-scale scraping jobs.'
    ],
    skills: ['Python', 'Selenium', 'Pandas', 'FastAPI', 'Docker', 'Linux VPS', 'Nginx', 'React']
  }
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative border-t border-slate-800/60">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 font-mono">
          Career Record
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
          Production engineering contributions delivering mission-critical healthcare billing automation, high-speed scrapers, and scalable backend infrastructure.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.5)]">
              {exp.isCurrent && (
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full m-auto mt-[3px]" />
              )}
            </div>

            {/* Experience Card */}
            <div className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl">
              {/* Header: Role, Company & Dates */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wide">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                        Active Role
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm text-slate-300 mt-1.5 flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-white flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      {exp.company}
                    </span>
                    {exp.parentCompany && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400">{exp.parentCompany}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Highlight Impact Callout */}
                <div className="lg:text-right shrink-0 bg-slate-950/80 border border-slate-800 p-3 sm:p-4 rounded-xl">
                  <div className="text-lg sm:text-xl font-bold font-mono text-blue-400 tabular-nums flex items-center lg:justify-end gap-1.5">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span>{exp.highlightMetric}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {exp.highlightLabel}
                  </div>
                </div>
              </div>

              {/* Natural Prose Accomplishment Bullets */}
              <ul className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Unboxed Technology Footprint */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-2 flex-wrap text-xs font-mono text-slate-400">
                <span className="text-slate-500 uppercase tracking-wider">Tech Stack:</span>
                {exp.skills.map((skill, idx) => (
                  <React.Fragment key={skill}>
                    <span className="text-slate-300 hover:text-white transition-colors">{skill}</span>
                    {idx < exp.skills.length - 1 && (
                      <span aria-hidden="true" className="text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
