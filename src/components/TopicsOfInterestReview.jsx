import React, { useState } from "react";

const ResearchList = () => {
  const researches = [
    {
      title: "AI for Smart Education",
      detail: {
        abstract: {
          th: "งานวิจัยนี้มุ่งเน้นการใช้ปัญญาประดิษฐ์เพื่อปรับปรุงการเรียนรู้และการประเมินผลในสถาบันการศึกษา",
          en: "This research focuses on applying artificial intelligence to enhance learning and assessment in educational institutions."
        },
        objective: {
          th: "เพื่อพัฒนาระบบการเรียนการสอนที่สามารถปรับเปลี่ยนตามความสามารถของผู้เรียนแบบรายบุคคล",
          en: "To develop an adaptive learning system that personalizes education according to individual learners' abilities."
        },
        methodology: {
          th: "ใช้ Machine Learning ในการวิเคราะห์พฤติกรรมการเรียนรู้และสร้างโมเดลการเรียนรู้แบบ Personalized Learning",
          en: "Machine learning techniques were employed to analyze learning behaviors and build personalized learning models."
        },
        results: {
          th: "ผู้เรียนสามารถเข้าใจบทเรียนได้ดีขึ้น มีความก้าวหน้าการเรียนรู้สูงขึ้นกว่า 25%",
          en: "Learners showed better understanding of lessons with over 25% improvement in learning progression."
        },
        conclusion: {
          th: "AI ช่วยสนับสนุนการเรียนการสอนที่มีประสิทธิภาพ และสามารถนำไปปรับใช้ในสถานศึกษาได้จริง",
          en: "AI effectively supports education and can be practically implemented in real educational institutions."
        }
      }
    },
    {
      title: "IoT in Smart Cities",
      detail: {
        abstract: {
          th: "งานวิจัยนี้นำ IoT มาใช้เพื่อติดตามสภาพอากาศ การจราจร และการใช้พลังงานในเมืองอัจฉริยะ",
          en: "This research integrates IoT to monitor weather conditions, traffic, and energy consumption in smart cities."
        },
        objective: {
          th: "เพื่อเพิ่มประสิทธิภาพในการจัดการเมืองและยกระดับคุณภาพชีวิตประชาชน",
          en: "To improve urban management efficiency and enhance citizens' quality of life."
        },
        methodology: {
          th: "ติดตั้งเซนเซอร์ IoT สำหรับตรวจวัดอุณหภูมิ มลพิษ และการใช้พลังงาน เชื่อมต่อเข้ากับระบบ Cloud",
          en: "IoT sensors were installed to measure temperature, pollution, and energy usage, connected to a cloud system."
        },
        results: {
          th: "สามารถลดการใช้พลังงานลงได้ 18% และลดเวลาการจราจรติดขัดเฉลี่ย 12 นาทีต่อวัน",
          en: "Energy consumption was reduced by 18% and average traffic congestion decreased by 12 minutes per day."
        },
        conclusion: {
          th: "IoT เป็นหัวใจสำคัญในการพัฒนาเมืองอัจฉริยะที่ยั่งยืนและมีประสิทธิภาพ",
          en: "IoT is a key enabler for developing sustainable and efficient smart cities."
        }
      }
    },
    // ... (เพิ่มเรื่องอื่นๆ ตามที่คุณเตรียมไว้ได้เลย)
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bgColors = ["bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50", "bg-purple-50"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        </h2>

        <div className="space-y-6">
          {researches.map((item, index) => (
            <div
              key={index}
              className={`${bgColors[index % bgColors.length]} border rounded-2xl shadow-lg p-6 transition duration-200 hover:shadow-xl`}
            >
              {/* หัวข้อ */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDetail(index)}
              >
                <span className="font-semibold text-xl text-gray-800">{item.title}</span>
                <span className="text-2xl font-bold text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* รายละเอียด */}
              {openIndex === index && (
                <div className="mt-5 text-gray-800 leading-relaxed space-y-4 bg-white p-5 rounded-xl shadow-inner">
                  {Object.entries(item.detail).map(([section, content], i) => (
                    <div key={i} className="border-b pb-3">
                      <p className="font-bold capitalize text-gray-900">
                        {section === "abstract"
                          ? "Abstract / บทคัดย่อ"
                          : section === "objective"
                          ? "Objective / วัตถุประสงค์"
                          : section === "methodology"
                          ? "Methodology / วิธีการวิจัย"
                          : section === "results"
                          ? "Results / ผลลัพธ์"
                          : "Conclusion / สรุป"}
                      </p>
                      <p className="text-gray-700"> {content.th}</p>
                      <p className="italic text-gray-600"> {content.en}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        </h2>        
      </div>
    </div>
  );
};

export default ResearchList;
