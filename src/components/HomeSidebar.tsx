
import { Link } from "react-router-dom";
import UserList from "./UserList";

export default function HomeSidebar() {
  return (
    <div className="sidebar">
      <div>
      Sidebar
      <Link to="/search">
        {" "}
        <p className="text-white">Search</p>{" "}
      </Link>

      {/* <UserList /> */}
      </div>
      
    </div>
  );
}
