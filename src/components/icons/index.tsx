interface IconProps {
  className?: string;
}

const GithubIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#F0F6FC"
      d="M16 0c8.84 0 16 7.16 16 16a16.026 16.026 0 0 1-10.9 15.18c-.8.16-1.1-.34-1.1-.76 0-.54.02-2.26.02-4.4 0-1.5-.5-2.46-1.08-2.96 3.56-.4 7.3-1.76 7.3-7.9 0-1.76-.62-3.18-1.64-4.3.16-.4.72-2.04-.16-4.24 0 0-1.34-.44-4.4 1.64-1.28-.36-2.64-.54-4-.54-1.36 0-2.72.18-4 .54-3.06-2.06-4.4-1.64-4.4-1.64-.88 2.2-.32 3.84-.16 4.24-1.02 1.12-1.64 2.56-1.64 4.3 0 6.12 3.72 7.5 7.28 7.9-.46.4-.88 1.1-1.02 2.14-.92.42-3.22 1.1-4.66-1.32-.3-.48-1.2-1.66-2.46-1.64-1.34.02-.54.76.02 1.06.68.38 1.46 1.8 1.64 2.26.32.9 1.36 2.62 5.38 1.88 0 1.34.02 2.6.02 2.98 0 .42-.3.9-1.1.76A15.99 15.99 0 0 1 0 16C0 7.16 7.16 0 16 0Z"
    />
  </svg>
);

const SearchIcon = (props: IconProps) => (
  <svg
    width={16}
    height={16}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const IssuesIcon = (props: IconProps) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="octicon octicon-issue-opened Button-visual"
    data-view-component="true"
    {...props}
  >
    <path fill="#8D96A0" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path
      fill="#8D96A0"
      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
    />
  </svg>
);

const PlusIcon = (props: IconProps) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="octicon octicon-plus"
    data-view-component="true"
    {...props}
  >
    <path
      fill="#8D96A0"
      d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
    />
  </svg>
);
const PullIcon = (props: IconProps) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="octicon octicon-git-pull-request Button-visual"
    data-view-component="true"
    {...props}
  >
    <path
      fill="#8D96A0"
      d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    />
  </svg>
);

const NotificationIcon = (props: IconProps) => (
  <svg
    width={16}
    height={16}
    aria-hidden="true"
    className="octicon octicon-inbox Button-visual"
    data-view-component="true"
    {...props}
  >
    <path
      fill="#8D96A0"
      d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
    />
  </svg>
);

export {
  GithubIcon,
  SearchIcon,
  IssuesIcon,
  PlusIcon,
  PullIcon,
  NotificationIcon,
};
