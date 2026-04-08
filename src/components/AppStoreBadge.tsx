const APP_STORE = "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";

const AppStoreBadge = ({ className = "" }: { className?: string }) => {
  return (
    <a
      href={APP_STORE}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block hover:opacity-80 transition-opacity ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 40"
        className="h-[44px] w-auto"
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" stroke="#A6A6A6" strokeWidth="0.4" fill="none" />
        <g fill="#fff">
          <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.36 4.1 4.1 0 0 0 3.237-1.53z" />
        </g>
        <g fill="#fff">
          <text x="42" y="14" fontFamily="system-ui, -apple-system, sans-serif" fontSize="5.2" fontWeight="400" letterSpacing="0.03em">Télécharger sur l'</text>
          <text x="42" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="600" letterSpacing="-0.02em">App Store</text>
        </g>
      </svg>
    </a>
  );
};

export default AppStoreBadge;
