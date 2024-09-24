export const Feature = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
      <div className="flex pl-8 items-center">
        <Check />
        <div className="flex flex-col justify-center pl-2">
          <div className="flex">
            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-sm">
              {title}
            </div>
            <div className="pl-1 text-gray-300 text-sm">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  function Check() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="url(#gradient)"
        className="w-6 h-6"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    );
  }
  