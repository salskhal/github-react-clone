

const StarredRepoCard = ({
  avatarUrl,
  username,
  repoName,
  language,
  stars,
  timeAgo,
}: StarredRepoCardProps) => {
  return (
    <div className="p-4 bg-[#0d1117] border border-[#303636] text-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="text-sm">
            <span className="font-bold">{username}</span> starred a repository
          </div>
          <div className="text-xs text-gray-400">{timeAgo}</div>
        </div>
      </div>

      <div className="mt-3 p-3 bg-[#161b22] rounded-md">
        <p
          className="text-blue-400 font-bold text-sm"
          rel="noopener noreferrer"
        >
          {repoName}
        </p>
        <div className="flex items-center mt-2">
          <span className="inline-flex items-center text-xs text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 mr-1"
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
            {language}
          </span>
          <span className="inline-flex items-center text-xs text-gray-400 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.5a2.5 2.5 0 00-5 0V7H5v5H3v2h2v7h2v-7h2V7h1.5a2.5 2.5 0 005 0V7h1.5V5.5a2.5 2.5 0 10-5 0V7h-1v-.5z"
              />
            </svg>
            {stars}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StarredRepoCard;
