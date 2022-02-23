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
  const topAdmin = [
    {
      id: 1,
      title: "DPO",
      titleFull: "Deputy Principal Outreach",
      email: "cctmargaret@gmail.com",
      name: "Khaitsa Margaret",
      contact: "0772302814",
      joined: "March-2019",
      published: (
        <>
          <ul>
            <li>http://amazon.haitsa.org</li>
            <li>http://childbehaviorskills.org</li>
          </ul>
        </>
      )
    },
      {
      id: 2,
      title: "Principal",
      titleFull: "Principal",
      email: "okellohumphreys@gmail.com",
      name: "Okello Humphreys",
      contact: "0772618070",
      joined: "October-2020",
      published: (
        <>
          <ul>
            <li>http://amazon.Humphreys.org</li>
            <li>http://amazon.Humphreys.org</li>
          </ul>
        </>
      )
    },
    
    {
      id: 3,     
      title: "DPP",
      titleFull: "Deputy Principal Pre-Service",
      email: "byaruhangasalvatore@gmail.com",
      name: "Byaruhanga A Salvatore",
      contact: "0772352812",
      joined: "January-2001",
      published: (
        <>
          <ul>
            <li>http://buleraportal.admissions.org</li>
            <li>http://amazon.alinda.org</li>
          </ul>
        </>
      )
    }
    ];
  return (
    <div>
     <Routes >
        <Route path="/" element={<LayoutYoo/>}>
          <Route index path="/home" element={<HomePage />} />
          <Route path="/administrators" element={<Admin topAdmin={topAdmin}/>}/>
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
