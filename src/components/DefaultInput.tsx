import { SearchIcon } from "./icons";
export default function DefaultInput() {
 
  return (
    <div className="relative">
      {/* Large screen version */}
      <button className="hidden lg:flex items-center bg-transparent border border-[#30363d] rounded-md px-3 py-1.5 text-gray-400 space-x-3 focus:outline-none w-80">
        <SearchIcon />
        <span className="text-sm">Type / to search</span>
      </button>

      <button
  
        className="lg:hidden bg-transparent  border border-[#30363d] p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
