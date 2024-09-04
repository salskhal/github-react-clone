import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";


export default function App() {
  return (
    <div>
      <Header />
      {/* <div className="flex h-screen w-full"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/:username/" element={<Profile />} />
      </Routes>

      {/* </div> */}
    </div>
  );
}
