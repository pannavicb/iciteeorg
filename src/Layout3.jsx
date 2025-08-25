// ใน Layout2.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Headersub from "./components/headersub2"; // แก้ไขการนำเข้าให้ตรง
import { Navigation } from "./components/navigation"; // นำเข้า Navigation
import { Footer } from "components/Footer";

const Layout3 = ({ data }) => { // รับข้อมูลจาก props
  return (
    <div>
      {/* แสดง Header */}
      <Headersub data={data.Header} />
      {/* แสดง Navigation */}
      <Navigation />
      {/* แสดงคอมโพเนนต์ที่กำหนดใน route ด้วย Outlet */}
      <main>
        <Outlet />
      </main>
       {/* แสดง Footer */}
       <Footer/>
      
    </div>
  );
};

export default Layout3;
