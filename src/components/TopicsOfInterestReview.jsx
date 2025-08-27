import React, { useState } from "react";

const ResearchList = () => {
  const researches = [
    {
      title: "AI for Smart Education",
      detail:
        "งานวิจัยนี้มุ่งเน้นการใช้ปัญญาประดิษฐ์เพื่อปรับปรุงการเรียนรู้และการประเมินผลในสถาบันการศึกษา"
    },
    {
      title: "IoT in Smart Cities",
      detail:
        "งานวิจัยนี้นำ IoT มาใช้เพื่อติดตามสภาพอากาศ การจราจร และการใช้พลังงานในเมืองอัจฉริยะ"
    },
    {
      title: "Blockchain for Healthcare",
      detail:
        "การนำบล็อกเชนมาใช้เพื่อเพิ่มความปลอดภัย ความโปร่งใส และประสิทธิภาพในการจัดเก็บข้อมูลสุขภาพ"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl text-center">
        {/* หัวข้อกลางจอ */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">          
        </h2>

        <div className="space-y-3">
          {researches.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl shadow p-4 bg-white transition duration-200 hover:shadow-md"
            >
              {/* แถวหัวข้อ + ปุ่ม + */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDetail(index)}
              >
                <span className="font-semibold text-lg">{item.title}</span>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* รายละเอียด */}
              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">          
        </h2>
    </div>
  );
};

export default ResearchList;
