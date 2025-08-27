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
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">หัวข้องานวิจัย</h2>
      <div className="space-y-2">
        {researches.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow p-3 bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDetail(index)}
            >
              <span className="font-semibold">{item.title}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchList;
