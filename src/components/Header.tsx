import { Link } from "react-router-dom";
import {
  GithubIcon,
  PlusIcon,
  IssuesIcon,
  PullIcon,
  NotificationIcon,
  HamBurgerIcon,
} from "./icons";
import SearchInput from "./SearchInput";

interface IconContainerProps {
  children: React.ReactNode;
  className?: string;
}

const NavIcons = [
  {
    icon: <PlusIcon />,
    className: "hidden md:flex",
  },
  {
    icon: <IssuesIcon />,
    className: "hidden md:flex",
  },
  {
    icon: <PullIcon />,
    className: "hidden md:flex",
  },
  {
    icon: <NotificationIcon />,
    className: "flex",
  },
];

const IconContainer = ({ children, className }: IconContainerProps) => {
  return (
    <div
      className={`border border-[#30363d] rounded-md p-2 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export const Header = () => {
  return (
    <nav className="bg-nav-bg p-4 md:px-8 flex justify-between items-center border-b border-[#30363d]">
      <div className="flex items-center space-x-3">
        <IconContainer>
          <HamBurgerIcon />
        </IconContainer>
        <Link to="/">
          <div>
            <GithubIcon />
          </div>
        </Link>
        <div>
          <p className="text-white text-sm font-semibold">Dashboard</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <SearchInput />
        {/* have a horizontal line */}
        <div className="h-5 w-px bg-[#30363d]"></div>

        <div className="flex items-center md:space-x-4">
          {NavIcons.map((navIcon, index) => (
            <IconContainer key={index} className={navIcon.className}>
              {navIcon.icon}
            </IconContainer>
          ))}
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/204763?v=4"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};
