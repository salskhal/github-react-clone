import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function RepoContent() {
  const { username } = useParams();

  const currentProfile = useUserStore((state) => state.currentProfile);

  const { getUserProfile, loading } = useUserProfile();

  useEffect(() => {
    const query = username;

    if (query) {
      getUserProfile({ variables: { username: query } });
    }
  }, [getUserProfile, username]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {/* <h1>{currentProfile?.name}</h1>
      <p>{currentProfile?.bio}</p> */}
        <h1>{currentProfile?.name}</h1>
        <p>{currentProfile?.bio}</p>

        <div>
          <h2>Followers: {currentProfile?.followers.totalCount}</h2>
          <h2>Following: {currentProfile?.following.totalCount}</h2>
          <h2>
            Starred Repos: {currentProfile?.starredRepositories.totalCount}
          </h2>
        </div>

        <div>
          <h2>Location: {currentProfile?.location}</h2>
          <h2>Twitter: {currentProfile?.twitterUsername}</h2>
          <h2>Website: {currentProfile?.websiteUrl}</h2>
          <h2>Projects: {currentProfile?.projects.totalCount}</h2>
          <h2>Repos: {currentProfile?.repositories.totalCount}</h2>
          <h2>Packages: {currentProfile?.packages.totalCount}</h2>
        </div>

        <div>
          <h2>Company: {currentProfile?.company}</h2>
          <h2>Email: {currentProfile?.email}</h2>

          <h2>
            <a href={currentProfile?.url}>Github</a>
          </h2>

          <div>
            {currentProfile?.companyHTML && (
              <div
                dangerouslySetInnerHTML={{
                  __html: currentProfile?.companyHTML,
                }}
              />
            )}
          </div>

          <div>
            {currentProfile?.bioHTML && (
              <div
                dangerouslySetInnerHTML={{
                  __html: currentProfile?.bioHTML,
                }}
              />
            )}
          </div>

          <h2>Readme</h2>
        </div>
      </div>
    </div>
  );
}
