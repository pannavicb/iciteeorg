import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import HeaderSub from './components/headersub'; // import HeaderSub ที่จะใช้แทน Header ในบางเส้นทาง
import HeaderSub2 from './components/headersub2'; // import HeaderSub ที่จะใช้แทน Header ในบางเส้นทาง
import { About } from "./components/about";
import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
import { Contact } from "./components/contact";
import { TopicsOfInterest } from "./components/TopicsOfInterest";
import { OrganizeCommittee } from "./components/OrganizeCommittee";

import JsonData from "./data/data.json";
import "./App.css";

// สร้างคอมโพเนนท์ Wrapper ที่ใช้ useLocation ได้ภายใน <Router>
const AppContent = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const location = useLocation();

  // ระบุเส้นทางที่ไม่ต้องการ Header (ปรับให้ตรงกับความต้องการของคุณ)
  const noHeaderRoutes = ["/organizing-committee", "/topics-of-interest"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);


   // กำหนดเส้นทางที่ต้องการให้แสดง HeaderSub
   const headerSubRoutes = ["/organizing-committee"];

   // เลือก headerComponent โดยตรวจสอบว่า URL ปัจจุบันอยู่ใน headerSubRoutes หรือไม่
   const headerComponent = headerSubRoutes.includes(location.pathname)
     ? <HeaderSub data={landingPageData.HeaderSub} />
     : <Header data={landingPageData.Header} />
     ? <HeaderSub data={landingPageData.HeaderSub} />
     : <HeaderSub2 data={landingPageData.HeaderSub2}/>; 


        // กำหนดเส้นทางที่ต้องการให้แสดง HeaderSub2
   const headerSubRoutes2 = ["/topics-of-interest"];

   // เลือก headerComponent โดยตรวจสอบว่า URL ปัจจุบันอยู่ใน headerSubRoutes หรือไม่
   const headerComponent2 = headerSubRoutes2.includes(location.pathname)
     ? <HeaderSub2 data={landingPageData.HeaderSub2} />
     : <HeaderSub data={landingPageData.HeaderSub} />; 

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      {showHeader} {/* เฉพาะเส้นทางที่ไม่ได้อยู่ใน noHeaderRoutes */}
      {headerComponent }
      {headerComponent2 }

      <Routes>
        <Route path="/" element={<About data={landingPageData.About} />} />
        <Route path="/organizing-committee" element={<OrganizeCommittee />} />
        <Route path="/topics-of-interest" element={<TopicsOfInterest />} />
      </Routes>

      <Team1 data={landingPageData.Team} />
      <Team2 data={landingPageData.Team2} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
