import SearchSidebar from "../components/SearchSidebar";
import SearchContent from "../components/SearchContent";
import SearchRightSidebar from "../components/SearchRightSidebar";

export default function Search() {
  return (
    <main className="flex h-screen w-full">
      <SearchSidebar />
      <div className="flex size-full flex-col" >
        <div className="search">
          <SearchContent />
          <SearchRightSidebar />
        </div>
      </div>
    </main>
  );
}
