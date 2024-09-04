import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { useUserProfile } from "../../hooks/useUserProfile";
import {
  FollowersIcon,
  LinkIcon,
  LocationIcon,
  OrganizationIcon,
} from "../icons";

export default function RepoContent() {
  const { username } = useParams();

  console.log(username);

  const currentProfile = useUserStore((state) => state.currentProfile);

  console.log(currentProfile);

  const { getUserProfile, loading } = useUserProfile();

  useEffect(() => {
    const query = username;

    useUserStore.setState({ currentProfile: undefined });

    if (query) {
      getUserProfile({ variables: { username: query } }).catch((error) => {
        console.error("Failed to fetch user profile:", error);
      });
    }
  }, [getUserProfile, username]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="md:col-span-1 p-10">
      <div className="flex items-center rounded-full overflow-hidden">
        <img
          src={currentProfile?.avatarUrl}
          alt={currentProfile?.name}
          className="w-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-white">
          {currentProfile?.name}
        </h1>
        <p className="text-xl font-light text-[#9198a1]">
          {currentProfile?.login}
        </p>
      </div>

      <button className="bg-[#212830] w-full px-2 py-1 border border-[#3d444d] rounded-md text-white mt-2">
        <span>Follow</span>
      </button>

      {currentProfile?.bioHTML && (
        <div
          className="text-white"
          dangerouslySetInnerHTML={{ __html: currentProfile?.bioHTML }}
        ></div>
      )}

      <div className="flex items-center space-x-2 text-white mt-2">
        <FollowersIcon />
        <p>
          {" "}
          {currentProfile?.followers?.totalCount || 0} <span>followers</span>
        </p>
        <span>·</span>
        <p>
          {currentProfile?.following?.totalCount || 0} <span>following</span>
        </p>
      </div>

      <div className="mt-4 space-y-2 text-gray-400">
        {currentProfile?.company && (
          <div className="flex items-center gap-2">
            <OrganizationIcon />
            <h2>{currentProfile?.company}</h2>
          </div>
        )}
        {currentProfile?.email && (
          <div className="flex items-center gap-2">
            <OrganizationIcon />
            <h2>{currentProfile?.email}</h2>
          </div>
        )}

        {currentProfile?.location && (
          <div className="flex items-center gap-2">
            <LocationIcon />
            <h2>{currentProfile?.location}</h2>
          </div>
        )}

        {currentProfile?.websiteUrl && (
          <a href={currentProfile?.websiteUrl} className="flex items-center gap-2" target="_blank">
            <LinkIcon />
            <h2>{currentProfile?.websiteUrl}</h2>
          </a>
        )}

        
        <LinkIcon />
        <h2>Location: {currentProfile?.location}</h2>
        {currentProfile?.twitterUsername && (
          <h2>Twitter: {currentProfile?.twitterUsername}</h2>
        )}
        <h2>
          Website: {currentProfile?.websiteUrl || "Website not available"}
        </h2>
      </div>
    </div>
  );
}
