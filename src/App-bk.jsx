import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
import { Contact } from "./components/contact";
import { TopicsOfInterest } from "./components/TopicsOfInterest"; // ✅ เพิ่มหน้า Topics of Interest
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
      <Header data={landingPageData.Header} /> {/* ✅ Header คงที่ */}

      <Routes>
        <Route path="/" element={<About data={landingPageData.About} />} />
        <Route path="/team1" element={<Team1 data={landingPageData.Team} />} />
        <Route path="/team2" element={<Team2 data={landingPageData.Team2} />} />
        <Route path="/topics-of-interest" element={<TopicsOfInterest />} /> {/* ✅ เพิ่ม Route ใหม่ */}
      </Routes>

      <Contact data={landingPageData.Contact} /> {/* ✅ Contact คงที่ */}
    </Router>
  );
};

export default App;
