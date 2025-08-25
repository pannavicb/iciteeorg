import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";
import Layout4 from "./Layout4";
import Layout5 from "./Layout5";
import Layout6 from "./Layout6";
import Layout7 from "./Layout7";
import Layout8 from "./Layout8";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
// import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
// import { Team3 } from "./components/Team3";
import { Team4 } from "./components/Team4";
import { Contact } from "./components/contact";
// import { Gallery } from "components/gallery";
import PaperSubmissionGuidelines from "./components/PaperSubmissionGuidelines"
import { TopicsOfInterest } from "./components/TopicsOfInterest";
import { OrganizeCommittee } from "./components/OrganizeCommittee";
import QualityControlPage from "./components/QualityControl";
import Announcement from "./components/ProgressTimeline";
import AnnouncementDetail from "./components/ProgressTimelineDetail";
import PastConference from "./components/PastConferences";
import JsonData from "./data/data.json";
// import VisitorCounter from "./components/visitor-update";  // นำเข้าฟังก์ชัน VisitorCounter
import "./App.css";
import { Gallery } from "components/gallery";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <HelmetProvider>
    <Router>
      <AppContent landingPageData={landingPageData} />
    </Router>
    </HelmetProvider>
  );
};

const AppContent = ({ landingPageData }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <HelmetProvider>
    <>
            {/* ตั้งค่า Favicon */}
       <Helmet>
        <title>ICITEE 2025: 17th International Conference on Information Technology and Electrical Engineering., IT KMITL Conferences, Bangkok , Thailand.</title>
        <link rel="icon" type="image/png" href="img/logo.png" />
      </Helmet>

      {/* แสดง Header เฉพาะหน้า "/" */}
      {isHomePage && <Header data={landingPageData.Header} />}
      {/* // && <Announcement data={landingPageData.Team} />  } */}
      <Navigation />
      <Routes>
        <Route path="/" element={<About data={landingPageData.About} />} />
        {/* <Route path="/topics-of-interest" element={<TopicsOfInterest />} /> */}

        <Route path="/organizing-committee" element={<Layout2 data={landingPageData} />}>
          <Route index element={<OrganizeCommittee data={landingPageData.OrganizeCommittee} />} />
        </Route>

        <Route path="/quality-control-management" element={<Layout4 data={landingPageData} />}>
          <Route index element={<QualityControlPage data={landingPageData.Quality} />} />
        </Route>

        <Route path="/topics-of-interest" element={<Layout3 data={landingPageData} />}>
          <Route index element={<TopicsOfInterest data={landingPageData.Quality} />} />
        </Route>

        <Route path="/paper-submission-guidelines" element={<Layout8 data={landingPageData} />}>
          <Route index element={<PaperSubmissionGuidelines data={landingPageData.Quality} />} />
        </Route>

        <Route path="/announcement" element={<Layout5 data={landingPageData} />}>
          <Route index element={<AnnouncementDetail data={landingPageData.Quality} />} />
        </Route>

        <Route path="/gallery" element={<Layout6 data={landingPageData} />}>
          <Route index element={<Gallery data={landingPageData.Gallery} />} />
        </Route>      

        <Route path="/pass-conference" element={<Layout7 data={landingPageData} />}>
          <Route index element={<PastConference data={landingPageData.Gallery} />} />
        </Route>    

      </Routes>

      {/* แสดงข้อมูล VisitorCounter และ Team2 Team1 Contact เฉพาะหน้า "/" */}
      {isHomePage && (
        <>    
          <Announcement data={landingPageData.Team} />               
          {/* <Gallery/> */}
          <Team2 data={landingPageData.Team} />
          {/* <Team3 data={landingPageData.Team3} /> */}
          {/* <Team1 data={landingPageData.Team2} />   */}
          <Team4 data={landingPageData.Team4} />   
          {/* <Team3 data={landingPageData.Team3} />     */}
          {/* <VisitorCounter data={landingPageData}/>        */}
          <Contact data={landingPageData.Contact} />          
        </>
      )}    
    </> 
    </HelmetProvider>
  );
};

export default App;
