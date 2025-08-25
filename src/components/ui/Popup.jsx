import React, { useEffect } from 'react';

const Popup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 30000); // ปิด pop-up หลังจาก 30 วินาที

    return () => clearTimeout(timer); // ทำความสะอาด timer เมื่อ unmount
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0)', // พื้นหลังโปร่งแสง
        border: '1px solid #ddd', // สีกรอบที่อ่อนกว่า
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        width: '80%',  // กำหนดขนาดของ popup
        maxWidth: '600px', // จำกัดความกว้างสูงสุด
        aspectRatio: '16 / 9', // ควบคุมอัตราส่วน
        textAlign: 'center', // จัดกึ่งกลางข้อความ
        borderRadius: '10px', // ขอบกลม
      }}
    >
      {/* แสดงรูปภาพ banner */}
      {/* <img
        src="img/conference_brand.png"  // เปลี่ยนเป็น URL ของรูปภาพของคุณ      
        alt="Banner"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',  // ขอบรูปให้โค้งเล็กน้อย
        }}
      /> */}

      <a href="/topics-of-interest" style={{ textDecoration: 'none' }}>
        <img
          src="img/ICITEE 2025_02_ Special_Session.jpg" // เปลี่ยนเป็น URL ของรูปภาพของคุณ
          alt="Banner"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px', // ขอบรูปให้โค้งเล็กน้อย
            display: 'block' // ป้องกันช่องว่างใต้รูป
          }}
        />
      </a>

      {/* ปุ่มปิด (กากบาท) */}
      <span
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '24px',
          color: '#333',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        &times; {/* สัญลักษณ์กากบาท */}
      </span>
    </div>
  );
};

export default Popup;
