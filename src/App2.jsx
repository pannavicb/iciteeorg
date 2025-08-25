import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout2 from "./Layout2"; // ✅ Import Layout2 ให้ถูกต้อง
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
import { Contact } from "./components/contact";

import { OrganizeCommittee } from "./components/OrganizeCommittee"; // ✅ ตรวจสอบชื่อให้ถูกต้อง
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
 

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      
      <Navigation />
      <Routes>
      <Route path="/" element={<About data={landingPageData.About} />} />
        
        
        {/* ✅ ใช้ Layout2 เมื่อเข้าหน้า Organizing Committee */}
          <Route path="/organizing-committee" element={<Layout2 data={landingPageData} />}>
            <Route index element={<OrganizeCommittee data={landingPageData.OrganizeCommittee} />} />
          </Route>

      </Routes>
      <div>
        <Team2 data={landingPageData.Team} />
        <Team1 data={landingPageData.Team2} />
      </div>
      <Contact data={landingPageData.Contact} />
    </Router>
  );
};

export default App;
