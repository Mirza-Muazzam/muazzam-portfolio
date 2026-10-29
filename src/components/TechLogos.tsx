import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// Authentic SVG Vector Logos for Core Technologies
export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M63.585 3.062c-29.362 0-27.536 12.72-27.536 12.72l.033 13.167h27.945v3.948H25.04s-17.788 2.012-17.788 27.502c0 25.49 15.534 24.636 15.534 24.636h9.274v-13.01s-.517-15.536 15.257-15.536h26.417s14.654.244 14.654-14.15V17.202s2.052-14.14-24.803-14.14zm-14.86 8.354a4.34 4.34 0 110 8.68 4.34 4.34 0 010-8.68z"
      fill="url(#python-grad-a)"
    />
    <path
      d="M64.415 124.938c29.362 0 27.536-12.72 27.536-12.72l-.033-13.167H63.973v-3.948h38.988s17.788-2.012 17.788-27.502c0-25.49-15.534-24.636-15.534-24.636h-9.274v13.01s.517 15.536-15.257 15.536H54.267s-14.654-.244-14.654 14.15v22.138s-2.052 14.14 24.802 14.14zm14.86-8.354a4.34 4.34 0 110-8.68 4.34 4.34 0 010-8.68z"
      fill="url(#python-grad-b)"
    />
    <defs>
      <linearGradient id="python-grad-a" x1="17.247" y1="12.924" x2="77.168" y2="72.337" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="python-grad-b" x1="110.753" y1="115.076" x2="50.832" y2="55.663" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
  </svg>
);

export const DjangoLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#092E20" />
    <path
      d="M66.4 34.6v34.3c0 11.2-4.9 16.5-14.7 16.5-4.1 0-7.8-.9-10.3-2.3l2.5-10.1c1.5.9 3.8 1.6 6.3 1.6 4.7 0 6.6-2.9 6.6-8.3V34.6h9.6zm-19-14.4h9.6v10.5h-9.6V20.2zm48 37.7v30h-9.5V70.6c0-7.7-3.4-11.8-9.8-11.8-5.9 0-9.6 4.4-9.6 11.8v17.3H67V44.7h9.5v8.5c2.9-5.7 8.3-9.1 15.3-9.1 8.8 0 13.6 5.8 13.6 13.8z"
      fill="#44B78B"
    />
  </svg>
);

export const FastAPILogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="60" fill="#009688" />
    <path
      d="M68.5 24L36 68.5h27.8L59.5 104 92 59.5H64.2L68.5 24z"
      fill="#FFFFFF"
    />
  </svg>
);

export const FlaskLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#1A1C23" />
    <path
      d="M58 24h12v14.4l18.8 37.6c3.2 6.4-1.4 14-8.6 14H47.8c-7.2 0-11.8-7.6-8.6-14L58 38.4V24z"
      stroke="#E2E8F0"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M52 24h24" stroke="#E2E8F0" strokeWidth="7" strokeLinecap="round" />
    <circle cx="56" cy="72" r="3" fill="#38BDF8" />
    <circle cx="70" cy="76" r="4.5" fill="#38BDF8" />
    <circle cx="62" cy="62" r="2.5" fill="#38BDF8" />
    <path d="M46 76c6 3 12 3 18 0s12-3 18 0" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const PostgreSQLLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#1E293B" />
    <path
      d="M64 22c-23.2 0-42 18.8-42 42 0 16.8 9.9 31.3 24.2 37.9v-9.6c-9.3-5.5-15.6-15.6-15.6-27.3 0-17.7 14.3-32 32-32s32 14.3 32 32c0 11.7-6.3 21.8-15.6 27.3v9.6c14.3-6.6 24.2-21.1 24.2-37.9 0-23.2-18.8-42-42-42z"
      fill="#336791"
    />
    <path
      d="M64 42c-12.2 0-22 9.8-22 22 0 8.2 4.5 15.4 11.2 19.1v-6.6c-3.5-2.7-5.8-7-5.8-11.8 0-8.3 6.7-15 15-15s15 6.7 15 15c0 4.8-2.3 9.1-5.8 11.8v6.6c6.7-3.7 11.2-10.9 11.2-19.1 0-12.2-9.8-22-22-22z"
      fill="#4FA1D8"
    />
    <circle cx="58" cy="54" r="3" fill="#FFFFFF" />
    <path d="M64 68v18M56 86h16" stroke="#4FA1D8" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const MySQLLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#005A84" />
    <path
      d="M32 76c4-12 14-22 26-26 12-4 26-2 36 6 8 6 12 16 12 26-4-8-12-14-22-16-10-2-22 2-30 8-8 6-16 6-22 2z"
      fill="#F29111"
    />
    <path
      d="M36 82c10-2 22 2 30 8 10 8 24 10 36 6-6 4-14 6-22 6-14 0-28-6-38-14-2-2-4-4-6-6z"
      fill="#FFFFFF"
    />
    <circle cx="86" cy="62" r="3" fill="#FFFFFF" />
  </svg>
);

export const RedisLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 18L18 42v44l46 24 46-24V42L64 18z" fill="#D82C20" />
    <path d="M64 18l46 24-46 24-46-24 46-24z" fill="#EF4035" />
    <path d="M64 66v44l46-24V42L64 66z" fill="#B32017" />
    <ellipse cx="64" cy="42" rx="18" ry="9" fill="#FFFFFF" fillOpacity="0.85" />
    <path d="M64 36v12M58 42h12" stroke="#D82C20" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const DockerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#0B192C" />
    {/* Containers */}
    <rect x="36" y="56" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="49" y="56" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="62" y="56" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="49" y="45" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="62" y="45" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="75" y="56" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="75" y="45" width="10" height="8" rx="1" fill="#2496ED" />
    <rect x="62" y="34" width="10" height="8" rx="1" fill="#2496ED" />
    {/* Whale Body */}
    <path
      d="M106 62c-2.4 0-4.8.4-7.1 1.2-3.8-3.3-8.8-5.2-14.1-5.2h-6.8v10H22c-1.1 6.5.6 13.2 4.6 18.5 7.4 9.7 19.8 15.5 32.2 15.5 17.6 0 34.2-9.6 42.4-25.2 5.5.4 10.8-2.6 12.8-7.8.2-.5-.1-1-.6-1.1-2.4-.6-5-.9-7.4-.9z"
      fill="#2496ED"
    />
    <circle cx="34" cy="74" r="2" fill="#0B192C" />
  </svg>
);

export const SeleniumLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#1C3144" />
    <rect x="24" y="24" width="38" height="38" rx="6" fill="#00B4D8" />
    <rect x="66" y="24" width="38" height="38" rx="6" fill="#43AA8B" />
    <rect x="24" y="66" width="38" height="38" rx="6" fill="#90BE6D" />
    <rect x="66" y="66" width="38" height="38" rx="6" fill="#4D908E" />
    <text x="32" y="50" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Se</text>
  </svg>
);

export const PandasLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#130754" />
    {/* Stylized Data Pipeline Bars */}
    <rect x="28" y="32" width="14" height="42" rx="4" fill="#FF4A00" />
    <rect x="48" y="48" width="14" height="48" rx="4" fill="#13C6FF" />
    <rect x="68" y="26" width="14" height="74" rx="4" fill="#E70488" />
    <rect x="88" y="52" width="14" height="38" rx="4" fill="#FFD000" />
  </svg>
);

export const TypeScriptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#3178C6" />
    <path
      d="M62 76h-8V52h26v8h-9v36h-9V76zm28-4c2 4 6 7 12 7s9-3 9-7c0-11-23-4-23-22 0-8 7-14 18-14 9 0 15 4 19 10l-6 6c-2-3-6-5-10-5s-8 2-8 6c0 10 23 4 23 22 0 9-7 15-19 15-11 0-18-5-22-12l7-6z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ReactLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#20232A" />
    <ellipse cx="64" cy="64" rx="14" ry="42" stroke="#61DAFB" strokeWidth="5" transform="rotate(30 64 64)" />
    <ellipse cx="64" cy="64" rx="14" ry="42" stroke="#61DAFB" strokeWidth="5" transform="rotate(90 64 64)" />
    <ellipse cx="64" cy="64" rx="14" ry="42" stroke="#61DAFB" strokeWidth="5" transform="rotate(150 64 64)" />
    <circle cx="64" cy="64" r="7" fill="#61DAFB" />
  </svg>
);

export const LinuxLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#18181B" />
    {/* Stylized Penguin / Tux Silhouette */}
    <path
      d="M64 26c-13.2 0-20 11.4-20 25.4 0 9.8 3.5 18.2 3.5 28.2 0 7.8-8.2 12.2-8.2 15.4 0 4.2 11.2 7 24.7 7s24.7-2.8 24.7-7c0-3.2-8.2-7.6-8.2-15.4 0-10 3.5-18.4 3.5-28.2 0-14-6.8-25.4-20-25.4z"
      fill="#FCD34D"
    />
    <path
      d="M64 30c-10 0-15 9-15 21 0 13 4 20 4 33 0 5-6 8-6 10 0 2 8 4 17 4s17-2 17-4c0-2-6-5-6-10 0-13 4-20 4-33 0-12-5-21-15-21z"
      fill="#0F172A"
    />
    <ellipse cx="64" cy="74" rx="10" ry="14" fill="#FFFFFF" />
    <circle cx="58" cy="44" r="2.5" fill="#FFFFFF" />
    <circle cx="70" cy="44" r="2.5" fill="#FFFFFF" />
    <path d="M60 50c2 2 6 2 8 0l-4 6-4-6z" fill="#F59E0B" />
  </svg>
);

export const NginxLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#009639" />
    <path
      d="M40 36v56l18-28V36h-8l-10 0zm20 0v16l28 40h8V36h-8l-28 0zm28 56v-16l-28-40h-8v56h8l28 0z"
      fill="#FFFFFF"
    />
  </svg>
);

export const CeleryLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#1C3D2B" />
    <path
      d="M64 24c-12 16-24 38-16 64 6 20 22 24 32 16 14-11 16-36 2-54-5-7-11-16-18-26z"
      fill="#37814A"
    />
    <path
      d="M64 34c-8 12-16 28-10 46 4 14 16 16 22 10 9-8 11-26 1-38-4-5-8-11-13-18z"
      fill="#56B76F"
    />
    <circle cx="58" cy="70" r="3" fill="#A7F3D0" />
    <circle cx="68" cy="58" r="2.5" fill="#A7F3D0" />
  </svg>
);

export const SQLAlchemyLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="24" fill="#241B1B" />
    <path
      d="M64 24c-18 0-32 14-32 32 0 14 9 26 22 30v18h20V86c13-4 22-16 22-30 0-18-14-32-32-32zm0 14c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18z"
      fill="#D71F00"
    />
    <circle cx="64" cy="56" r="6" fill="#F87171" />
  </svg>
);
