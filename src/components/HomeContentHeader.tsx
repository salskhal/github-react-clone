import { FilterIcon } from "./icons";

export default function HomeContentHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">Home</h2>
      <div className="flex items-center ">
        <span className="text-[#4493f8] cursor-pointer text-sm">Send feedback</span>
        <div className="flex items-center ml-4 cursor-pointer border border-[#30363d] rounded-md px-3 py-1 bg-[#21262d]">
          <FilterIcon />
          <span className="">Filter</span>
        </div>
      </div>
    </div>
  );
}
