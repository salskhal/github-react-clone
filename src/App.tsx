import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}
