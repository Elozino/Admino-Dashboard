import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/UserPage/User";
import NewUser from "./Pages/NewUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/new-user" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
