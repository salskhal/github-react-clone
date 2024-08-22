// useSearchUsers.ts
import { gql, useLazyQuery } from '@apollo/client';
import { useUserStore } from '../store/userStore';

const SEARCH_USERS = gql`
  query SearchUsers($query: String!, $first: Int!) {
    search(query: $query, type: USER, first: $first) {
      userCount
      edges {
        node {
          ... on User {
            id
            name
            login
            avatarUrl
            bio
            location
            email
            url
            repositories {
              totalCount
            }
            followers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const useSearchUsers = () => {
  const setSearchResults = useUserStore((state) => state.setSearchResults);
  
  const setUserCount = useUserStore((state) => state.setUserCount);

  const [searchUsers, { loading, error }] = useLazyQuery(SEARCH_USERS, {
    onCompleted: (data) => {
      setSearchResults(data.search.edges.map((edge: UserEdge) => edge.node));
      setUserCount(data.search.userCount);
    },
  });



  return { searchUsers, loading, error };
};  