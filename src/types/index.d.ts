declare interface User {
    id: string;
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    location: string;
    email: string;
    url: string;
    repositories: {
        totalCount: number;
    };
    followers: {
        totalCount: number;
    };
}

declare interface UserProfile extends User {
    company: string;
    companyHTML: string;
    bioHTML: string;
    following: {
        totalCount: number;
    };
    starredRepositories: {
        totalCount: number;
    };
    twitterUsername: string;
    websiteUrl: string;
    projects: {
        totalCount: number;
    };
    packages: {
        totalCount: number;
    };
}

declare interface UserState {
    searchTerm: string;
    searchResults: User[];
    userCount: number;
    currentProfile: UserProfile | undefined;
    // currentProfileReadme: string;
    setSearchTerm: (term: string) => void;
    setSearchResults: (results: User[]) => void;
    setUserCount: (count: number) => void;
    setCurrentProfile: (profile: UserProfile) => void;
    // setCurrentProfileReadme: (readme: string) => void;
}
declare interface UserCardProps {
    user: User;
}



declare interface IconProps {
    className?: string;
}

declare interface UserNode {
    id: string;
    login: string;
    avatarUrl: string;
}

declare interface UserEdge {
    node: UserNode;
}

declare interface DefaultInputProps {
    onClick: () => void;
}

declare interface ActiveInputProps {
    onClick: () => void;
}

declare interface IconContainerProps {
    children: React.ReactNode;
    className?: string;
}


declare interface StarredRepoCardProps {
    avatarUrl: string;
    username: string;
    repoName: string;
    language: string;
    stars: number;
    timeAgo: string;
}

declare type Headers = {
    authorization?: string;
}