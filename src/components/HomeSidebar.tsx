// Code: HomeSidebar Component
import { FaBook } from "react-icons/fa";

const dummyData = [
  {
    id: 1,
    name: "adrianhajdin / crwn-clothing",
    
  },
  {
    id: 2,
    name: "adrianhajdin / crwn-clothing",
    
  },
  {
    id: 3,
    name: "adrianhajdin / crwn-clothing",
    
  },
  {
    id: 4,
    name: "adrianhajdin / crwn-clothing",
  },
  {
    id: 5,
    name: "adrianhajdin / crwn-clothing",
  },
];

export default function HomeSidebar() {
  return (
    <div className="sidebar">
      <div className="flex flex-col gap-4 py-5">
        <div className="flex items-center justify-between">
          <h2>Top repositories</h2>
          <button className=" flex items-center space-x-1 bg-green-700 py-2 px-3 text-xs rounded-lg">
            <FaBook />
            <p className="font-bold">New</p>
          </button>
        </div>
        <div>
          <input type="text" className="w-full bg-[#161b22] py-1 px-3 placeholder:text-sm rounded-md border border-[#30363d] " placeholder="Find a repository..." disabled />
        </div>
        <div>
          <ul className="space-y-2">
          {dummyData.map((repo) => (
            <li key={repo.id} className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div>
                <h3 className="text-white">{repo.name}</h3>
              </div>
            </li>
          ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
