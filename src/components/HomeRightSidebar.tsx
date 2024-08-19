import { GithubIcon } from "./icons";

export default function HomeRightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="relative max-w-sm p-4 bg-gradient-to-br from-indigo-900 to-purple-700 rounded-lg shadow-lg text-white">
        <button className="absolute top-2 right-2 text-white">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a1 1 0 011-1h7a1 1 0 100-2h-7a1 1 0 110-2h7a1 1 0 110-2h-7a1 1 0 100 2h-7a1 1 0 100 2h7a1 1 0 110 2h-7a1 1 0 110-2H3a1 1 0 000 2h7a1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex items-center space-x-3">
          <GithubIcon />
          <h2 className="text-xl font-bold">GitHub Models</h2>
        </div>
        <p className="mt-4 text-sm">
          Join the Limited Public Beta. Try, test, and deploy a range of popular
          AI models with an interactive playground, for free, right on GitHub.
        </p>
        <button className="mt-6 px-4 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 transition duration-300">
          Learn more
        </button>
      </div>
    </aside>
  );
}
