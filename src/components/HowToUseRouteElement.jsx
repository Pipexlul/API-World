const HowToUseRouteElement = ({ label }) => {
  return (
    <li className="group relative flex items-center">
      <span className="absolute inset-y-0 -left-px block h-10 w-4 bg-gray-900 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] group-first:hidden group-even:bg-gray-800"></span>
      <a
        href="#"
        className="flex h-10 items-center bg-gray-800 px-4 transition hover:text-white group-even:bg-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-4 w-4 group-first:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <span className="ml-1.5 text-xs font-medium">{label}</span>
      </a>
    </li>
  );
};

export default HowToUseRouteElement;
