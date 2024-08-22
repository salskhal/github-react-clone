// useUserProfile.ts
import { gql, useLazyQuery } from '@apollo/client';
import { useUserStore } from '../store/userStore';

const USER_PROFILE = gql`
  query userProfile($username: String!) {
    user(login: $username) {
      login
      name
      company
      companyHTML
      avatarUrl
      bio
      bioHTML
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      location
      twitterUsername
      websiteUrl
      url
      projects(first: 0) {
        totalCount
      }
      repositories(first: 0) {
        totalCount
        nodes {
          name
        }
      }
      packages(first: 0) {
        totalCount
      }
    }
    repository(owner: $username, name: $username) {
      name
      object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;

export const useUserProfile = () => {

  const setCurrentProfile = useUserStore((state) => state.setCurrentProfile);
  const setCurrentProfileReadme = useUserStore((state) => state.setCurrentProfileReadme);

  const [getUserProfile, {  loading, error }] = useLazyQuery(USER_PROFILE, {
    onCompleted: (data) => {
      setCurrentProfile(data.user);
      setCurrentProfileReadme(data.repository.object.text);
    },
  });

  return { getUserProfile, loading, error };
};