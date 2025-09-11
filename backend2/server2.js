const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

// เสิร์ฟไฟล์ static (เช่น index.html)
app.use(express.static(__dirname));

// ตั้งค่า multer ให้เก็บไฟล์อัปโหลด
const upload = multer({ dest: "uploads/" });

// API: อัปโหลด CSV และแปลงเป็น JSON
app.post("/api/import-csv", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // เขียนผลลัพธ์ลงไฟล์ JSON (เช่น submissions.json)
      const jsonDir = path.join(__dirname, "data");
      if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });

      const jsonPath = path.join(jsonDir, "submissions.json");
      fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), "utf-8");

      res.json({
        message: "CSV imported successfully",
        total: results.length,
        savedTo: "data/submissions.json",
      });
    });
});

// ให้ server รันได้
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
