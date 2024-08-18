
import { Link } from "react-router-dom";

export default function HomeSidebar() {
  return (
    <div className="sidebar">
      <div>
      Sidebar
      <Link to="/search">
        {" "}
        <p className="text-white">Search</p>{" "}
      </Link>
      </div>
      
    </div>
  );
}
