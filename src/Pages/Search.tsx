import SearchSidebar from "../components/SearchSidebar";
import SearchContent from "../components/SearchContent";

export default function Search() {
  return (
    <main className="flex h-screen w-full bg-[#0d1117]">
      <SearchSidebar />
      <div className="flex size-full flex-col" >
        <div className="home">
          <SearchContent />
        </div>
      </div>
    </main>
  );
}
