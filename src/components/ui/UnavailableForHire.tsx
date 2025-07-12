const UnavailableForHire = () => {
  return (
    <div className="absolute z-50 -left-4 -bottom-10 flex items-center gap-2 px-5 py-3 bg-black/80 rounded-lg group-hover:scale-110 transition-all duration-500">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute flex h-full w-full rounded-full bg-rose-400/80"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
      </span>
      <span className="bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
        TEMPORARILY UNAVAILABLE
      </span>
    </div>
  );
};

export default UnavailableForHire;
