import {
  GithubIcon,
  PlusIcon,
  IssuesIcon,
  PullIcon,
  NotificationIcon,
} from "./icons";
import SearchInput from "./SearchInput";

interface IconContainerProps {
  children: React.ReactNode;
}

const NavIcons = [
  {
    icon: <PlusIcon />,
  },
  {
    icon: <IssuesIcon />,
  },
  {
    icon: <PullIcon />,
  },
  {
    icon: <NotificationIcon />,
  },
];

const IconContainer = ({ children }: IconContainerProps) => {
  return (
    <div className="border border-[#30363d] rounded-md p-2 flex items-center justify-center">
      {children}
    </div>
  );
};

export const Header = () => {
  return (
    <nav className="bg-nav-bg p-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <GithubIcon />
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SearchInput />

        {/* have a horizontal line */}
        <div className="h-5 w-px bg-[#30363d]"></div>

        <div className="flex items-center space-x-4">
          {NavIcons.map((navIcon, index) => (
            <IconContainer key={index}>{navIcon.icon}</IconContainer>
          ))}
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/204768?v=4"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};
