import { gql, useQuery } from '@apollo/client';

// Define interfaces for our data structure
interface User {
  id: string;
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
}

interface UserEdge {
  node: User;
}

interface SearchResult {
  search: {
    userCount: number;
    edges: UserEdge[];
  }
}

const GET_USERS = gql`
  query GetUsers($first: Int!) {
    search(query: "type:user", type: USER, first: $first) {
      userCount
      edges {
        node {
          ... on User {
            id
            login
            name
            avatarUrl
            bio
          }
        }
      }
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery<SearchResult>(GET_USERS, {
    variables: { first: 10 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.search.edges.map(({ node }) => (
        <li key={node.id}>
          <img src={node.avatarUrl} alt={node.login} width="50" />
          <h3>{node.name || node.login}</h3>
          <p>{node.bio}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;