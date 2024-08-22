import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function ActiveInput({ onClick }: ActiveInputProps) {
  const [inputValue, setInputValue] = useState("");
  const setSearchTerm = useUserStore((state) => state.setSearchTerm);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    // close the active input
    onClick();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target instanceof Element) ||
        !event.target.closest(".active-input-container")
      ) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black  bg-opacity-50 z-10"></div>

      {/* Active Input Container */}
      <div className="active-input-container absolute top-0 left-0 lg:left-24 lg:min-w-[80%] mt-1 bg-nav-bg border border-[#8D96A0] rounded-md shadow-lg z-20">
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full bg-transparent text-white rounded-md border border-[#8D96A0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}

              autoFocus
            />
          </form>
          <div className="mt-4">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">Owners</h3>
            <ul className="space-y-2">
              {[
                "adrianhajdin",
                "ByteGrad",
                "MubarakSULAYMAN",
                "ashishps1",
                "salskhal",
              ].map((owner) => (
                <li key={owner} className="flex items-center text-white">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {owner}
                  <span className="ml-auto text-gray-400 text-sm">Jump to</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">
              Repositories
            </h3>
            <ul className="space-y-2">
              {[
                "adrianhajdin/aora",
                "ByteGrad/todo-app",
                "MubarakSULAYMAN/ami-e",
                "ashishps1/awesome-leetcode-resources",
              ].map((repo) => (
                <li key={repo} className="flex items-center text-white">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  {repo}
                  <span className="ml-auto text-gray-400 text-sm">Jump to</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex justify-between text-sm">
            <a href="#" className="text-blue-400 hover:underline">
              Search syntax tips
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Give feedback
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
