const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex mt-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center h-full pr-2 dark:bg-primary/80 rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition text-white"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center h-full pr-2 bg-primary/80 dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition text-white"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-3 flex-wrap justify-center">
        <p className="dark:text-white text-sm opacity-60">
          All rights reserved. Made in
        </p>
        <a
          href="https://www.malaysia.travel/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:opacity-80 transition-opacity"
        >
          <svg
            width="24"
            height="16"
            viewBox="0 0 28 14"
            className="inline-block"
          >
            {/* Malaysian Flag */}
            <rect width="28" height="1" fill="#CC0001" />
            <rect y="1" width="28" height="1" fill="#FFFFFF" />
            <rect y="2" width="28" height="1" fill="#CC0001" />
            <rect y="3" width="28" height="1" fill="#FFFFFF" />
            <rect y="4" width="28" height="1" fill="#CC0001" />
            <rect y="5" width="28" height="1" fill="#FFFFFF" />
            <rect y="6" width="28" height="1" fill="#CC0001" />
            <rect y="7" width="28" height="1" fill="#FFFFFF" />
            <rect y="8" width="28" height="1" fill="#CC0001" />
            <rect y="9" width="28" height="1" fill="#FFFFFF" />
            <rect y="10" width="28" height="1" fill="#CC0001" />
            <rect y="11" width="28" height="1" fill="#FFFFFF" />
            <rect y="12" width="28" height="1" fill="#CC0001" />
            <rect y="13" width="28" height="1" fill="#FFFFFF" />
            {/* Blue canton */}
            <rect width="14" height="7" fill="#010066" />
            {/* Crescent and star */}
            <path
              d="M 7 3.5 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0 M 8.5 3.5 m -1.8 0 a 1.8 1.8 0 1 1 3.6 0 a 1.8 1.8 0 1 1 -3.6 0"
              fill="#FCC72C"
            />
            <path
              d="M 10.5 2.2 L 10.8 3 L 11.6 3 L 11 3.4 L 11.2 4.2 L 10.5 3.8 L 9.8 4.2 L 10 3.4 L 9.4 3 L 10.2 3 Z"
              fill="#FCC72C"
            />
          </svg>
        </a>
        <p className="dark:text-white text-sm opacity-60">by</p>
        <a
          href="https://antigravity.google"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:opacity-80 transition-opacity"
        >
          <img
            src="https://antigravity.google/assets/image/antigravity-logo.png"
            alt="Antigravity"
            className="h-4 inline-block"
          />
        </a>
      </div>
    </footer>
  );
}
