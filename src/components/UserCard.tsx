import { Link } from "react-router-dom";
import { RepoIcon, FollowersIcon } from "./icons";

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex  border border-[#30363d] rounded-md p-4 justify-between">
      <div className="flex gap-6">
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
      <div>
        <button className="bg-[#21262d] text-white border border-[#30263d] px-2 py-1  text-sm rounded-md">
          Follow
        </button>
      </div>
    </div>
    // <div className="flex border border-[#30363d] rounded-md p-4 justify-between items-start gap-4 sm:gap-6">
    //   <div className="flex gap-4  ">
    //     {user.avatarUrl && (
    //       <img
    //         src={user.avatarUrl}
    //         alt={user.login}
    //         className="w-12 h-12 object-cover border border-[#303636] rounded-full"
    //       />
    //     )}

    //     <div className="flex flex-col">
    //       <div className="flex items-center space-x-1">
    //         {user.name && (
    //           <Link
    //             to={`/profile/${user.login}`}
    //             className="text-blue-600 hover:underline font-semibold text-sm md:text-base"
    //           >
    //             <h3>{user.name}</h3>
    //           </Link>
    //         )}
    //         {user.login && (
    //           <Link
    //             to={`/profile/${user.login}`}
    //             className="text-[#8d96a0] hover:underline text-sm md:text-base"
    //           >
    //             <h4>{user.login}</h4>
    //           </Link>
    //         )}
    //       </div>
    //       {user.bio && <p className="text-white mt-2">{user.bio}</p>}
    //       <div className="flex flex-wrap text-white items-center space-x-4 mt-3">
    //         {user.location && <p className="text-sm">{user.location}</p>}
    //         {user.repositories?.totalCount !== undefined && (
    //           <p className="text-sm flex items-center gap-1">
    //             <RepoIcon /> {user.repositories.totalCount}
    //           </p>
    //         )}
    //         {user.followers?.totalCount !== undefined && (
    //           <p className="text-sm flex items-center gap-1">
    //             <FollowersIcon /> {user.followers.totalCount}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <button className="bg-[#21262d] text-white border border-[#30263d] px-4 py-1 text-sm rounded-md hover:bg-[#30363d] transition">
    //       Follow
    //     </button>
    //   </div>
    // </div>
  );
}
