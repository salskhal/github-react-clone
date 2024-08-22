import HomeContent from "../components/HomeContent";
import HomeRightSidebar from "../components/HomeRightSidebar";
import HomeSidebar from "../components/HomeSidebar";


export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <HomeSidebar />
      <div className="flex size-full flex-col">
        <div className="home">
          <HomeContent />
          <HomeRightSidebar />
        </div>
      </div>
    </main>
  );
}
