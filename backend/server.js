const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

// ใช้ CORS เพื่อให้สามารถเข้าถึง API จากโดเมนอื่น
app.use(cors());

// รองรับการรับข้อมูลในรูปแบบ JSON
app.use(express.json());

// กำหนด path ของไฟล์ข้อมูลผู้เข้าชม
const filePath = path.join(__dirname, "visitor_count.json");

// ฟังก์ชันสำหรับอ่านข้อมูลจากไฟล์
const readVisitorData = async () => {
  try {
    if (!fs.existsSync(filePath)) {
      return { count: 0, countryData: [] };
    }
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading visitor data:", error);
    return { count: 0, countryData: [] }; // ใช้ค่าเริ่มต้น
  }
};

// ฟังก์ชันสำหรับเขียนข้อมูลไปยังไฟล์ (ใช้ไฟล์ชั่วคราวป้องกันไฟล์เสียหาย)
const writeVisitorData = async (visitorData) => {
  const tempPath = filePath + ".tmp";
  try {
    await fs.promises.writeFile(tempPath, JSON.stringify(visitorData, null, 2));
    await fs.promises.rename(tempPath, filePath);
  } catch (error) {
    console.error("Error writing visitor data:", error);
    throw error;
  }
};

// API สำหรับการเพิ่มจำนวนผู้เข้าชมพร้อมข้อมูลประเทศ
app.post("/api/visitor", async (req, res) => {
  const { country } = req.body;

  if (!country || typeof country !== "string") {
    return res.status(400).json({ message: "Invalid country data" });
  }

  try {
    let visitorData = await readVisitorData();

    // เพิ่มจำนวนผู้เข้าชมโดยรวม
    visitorData.count += 1;

    // ตรวจสอบว่าประเทศนี้มีการเยี่ยมชมแล้วหรือไม่
    const existingCountry = visitorData.countryData.find((item) => item.name === country);
    if (existingCountry) {
      existingCountry.count += 1;
    } else {
      visitorData.countryData.push({ name: country, count: 1 });
    }

    // กำจัดข้อมูลที่ไม่มี 'name' หรือ 'count'
    visitorData.countryData = visitorData.countryData.filter(
      (item) => item.name && item.count
    );

    // เขียนข้อมูลกลับไปยังไฟล์
    await writeVisitorData(visitorData);

    return res.status(200).json({
      message: "Visitor count updated",
      count: visitorData.count,
      countryData: visitorData.countryData,
    });
  } catch (err) {
    console.error("Error handling visitor data:", err);
    return res.status(500).json({ message: "Error updating visitor data" });
  }
});

// API สำหรับดึงจำนวนผู้เข้าชมและจำนวนผู้เข้าชมจากแต่ละประเทศ
app.get("/api/visitor", async (req, res) => {
  try {
    const visitorData = await readVisitorData();

    // กำจัดข้อมูลที่ไม่มี 'name' หรือ 'count'
    visitorData.countryData = visitorData.countryData.filter(
      (item) => item.name && item.count
    );

    return res.status(200).json({
      count: visitorData.count,
      countryData: visitorData.countryData,
    });
  } catch (err) {
    console.error("Error reading visitor data:", err);
    return res.status(500).json({ message: "Error reading visitor data" });
  }
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
