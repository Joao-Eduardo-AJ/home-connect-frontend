function Logo() {
  return (
    <div className="logo group relative h-8 w-8 rounded-full duration-1000 hover:rotate-90">
      <div className="absolute right-0 top-[6px] h-5 w-5 -rotate-45 transition-all duration-1000 group-hover:h-4 group-hover:w-3 group-hover:rotate-0 bg-gradient-to-bl from-highlight to-highlight-aux rounded group-hover:right-[9px] group-hover:top-2 group-hover:rounded-none"></div>
    </div>
  );
}

export default Logo;
