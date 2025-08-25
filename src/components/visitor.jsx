import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa"; // ✅ ใช้ไอคอนแสดงว่าเป็น Counter

export function VisitorCounter() {
  const [visits, setVisits] = useState(() => {
    return Number(localStorage.getItem("visitCounter")) || 0;
  });

  useEffect(() => {
    setVisits((prevVisits) => {
      const newVisits = prevVisits + 1;
      localStorage.setItem("visitCounter", newVisits);
      return newVisits;
    });
  }, []);

  // 📅 ดึงวันที่ปัจจุบัน (ภาษาอังกฤษ และ ค.ศ.)
  const today = new Date();
  const thaiYear = today.getFullYear();
  const engYear = thaiYear - 0; // 543 แปลงจาก พ.ศ. เป็น ค.ศ.
  
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).replace(thaiYear, engYear); // แทนที่ปี พ.ศ. ด้วย ค.ศ.

  return (
    <div className="visitor-counter-container">
      <div className="visitor-counter-box">
        <FaUsers className="visitor-icon" />
        <p className="visitor-text">Visitor Count</p>
        <p className="visitor-number">{visits}</p>
        <p className="visitor-date">{dateString}</p>
      </div>
    </div>
  );
}
