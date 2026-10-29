import React, { useState, useEffect } from 'react';
import {
  PythonLogo,
  DjangoLogo,
  FastAPILogo,
  FlaskLogo,
  PostgreSQLLogo,
  MySQLLogo,
  RedisLogo,
  DockerLogo,
  SeleniumLogo,
  PandasLogo,
  TypeScriptLogo,
  ReactLogo,
  LinuxLogo,
  NginxLogo,
  CeleryLogo,
  SQLAlchemyLogo
} from './TechLogos';
import { ExternalLink, X, Terminal, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export interface TechItem {
  id: string;
  name: string;
  role: string;
  category: 'backend' | 'databases' | 'automation' | 'devops' | 'frontend';
  featured?: boolean;
  metricLabel: string;
  metricValue: string;
  description: string;
  tags: string[];
  glowColor: string; // CSS color string for hover glow
  brandBorder: string;
  brandBg: string;
  iconComponent: React.ComponentType<{ className?: string }>;
  companionIcons?: React.ComponentType<{ className?: string }>[];
  // Deep Inspector Data
  deepDive: {
    productionContext: string;
    architectureRole: string;
    keyAchievements: string[];
    codeSnippetTitle: string;
    codeSnippet: string;
    associatedProject: string;
  };
}

const TECH_CATALOG: TechItem[] = [
  {
    id: 'python',
    name: 'Python (Asyncio, OOP & Concurrency)',
    role: 'Primary Architecture Language',
    category: 'backend',
    featured: true,
    metricValue: '10,000+',
    metricLabel: 'Concurrent Sockets Benchmarked',
    description: 'Constructing non-blocking asynchronous microservices, custom event loops, and high-throughput data pipelines with modern typing and OOP design patterns.',
    tags: ['Asyncio', 'uvloop', 'Multiprocessing', 'Type Hinting', 'OOP Patterns'],
    glowColor: 'rgba(56, 126, 184, 0.25)',
    brandBorder: 'hover:border-blue-500/50',
    brandBg: 'from-blue-950/40 via-slate-900/60 to-slate-900/40',
    iconComponent: PythonLogo,
    deepDive: {
      productionContext: 'Backbone language used across US healthcare billing automation platforms, high-concurrency socket servers, and automated claims auditing engines.',
      architectureRole: 'Event-driven backend services handling asynchronous I/O, heavy file parsing, and coordination between database pools and external REST endpoints.',
      keyAchievements: [
        'Benchmarked 10,000+ simultaneous WebSocket connections utilizing asyncio and uvloop.',
        'Engineered memory-efficient generators parsing gigabyte-scale healthcare 835/837 EDI files.',
        'Enforced strict Python 3.12+ type hints and Ruff/Black linting across production repositories.'
      ],
      codeSnippetTitle: 'async_worker_pool.py',
      codeSnippet: `import asyncio
from typing import AsyncGenerator

async def process_claims_batch(queue: asyncio.Queue) -> None:
    """Non-blocking asynchronous claim auditor with bounded worker pool."""
    while not queue.empty():
        claim_id = await queue.get()
        async with db_pool.acquire() as conn:
            audit_result = await run_claim_rules(conn, claim_id)
            await persist_audit_ledger(conn, audit_result)
        queue.task_done()`,
      associatedProject: 'High-Concurrency WebSocket Server'
    }
  },
  {
    id: 'automation',
    name: 'Selenium & Automated Data Extraction',
    role: 'Web Automation & Scraping Engine',
    category: 'automation',
    featured: true,
    metricValue: '500,000+',
    metricLabel: 'Directory Records Audited & Parsed',
    description: 'Automated headless browser navigation, dynamic DOM scraping, CAPTCHA avoidance, and automated claims reconciliation pipelines for structured data validation.',
    tags: ['Selenium WebDriver', 'Headless Chrome', 'Pandas ETL', 'Anti-Bot Bypass', 'Data Hygiene'],
    glowColor: 'rgba(0, 180, 216, 0.25)',
    brandBorder: 'hover:border-teal-500/50',
    brandBg: 'from-teal-950/40 via-slate-900/60 to-slate-900/40',
    iconComponent: SeleniumLogo,
    companionIcons: [PandasLogo],
    deepDive: {
      productionContext: 'Engineered automated crawler clusters to systematically extract physician registries, verify US insurance provider directories, and audit billing databases.',
      architectureRole: 'Resilient web scraping subsystem equipped with dynamic proxy rotation, exponential backoff retries, and automated schema normalization.',
      keyAchievements: [
        'Extracted and cleansed 500,000+ complex medical provider records without rate-limit bans.',
        'Eliminated 78% of manual audit discrepancies in billing tables through automated reconciliation.',
        'Packaged browser dependencies and Chromedriver in headless Docker containers for scheduled execution.'
      ],
      codeSnippetTitle: 'headless_crawler.py',
      codeSnippet: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")
options.add_argument("user-agent=Mozilla/5.0 ...")

driver = webdriver.Chrome(options=options)
# Dynamic wait & data extraction pipeline...`,
      associatedProject: 'Automated Claims Audit System'
    }
  },
  {
    id: 'postgres',
    name: 'PostgreSQL & Advanced SQL',
    role: 'Relational Data Storage & Indexing',
    category: 'databases',
    metricValue: '60%',
    metricLabel: 'Query Latency Reduction',
    description: 'Complex relational schemas, composite B-tree indexing, partitioning, and connection pooling for US healthcare operations.',
    tags: ['EXPLAIN ANALYZE', 'Composite Indexes', 'Connection Pooling', 'ACID Transactions'],
    glowColor: 'rgba(51, 103, 145, 0.25)',
    brandBorder: 'hover:border-sky-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: PostgreSQLLogo,
    deepDive: {
      productionContext: 'Managed primary transactional datastores for patient ledgers, payment tracking, and automated EDI reconciliation.',
      architectureRole: 'Relational system of record with strict foreign key constraints, JSONB attributes for unstructured data, and read-replica offloading.',
      keyAchievements: [
        'Refactored slow N+1 query patterns and created composite indexes, slashing report generation time by 60%.',
        'Implemented PgBouncer connection pooling to sustain peak 500+ TPS transaction surges.',
        'Authored robust database migration scripts ensuring zero data loss across schema evolution.'
      ],
      codeSnippetTitle: 'schema_optimization.sql',
      codeSnippet: `CREATE INDEX CONCURRENTLY idx_claims_status_provider 
ON medical_claims (provider_npi, filing_date DESC) 
INCLUDE (total_billed, reimbursement_status)
WHERE is_archived = false;`,
      associatedProject: 'US Healthcare Revenue Engine'
    }
  },
  {
    id: 'fastapi',
    name: 'FastAPI & REST Microservices',
    role: 'High-Performance API Layer',
    category: 'backend',
    metricValue: '<50ms',
    metricLabel: 'P99 API Response Times',
    description: 'High-speed RESTful services with automatic OpenAPI documentation, asynchronous dependency injection, and Pydantic V2 validation.',
    tags: ['Pydantic V2', 'OpenAPI Specs', 'OAuth2 / JWT', 'Async Handlers'],
    glowColor: 'rgba(0, 150, 136, 0.25)',
    brandBorder: 'hover:border-teal-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: FastAPILogo,
    deepDive: {
      productionContext: 'Primary microservice gateway connecting frontend interfaces with automated background workers and database pools.',
      architectureRole: 'Asynchronous API routing layer validating all inbound payloads and serializing responses with near-native C speed.',
      keyAchievements: [
        'Achieved sub-50ms P99 latency across core CRUD and authentication routes.',
        'Constructed custom middleware for request telemetry, correlation IDs, and rate limiting.',
        'Auto-generated interactive Swagger/OpenAPI specifications for cross-team integration.'
      ],
      codeSnippetTitle: 'api_endpoints.py',
      codeSnippet: `@router.post("/v1/audits/reconcile", response_model=AuditResponse)
async def reconcile_claims(
    batch: ClaimBatchPayload,
    current_user: Annotated[User, Depends(get_current_user)],
    db: AsyncSession = Depends(get_db_session)
) -> AuditResponse:
    return await audit_service.process(db, batch, current_user.tenant_id)`,
      associatedProject: 'REST Microservices Gateway'
    }
  },
  {
    id: 'django',
    name: 'Django & Flask',
    role: 'Full-Stack Application Frameworks',
    category: 'backend',
    metricValue: 'HIPAA',
    metricLabel: 'Compliant Medical Workflow Tools',
    description: 'Internal operational dashboards, administrative portals, and automated claims processing suites with robust security standards.',
    tags: ['Django ORM', 'Admin Modules', 'Role-Based Access', 'Flask Blueprints'],
    glowColor: 'rgba(68, 183, 139, 0.25)',
    brandBorder: 'hover:border-emerald-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: DjangoLogo,
    companionIcons: [FlaskLogo],
    deepDive: {
      productionContext: 'Built enterprise administrative portals and claims reconciliation interfaces for healthcare operations specialists.',
      architectureRole: 'Battle-tested web applications delivering role-based access control (RBAC), audit logging, and secure database interactions.',
      keyAchievements: [
        'Customized Django Admin modules to enable billing analysts to resolve reconciliation discrepancies in seconds.',
        'Configured Flask micro-utilities for lightweight webhook ingestion from clearinghouses.',
        'Adhered strictly to HIPAA standards for data sanitization, encryption at rest, and audit trails.'
      ],
      codeSnippetTitle: 'django_admin_reconciliation.py',
      codeSnippet: `@admin.register(ClaimReconciliationRecord)
class ClaimReconciliationAdmin(admin.ModelAdmin):
    list_display = ('claim_id', 'provider_name', 'status', 'discrepancy_amount')
    list_filter = ('status', 'discrepancy_code')
    actions = ['approve_remittance_sync']`,
      associatedProject: 'US Healthcare Revenue Engine'
    }
  },
  {
    id: 'redis',
    name: 'Redis In-Memory Datastore',
    role: 'Caching & Task Queue Broker',
    category: 'databases',
    metricValue: '<1ms',
    metricLabel: 'In-Memory Cache Latency',
    description: 'Distributed session storage, rate limiting, and message brokering with Celery to decouple long-running jobs from HTTP request threads.',
    tags: ['Pub/Sub', 'Celery Broker', 'Sliding Window Rate Limit', 'Cache Invalidation'],
    glowColor: 'rgba(216, 44, 32, 0.25)',
    brandBorder: 'hover:border-red-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: RedisLogo,
    companionIcons: [CeleryLogo],
    deepDive: {
      productionContext: 'Serves as high-speed caching tier for session data and message broker queueing thousands of asynchronous background tasks.',
      architectureRole: 'Prevents database thrashing by intercepting frequent read queries and buffering scraping jobs for asynchronous Celery workers.',
      keyAchievements: [
        'Maintained sub-millisecond key-value retrieval times under high read concurrency.',
        'Configured distributed task workers executing automated PDF generation and EDI parsing in the background.',
        'Enforced Redis-backed sliding-window token bucket algorithms to prevent API abuse.'
      ],
      codeSnippetTitle: 'cache_manager.py',
      codeSnippet: `async def get_cached_provider(provider_id: str) -> dict | None:
    cached = await redis_client.get(f"provider:{provider_id}")
    if cached:
        return json.loads(cached)
    provider = await fetch_provider_from_db(provider_id)
    await redis_client.setex(f"provider:{provider_id}", 3600, json.dumps(provider))
    return provider`,
      associatedProject: 'Distributed Task & Cache Engine'
    }
  },
  {
    id: 'docker',
    name: 'Docker & Containerization',
    role: 'Reproducible Deployment Environments',
    category: 'devops',
    metricValue: '100%',
    metricLabel: 'Environment Parity (Dev to Prod)',
    description: 'Multi-stage container builds, automated environment provisioning, and microservice orchestration with Docker Compose.',
    tags: ['Multi-Stage Builds', 'Docker Compose', 'Alpine Linux', 'Security Hardening'],
    glowColor: 'rgba(36, 150, 237, 0.25)',
    brandBorder: 'hover:border-sky-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: DockerLogo,
    deepDive: {
      productionContext: 'Encapsulating backend web servers, database proxies, automated headless browser runners, and worker processes.',
      architectureRole: 'Ensures reliable, predictable deployments across developer laptops and remote Linux cloud VPS instances.',
      keyAchievements: [
        'Crafted multi-stage Dockerfiles reducing production image footprints from 1.2GB down to 140MB.',
        'Isolated browser automation dependencies (Chromedriver & Xvfb) inside disposable container workers.',
        'Structured Docker Compose topologies linking backend, Redis, PostgreSQL, and Nginx reverse proxies.'
      ],
      codeSnippetTitle: 'Dockerfile',
      codeSnippet: `FROM python:3.12-slim AS builder
WORKDIR /app
COPY pyproject.toml .
RUN pip install --no-cache-dir poetry && poetry export -f requirements.txt > req.txt

FROM python:3.12-alpine
WORKDIR /app
COPY --from=builder /app/req.txt .
RUN pip install --no-cache-dir -r req.txt
COPY src/ ./src/
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]`,
      associatedProject: 'Containerized Microservices Cluster'
    }
  },
  {
    id: 'linux',
    name: 'Linux (Ubuntu VPS) & Systems',
    role: 'Infrastructure & Reverse Proxy',
    category: 'devops',
    metricValue: '99.9%',
    metricLabel: 'Production Server Uptime',
    description: 'Ubuntu VPS management, Bash scripting, systemd service daemons, SSL automation with Certbot, and Nginx reverse proxy routing.',
    tags: ['Ubuntu 24.04', 'Systemd Daemons', 'Nginx Conf', 'SSL / TLS', 'Bash Automation'],
    glowColor: 'rgba(252, 211, 77, 0.22)',
    brandBorder: 'hover:border-amber-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: LinuxLogo,
    companionIcons: [NginxLogo],
    deepDive: {
      productionContext: 'Provisioning and maintaining self-hosted Linux VPS environments hosting production databases, APIs, and cron runners.',
      architectureRole: 'Operating system backbone managing server-level security, process supervision, memory limits, and automated backups.',
      keyAchievements: [
        'Configured Nginx reverse proxies with HTTP/2, gzip compression, and TLS 1.3 encryption.',
        'Wrote custom systemd unit files with automatic restart policies and resource limits.',
        'Built automated Bash scripts for nightly database dumps, off-site S3 synchronization, and disk space alerts.'
      ],
      codeSnippetTitle: 'nginx_production.conf',
      codeSnippet: `server {
    listen 443 ssl http2;
    server_name api.muazzammirza.dev;
    
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}`,
      associatedProject: 'Cloud VPS Deployment Architecture'
    }
  },
  {
    id: 'pandas',
    name: 'Pandas & Data Pipelines',
    role: 'ETL & Tabular Processing',
    category: 'automation',
    metricValue: 'Millions',
    metricLabel: 'Data Rows Deduplicated & Validated',
    description: 'High-performance tabular data manipulation, vectorization, anomaly detection, and automated exports to relational databases.',
    tags: ['DataFrames', 'Vectorization', 'Schema Normalization', 'CSV / Excel ETL'],
    glowColor: 'rgba(231, 4, 136, 0.22)',
    brandBorder: 'hover:border-pink-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: PandasLogo,
    deepDive: {
      productionContext: 'Cleansing messy third-party healthcare registry directories and formatting raw transaction feeds into relational database models.',
      architectureRole: 'In-memory ETL computation layer replacing slow row-by-row loops with fast vectorized operations.',
      keyAchievements: [
        'Vectorized claim reconciliation algorithms, accelerating batch analysis by 14x over native Python loops.',
        'Implemented regex-driven sanitization for US phone numbers, NPI IDs, and ICD-10 medical diagnostic codes.',
        'Automated reconciliation delta reports exported to executive CSV and Excel spreadsheets.'
      ],
      codeSnippetTitle: 'data_pipeline.py',
      codeSnippet: `import pandas as pd

def normalize_claims_batch(raw_df: pd.DataFrame) -> pd.DataFrame:
    """Vectorized data cleaning and discrepancy detection."""
    clean_df = raw_df.dropna(subset=['claim_id', 'provider_npi']).copy()
    clean_df['discrepancy'] = clean_df['billed_amount'] - clean_df['paid_amount']
    clean_df['is_flagged'] = clean_df['discrepancy'].abs() > 0.05
    return clean_df[clean_df['is_flagged']]`,
      associatedProject: 'Automated Claims Audit System'
    }
  },
  {
    id: 'frontend',
    name: 'TypeScript, React & Modern UI',
    role: 'Interactive Web & 3D Visualizations',
    category: 'frontend',
    metricValue: '60 FPS',
    metricLabel: 'Hardware-Accelerated WebGL Rendering',
    description: 'Type-safe interactive user interfaces, WebGL 3D canvas integrations, Tailwind CSS styling, and responsive fluid layouts.',
    tags: ['TypeScript', 'React 19', 'Tailwind CSS v4', 'WebGL / Canvas', 'State Management'],
    glowColor: 'rgba(97, 218, 251, 0.25)',
    brandBorder: 'hover:border-cyan-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: ReactLogo,
    companionIcons: [TypeScriptLogo],
    deepDive: {
      productionContext: 'Developing snappy frontend admin dashboards, real-time telemetry panels, and portfolio visualizations.',
      architectureRole: 'Client-side presentation tier communicating with backend REST and WebSocket APIs.',
      keyAchievements: [
        'Crafted full-screen WebGL 3D interactive spherical menus and physics-based macOS dock controls.',
        'Ensured strict WCAG AA contrast, keyboard accessibility, and zero layout shift.',
        'Maintained clean component modularity with zero unnecessary external runtime dependencies.'
      ],
      codeSnippetTitle: 'useWebSocketTelemetry.ts',
      codeSnippet: `export function useWebSocketTelemetry(endpoint: string) {
  const [data, setData] = useState<TelemetryPacket | null>(null);
  useEffect(() => {
    const ws = new WebSocket(endpoint);
    ws.onmessage = (event) => setData(JSON.parse(event.data));
    return () => ws.close();
  }, [endpoint]);
  return data;
}`,
      associatedProject: '3D Interactive Portfolio Showcase'
    }
  },
  {
    id: 'sqlalchemy',
    name: 'SQLAlchemy & MySQL',
    role: 'Object Relational Mapping & Migrations',
    category: 'databases',
    metricValue: 'Alembic',
    metricLabel: 'Version-Controlled Schema Upgrades',
    description: 'Declarative database models, asynchronous session scopes, transaction rollbacks, and schema evolution without downtime.',
    tags: ['Declarative Base', 'AsyncSession', 'Alembic Migrations', 'Foreign Keys'],
    glowColor: 'rgba(215, 31, 0, 0.22)',
    brandBorder: 'hover:border-red-500/40',
    brandBg: 'bg-slate-900/60',
    iconComponent: SQLAlchemyLogo,
    companionIcons: [MySQLLogo],
    deepDive: {
      productionContext: 'Database abstraction layer utilized across FastAPI and Flask services to enforce strongly typed models and safe queries.',
      architectureRole: 'Safeguards database integrity, automates transactional rollbacks upon exception, and prevents SQL injection vulnerabilities.',
      keyAchievements: [
        'Modeled complex US medical billing schemas with 40+ interconnected foreign key relationships.',
        'Executed zero-downtime database migrations using Alembic in containerized CI/CD pipelines.',
        'Configured session lifecycle middleware preventing leaked database connections.'
      ],
      codeSnippetTitle: 'models.py',
      codeSnippet: `class MedicalClaim(Base):
    __tablename__ = "medical_claims"
    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)
    provider_id: Mapped[UUID] = mapped_column(ForeignKey("providers.id"))
    total_billed: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    status: Mapped[ClaimStatus] = mapped_column(Enum(ClaimStatus))
    provider = relationship("Provider", back_populates="claims")`,
      associatedProject: 'US Healthcare Revenue Engine'
    }
  }
];

interface TechStackBentoProps {
  onSelectProject?: () => void;
}

export const TechStackBento: React.FC<TechStackBentoProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTech(null);
      }
    };
    if (selectedTech) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTech]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & Async' },
    { id: 'databases', label: 'Databases & Storage' },
    { id: 'automation', label: 'Automation & Scraping' },
    { id: 'devops', label: 'DevOps & Systems' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredItems = activeCategory === 'all'
    ? TECH_CATALOG
    : TECH_CATALOG.filter(item => item.category === activeCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Category Segmented Tabs (Anti-Slop Clean Style) */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-10 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl max-w-2xl mx-auto shadow-inner">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map(item => {
          const Icon = item.iconComponent;
          const isFeatured = item.featured && activeCategory === 'all';

          return (
            <div
              key={item.id}
              onClick={() => setSelectedTech(item)}
              style={{
                // Subtle custom brand glow on hover via inline style
                ['--glow-color' as any]: item.glowColor
              }}
              className={`group relative rounded-2xl p-6 sm:p-7 border border-slate-800/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden bg-slate-900/50 hover:bg-slate-900/80 hover:-translate-y-1 hover:shadow-[0_0_35px_var(--glow-color)] ${
                item.brandBorder
              } ${isFeatured ? 'md:col-span-2 bg-gradient-to-br ' + item.brandBg : ''}`}
            >
              {/* Subtle top corner gradient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none" />

              <div>
                {/* Header: Logo + Metric Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 group-hover:scale-110 transition-transform duration-300 shadow-sm flex items-center justify-center">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    {item.companionIcons && item.companionIcons.length > 0 && (
                      <div className="flex items-center -ml-1 gap-1">
                        {item.companionIcons.map((Companion, idx) => (
                          <div
                            key={idx}
                            className="p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 shadow-sm"
                          >
                            <Companion className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Concrete Quantitative Proof Metric */}
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white group-hover:text-blue-400 transition-colors">
                      {item.metricValue}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Tech Title & Role */}
                <div className="mt-2">
                  <div className="text-xs font-mono text-blue-400 tracking-wide uppercase mb-1">
                    {item.role}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-1.5 group-hover:text-white">
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-400 shrink-0" />
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom: Unboxed Metadata Tags + Inspect Affordance */}
              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 flex-wrap text-xs text-slate-400 font-mono">
                  {item.tags.slice(0, isFeatured ? 5 : 3).map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-300 hover:text-white transition-colors">{tag}</span>
                      {idx < (isFeatured ? 4 : 2) && idx < item.tags.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <span className="text-xs font-medium text-blue-400 group-hover:underline flex items-center gap-1 shrink-0">
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modal / Architecture Inspector */}
      {selectedTech && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-left relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 shadow-md">
                  {React.createElement(selectedTech.iconComponent, { className: 'w-10 h-10' })}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
                    {selectedTech.role}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedTech.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedTech(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              {/* Production Context */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Production Deployment Context</span>
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  {selectedTech.deepDive.productionContext}
                </p>
              </div>

              {/* Verified Achievements */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Key Verified Capabilities</span>
                </div>
                <ul className="space-y-2.5">
                  {selectedTech.deepDive.keyAchievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet / Architecture Specimen */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span>Architecture Pattern · {selectedTech.deepDive.codeSnippetTitle}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(selectedTech.deepDive.codeSnippet)}
                    className="text-xs font-mono text-slate-400 hover:text-white transition cursor-pointer"
                  >
                    {copiedCode ? '✓ Copied' : 'Copy Code'}
                  </button>
                </div>
                <pre className="p-4 bg-slate-950 border border-slate-800/90 rounded-xl text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{selectedTech.deepDive.codeSnippet}</code>
                </pre>
              </div>

              {/* Companion Libraries & Tooling */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Associated Ecosystem & Libraries
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  {selectedTech.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 flex-wrap">
              <div className="text-xs text-slate-400 font-mono">
                Project Evidence: <span className="text-white font-medium">{selectedTech.deepDive.associatedProject}</span>
              </div>
              <div className="flex items-center gap-3">
                {onSelectProject && (
                  <button
                    onClick={() => {
                      setSelectedTech(null);
                      onSelectProject();
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition shadow-md shadow-blue-600/30 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Projects</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setSelectedTech(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition cursor-pointer"
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
};
