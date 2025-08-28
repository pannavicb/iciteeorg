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
    {
      title: "Blockchain for Healthcare",
      detail: {
        abstract: {
          th: "การนำบล็อกเชนมาใช้เพื่อเพิ่มความปลอดภัย ความโปร่งใส และประสิทธิภาพในการจัดเก็บข้อมูลสุขภาพ",
          en: "This study applies blockchain to enhance security, transparency, and efficiency in healthcare data management."
        },
        objective: {
          th: "เพื่อสร้างระบบการจัดเก็บและแลกเปลี่ยนข้อมูลสุขภาพที่ปลอดภัยและเชื่อถือได้",
          en: "To establish a secure and reliable system for storing and exchanging healthcare data."
        },
        methodology: {
          th: "ใช้ Smart Contract และระบบเข้ารหัสข้อมูลเพื่อจัดการสิทธิ์การเข้าถึงของผู้ป่วยและแพทย์",
          en: "Smart contracts and encryption techniques were used to manage access rights of patients and medical staff."
        },
        results: {
          th: "ลดความเสี่ยงข้อมูลรั่วไหลลงกว่า 40% และเพิ่มความน่าเชื่อถือในการใช้งานของโรงพยาบาล",
          en: "Data leakage risk was reduced by over 40%, increasing hospitals’ trust and usability."
        },
        conclusion: {
          th: "Blockchain สามารถช่วยยกระดับระบบสาธารณสุขด้วยความปลอดภัยและความโปร่งใส",
          en: "Blockchain can significantly improve healthcare systems with enhanced security and transparency."
        }
      }
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">    
        </h2>

        <div className="space-y-3">
          {researches.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl shadow p-5 bg-white transition duration-200 hover:shadow-md"
            >
              {/* หัวข้อ */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDetail(index)}
              >
                <span className="font-semibold text-xl">{item.title}</span>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* รายละเอียดแบบวิจัยทางการ */}
              {openIndex === index && (
                <div className="mt-4 text-gray-800 leading-relaxed space-y-3">
                  {Object.entries(item.detail).map(([section, content], i) => (
                    <div key={i}>
                      <p className="font-bold capitalize">
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
                      <p className="text-gray-700">🇹🇭 {content.th}</p>
                      <p className="italic text-gray-600">🇬🇧 {content.en}</p>
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
