import { Link } from "react-router-dom";
import { RepoIcon, FollowersIcon } from "./icons";

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex gap-6 border border-[#30363d] rounded-md p-4">
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.login}
          className="w-12 h-12 object-cover border border-[#303636] overflow-hidden rounded-full"
        />
      )}

      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          {user.name && (
            <Link
              to={`/profile/${user.login}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              <h3>{user.name}</h3>
            </Link>
          )}
          {user.login && (
            <Link
              // to={`/user/${user.login}`}
              to={`/profile/${user.login}`}
              className="text-[#8d96a0] hover:underline"
            >
              <h4>{user.login}</h4>
            </Link>
          )}
        </div>
        {user.bio && <p className="text-white">{user.bio}</p>}
        <div className="flex text-white items-center space-x-6">
          {user.location && <p>{user.location}</p>}
          {user.repositories?.totalCount !== undefined && (
            <p>
              <RepoIcon /> {user.repositories.totalCount}
            </p>
          )}
          {user.followers?.totalCount !== undefined && (
            <p>
              <FollowersIcon /> {user.followers.totalCount}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
