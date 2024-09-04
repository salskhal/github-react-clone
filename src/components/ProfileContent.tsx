// import { useSearchParams } from "react-router-dom";

// import { NavLink } from "react-router-dom";

// import RepoContent from "./tabs/RepoContent";

// export default function ProfileContent() {
//   const [searchParams] = useSearchParams();
//   const tab = searchParams.get("tab");

//   const renderTabContent = () => {
//     switch (tab) {
//       case "packages":
//         return <div>Packages Content</div>;
//       case "projects":
//         return <div>Projects Content</div>;
//       default:
//         return <RepoContent />;
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <NavLink to="">Overview</NavLink>
//         <NavLink to="?tab=packages">Packages</NavLink>
//         <NavLink to="?tab=projects">Projects</NavLink>
//       </nav>
//       <div>{renderTabContent()}</div>
//     </div>
//   );
// }

import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RepoContent from "./tabs/RepoContent";
import {
  FaBook,
  FaBox,
  FaStar,
  FaFolderOpen,
  FaMailchimp,
} from "react-icons/fa";

export default function ProfileContent() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const renderTabContent = () => {
    switch (tab) {
      case "packages":
        return <div>Packages Content</div>;
      case "projects":
        return <div>Projects Content</div>;
      case "stars":
        return <div>Stars Content</div>;
      case "repositories":
        return <div>repositories</div>;
      default:
        return <div>Overview Content</div>;
    }
  };

  const navLinks = [
    {
      title: "Overview",
      icon: <FaBook />,
      to: "",
    },
    {
      title: "Repositories",
      icon: <FaFolderOpen />,
      to: "?tab=repositories",
      count: 463,
    },
    {
      title: "Projects",
      icon: <FaBox />,
      to: "?tab=projects",
    },
    {
      title: "Packages",
      icon: <FaMailchimp />,
      to: "?tab=packages",
    },
    {
      title: "Stars",
      icon: <FaStar />,
      to: "?tab=stars",
      count: 1100,
    },
  ];

  return (
    <div>
      <nav className="flex space-x-4 border-b border-gray-700 bg-nav-bg">
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.to}
            className="flex items-center py-2 px-4 text-gray-400 hover:text-white"
          >
            {link.icon}
            <span className="ml-2">{link.title}</span>
            {link.count && (
              <span className="ml-2 text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                {link.count}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen bg-[#0d1117]">
        <RepoContent />
        <div className="md:col-span-3 text-white">{renderTabContent()}</div>
      </div>
    </div>
  );
}
