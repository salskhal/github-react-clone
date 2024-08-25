import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useSearchUsers } from "../hooks/useSearchUsers";
import UserCard from "./UserCard";
import GifLoader from "./GifLoader";

export default function SearchContent() {
  const [searchParams] = useSearchParams();


  const searchTerm = useUserStore((state) => state.searchTerm);

  const searchResults = useUserStore((state) => state.searchResults);

  const userCount = useUserStore((state) => state.userCount);
  
  const { searchUsers, loading } = useSearchUsers();

  console.log(searchResults);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      searchUsers({ variables: { query, first: 10 } });
    }
  }, [searchParams, searchUsers]);

  return (
    <div className="home-content">
      {loading ? (
        <GifLoader />
      ) : (
        <div className="">
          <h1 className="text-white text-2xl font-bold mb-5">
            Search results for "{searchTerm}" ({userCount} users found)
          </h1>
          <div className="flex flex-col gap-3">
            {searchResults.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
