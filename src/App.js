import * as React from "react";
import { Routes, Route, Outlet, Link} from "react-router-dom";
import "antd/dist/antd.css";
import LayoutYoo from "./components/LayoutGrand";
import Admin from "./components/Features/Admin/Admin";
import Departments from "./components/Features/Departments/Departments";
import Guild from "./components/Features/Guild/Guild";
import AboutBulera from "./components/Features/AboutBulera/AboutUs";
import HomePage from "./components/Home/Home";
import OnlineApplication from "./components/Features/OnlineApplications/OnlineApplic";
function App() {
  return (
    <div>
     <Routes >
        <Route path="/" element={<LayoutYoo/>}>
          <Route index path="/home" element={<HomePage />} />
          <Route path="/administrators" element={<Admin />}/>
          <Route path="/departments" element={<Departments />}/>
          <Route path="/guild" element={<Guild />}/>
          <Route path="/about-us" element={<AboutBulera />} />
          <Route path="/online-application" element={<OnlineApplication/>} />
        </Route>
      </Routes>
    </div>
    );
}

export default App;
