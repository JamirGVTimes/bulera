import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "antd/dist/antd.css";
import LayoutYoo from "./components/LayoutGrand";
import Admin from "./components/Features/Admin/Admin";
import Departments from "./components/Features/Departments/Departments";
import Guild from "./components/Features/Guild/Guild";
import AboutBulera from "./components/Features/AboutBulera/AboutUs";
import HomePage from "./components/Home/Home";
import OnlineApplication from "./components/Features/OnlineApplications/OnlineApplic";
import DepartmentsHome from "./components/Features/Departments/DepartmentsHome";
import Ict from "./components/Features/Departments/Ict";


function App() {
  const dpo = {
    id:1,
    title: "DPO",
    titleFull: "Deputy Principal Outreach",
    email: "cctmargaret@gmail.com",
    name: "Khaitsa Margaret",
    contact: "0772302814",
    joined: "March-2019",
    Img:"./Pics/Ndabirawo_Isaac.jpg",
    published: (
      <>
        <ul>
          <li>http://amazon.haitsa.org</li>
          <li>http://childbehaviorskills.org</li>
        </ul>
      </>
    )
  };
  const princ = {
    id:2,
    title: "Principal",
    titleFull: "Principal",
    email: "okellohumphreys@gmail.com",
    name: "Okello Humphreys",
    contact: "0772618070",
    joined: "October-2020",
    Img:"./Pics/Ndabirawo_Isaac.jpg",
    published: (
      <>
        <ul>
          <li>http://amazon.Humphreys.org</li>
          <li>http://amazon.Humphreys.org</li>
        </ul>
      </>
    )
  };
  const dpp = {
    id:3,
    title: "DPP",
    titleFull: "Deputy Principal Pre-Service",
    email: "byaruhangasalvatore@gmail.com",
    name: "Byaruhanga A Salvatore",
    contact: "0772352812",
    joined: "January-2001",
    Img:"./Pics/Ndabirawo_Isaac.jpg",
    published: (
      <>
        <ul>
          <li>http://buleraportal.admissions.org</li>
          <li>http://amazon.alinda.org</li>
        </ul>
      </>
    )
  };
  const ICTInstr = {
    id: 4,
    title: "ICT",
    titleFull: "ICT Instructor",
    email: "bgimahoodinc@gmail.com",
    name: "Jamir Muhumuza",
    contact: "0774-058894",
    joined: "February - 2021",
    Img: "nul",
    published: (
      <>
        <ul>
          <li>https:jamirGVTimes/github.io</li>
          <li> https:jamirGVTimes/github.io/bgimahoodinc </li>
          <li> https:jamirGVTimes/github.io/buleracoreptc</li>
        </ul>
      </>
    )
 }
  return (
    <div>
     <Routes >
        <Route path="/" element={<LayoutYoo />}>
          <Route index element={<HomePage />} />
          <Route path="/administrators" element={
            <Admin
              dpo={dpo}
              dpp={dpp}
              princ={princ}
            />
          } />
          <Route path="/departments" element={<Departments />}>
            <Route index element={<DepartmentsHome />}/>
            <Route path="/departments/ICT" element={
              <Ict
                ICTInstr={ICTInstr}
              />
            } />
          </Route>
          <Route path="/guild" element={<Guild />}/>
          <Route path="/about-us" element={<AboutBulera />} />
          <Route path="/online-application" element={<OnlineApplication/>} />
        </Route>
      </Routes>
      
    </div>
    );
}

export default App;
