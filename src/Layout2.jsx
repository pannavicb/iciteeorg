// ใน Layout2.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Headersub from "./components/headersub"; // แก้ไขการนำเข้าให้ตรง
import { Footer } from "components/Footer";

const Layout2 = ({ data }) => { // รับข้อมูลจาก props
  return (
    <div>
      {/* แสดง Header */}
      <Headersub/>
      {/* แสดง Navigation */}
   
      {/* แสดงคอมโพเนนต์ที่กำหนดใน route ด้วย Outlet */}
      <main>
        <Outlet />
      </main>
       {/* แสดง Footer */}
       <Footer/>

    </div>
  );
};

export default Layout2;
