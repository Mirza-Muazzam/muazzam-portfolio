import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Clock, Globe2, ArrowUpRight, Github, Linkedin, ShieldCheck } from 'lucide-react';

export const ContactHub: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'muazzammirza4477@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto relative border-t border-slate-800/60">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 font-mono">
          Initiate Contact
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-lg mx-auto leading-relaxed">
          Discussing full-stack software engineer roles, automation initiatives, and backend infrastructure projects.
        </p>
      </div>

      {/* Main Direct Communication Console */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
        {/* Availability Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/90">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wide">
                Available for Opportunities
              </div>
              <div className="text-sm font-medium text-white">
                Full-Time Engineering Roles & High-Impact Contracts
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Replies within 24h</span>
          </div>
        </div>

        {/* Primary Action Card: Direct Email */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950 border border-blue-900/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Direct Email Address
              </div>
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-mono font-bold text-white hover:text-blue-400 transition-colors break-all"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Address Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}?subject=Software%20Engineer%20Opportunity%20-%20Muazzam%20Mirza`}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 transition cursor-pointer"
            >
              <span>Compose Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Work Logistics & Coordinates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Timezone & Availability</span>
            </div>
            <div className="text-sm font-semibold text-white">
              UTC+5 (Pakistan Standard Time)
            </div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Configured for daily collaboration with US Eastern (EST) and Pacific (PST) distributed teams.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Engagement Scope</span>
            </div>
            <div className="text-sm font-semibold text-white">
              Full-Stack & Python Architecture
            </div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              W2 / 1099 contracts, full-time permanent engineering roles, or consulting sprints.
            </div>
          </div>
        </div>

        {/* Developer Footprint & Social Links */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            Verified Profiles & Repositories
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/muazzammirza4477"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://linkedin.com/in/muazzam-mirza"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
