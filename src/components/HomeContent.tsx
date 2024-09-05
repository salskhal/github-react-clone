import { useState } from "react";
import HomeContentHeader from "./HomeContentHeader";
import GifLoader from "./GifLoader";
import StarredRepoCard from "./StarredRepoCard";

export default function HomeContent() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const starredRepo = [
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
      username: "user1",
      repoName: "awesome-project",
      language: "JavaScript",
      stars: 120,
      timeAgo: "2 days ago",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/2?v=4",
      username: "user2",
      repoName: "cool-library",
      language: "Python",
      stars: 95,
      timeAgo: "5 days ago",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/3?v=4",
      username: "user3",
      repoName: "data-visualizer",
      language: "TypeScript",
      stars: 78,
      timeAgo: "1 week ago",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/4?v=4",
      username: "user4",
      repoName: "ai-toolkit",
      language: "C++",
      stars: 150,
      timeAgo: "3 days ago",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/4?v=4",
      username: "user4",
      repoName: "ai-toolkit",
      language: "C++",
      stars: 150,
      timeAgo: "3 days ago",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/4?v=4",
      username: "user4",
      repoName: "ai-toolkit",
      language: "C++",
      stars: 150,
      timeAgo: "3 days ago",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/4?v=4",
      username: "user4",
      repoName: "ai-toolkit",
      language: "C++",
      stars: 150,
      timeAgo: "3 days ago",
    },
  ];

  return (
    <div className="home-content text-white ">
      <HomeContentHeader />
      {loading ? (
        <GifLoader />
      ) : (
        <div className="flex flex-col space-y-6">
          {starredRepo.map((repo, index) => (
            <StarredRepoCard
              key={index}
              avatarUrl={repo.avatarUrl}
              username={repo.username}
              repoName={repo.repoName}
              language={repo.language}
              stars={repo.stars}
              timeAgo={repo.timeAgo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
