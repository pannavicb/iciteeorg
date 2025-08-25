import { useLocation } from "react-router-dom";
import SEO from "./components/SEO";
import React, { useState } from "react";

const AppContent = ({ landingSEOPageData }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = "https://icitee2025.it.kmitl.ac.th";

  // ตั้งค่า language state เพื่อจัดการการเลือกภาษา
  const [language, setLanguage] = useState("en");

  // ตั้งค่า SEO Data ตามหน้า
  const seoData = {
    "/": {
      title: {
        en: "ICITEE 2025 - International Conference at King Mongkut's Institute of Technology Ladkrabang",
        th: "ICITEE 2025 - การประชุมวิชาการนานาชาติที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        ko: "ICITEE 2025 - 킹몽콧 기술대학교에서 열리는 국제 학술 대회",
        ja: "ICITEE 2025 - チャオクンター・ラッドクラバン工科大学で開催される国際会議",
        id: "ICITEE 2025 - Konferensi Internasional di Institut Teknologi Raja Mongkut Ladkrabang",
        ms: "ICITEE 2025 - Persidangan Antarabangsa di Institut Teknologi Raja Mongkut Ladkrabang",
        ph: "ICITEE 2025 - International Conference sa King Mongkut's Institute of Technology Ladkrabang"
      },
      description: {
        en: "The 17th ICITEE Conference in Bangkok, Thailand at KMITL & UGM, showcasing new technologies in Information Technology.",
        th: "การประชุม ICITEE ครั้งที่ 17 ในกรุงเทพฯ ประเทศไทยที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง & UGM, แสดงเทคโนโลยีใหม่ ๆ ในด้านเทคโนโลยีสารสนเทศ",
        ko: "방콕, 태국의 킹몽콧 기술대학교와 UGM에서 열리는 제17회 ICITEE 학술 대회, 정보 기술 분야의 새로운 기술을 선보입니다.",
        ja: "タイ、バンコクのチャオクンター・ラッドクラバン工科大学とUGMで開催される第17回ICITEE会議、情報技術の新技術を紹介します。",
        id: "Konferensi ICITEE ke-17 di Bangkok, Thailand di KMITL & UGM, memamerkan teknologi baru dalam Teknologi Informasi.",
        ms: "Persidangan ICITEE ke-17 di Bangkok, Thailand di KMITL & UGM, mempamerkan teknologi baru dalam Teknologi Maklumat.",
        ph: "Ang 17th ICITEE Conference sa Bangkok, Thailand sa KMITL at UGM, nagtatampok ng mga bagong teknolohiya sa Information Technology."
      }
    },
    "/topics-of-interest": {
      title: {
        en: "Topics of Interest - ICITEE 2025 at King Mongkut's Institute of Technology Ladkrabang",
        th: "หัวข้อที่น่าสนใจ - ICITEE 2025 ที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        ko: "관심 주제 - ICITEE 2025, 킹몽콧 기술대학교에서",
        ja: "興味のあるトピック - ICITEE 2025, チャオクンター・ラッドクラバン工科大学で",
        id: "Topik yang Menarik - ICITEE 2025 di Institut Teknologi Raja Mongkut Ladkrabang",
        ms: "Topik Menarik - ICITEE 2025 di Institut Teknologi Raja Mongkut Ladkrabang",
        ph: "Mga Paksa ng Interes - ICITEE 2025 sa King Mongkut's Institute of Technology Ladkrabang"
      },
      description: {
        en: "Research topics covered in ICITEE 2025, including new technologies in Information Technology, at King Mongkut's Institute of Technology Ladkrabang.",
        th: "หัวข้อการวิจัยที่ครอบคลุมใน ICITEE 2025, รวมถึงเทคโนโลยีใหม่ ๆ ในด้านเทคโนโลยีสารสนเทศ, ที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        ko: "방콕, 태국에서 열리는 ICITEE 2025에서 다룬 연구 주제, 정보 기술의 새로운 기술을 포함한",
        ja: "タイ、バンコクで開催されるICITEE 2025で扱う研究トピック、情報技術の新しい技術を含む",
        id: "Topik penelitian yang dibahas dalam ICITEE 2025, termasuk teknologi baru dalam Teknologi Informasi, di Institut Teknologi Raja Mongkut Ladkrabang.",
        ms: "Topik penyelidikan yang dibincangkan dalam ICITEE 2025, termasuk teknologi baru dalam Teknologi Maklumat, di Institut Teknologi Raja Mongkut Ladkrabang.",
        ph: "Mga paksa ng pananaliksik na tatalakayin sa ICITEE 2025, kasama ang mga bagong teknolohiya sa Information Technology, sa King Mongkut's Institute of Technology Ladkrabang."
      }
    },
  };

  const defaultSeoData = {
    title: {
      en: "ICITEE 2019,2020,2021,2022,2023,2024,2025.,icitee",
      th: "ICITEE 2019,2020,2021,2022,2023,2024,2025.icitee",
      ko: "ICITEE 2019,2020,2021,2022,2023,2024,2025.icitee",
      ja: "ICITEE 2019,2020,2021,2022,2023,2024,2025.icitee",
      id: "ICITEE 2019,2020,2021,2022,2023,2024,2025.icitee",
      ms: "ICITEE 2019,2020,2021,2022,2023,2024,2025.icitee",
      ph: "ICITEE 2019,2020,2021,2022,2023,2024,2025.icitee"
    },
    description: {
      en: "International Conference on Information Technology and Electrical Engineering",
      th: "การประชุมวิชาการนานาชาติด้านเทคโนโลยีสารสนเทศและวิศวกรรมไฟฟ้า",
      ko: "정보 기술 및 전기 공학에 관한 국제 회의",
      ja: "情報技術および電気工学に関する国際会議",
      id: "Konferensi Internasional tentang Teknologi Informasi dan Teknik Elektro",
      ms: "Persidangan Antarabangsa mengenai Teknologi Maklumat dan Kejuruteraan Elektrik",
      ph: "International Conference on Information Technology and Electrical Engineering"
    }
  };

  const noContentSeoData = {
    title: {
      en: "No Content Found",
      th: "ไม่พบข้อมูล",
      ko: "내용을 찾을 수 없음",
      ja: "コンテンツが見つかりません",
      id: "Konten Tidak Ditemukan",
      ms: "Tiada Kandungan Ditemui",
      ph: "Walang Natagpuang Nilalaman"
    },
    description: {
      en: "Sorry, the page you are looking for cannot be found.",
      th: "ขออภัย ไม่พบหน้าที่คุณค้นหา",
      ko: "죄송합니다, 찾고 있는 페이지를 찾을 수 없습니다.",
      ja: "申し訳ありませんが、探しているページは見つかりません。",
      id: "Maaf, halaman yang Anda cari tidak dapat ditemukan.",
      ms: "Maaf, halaman yang anda cari tidak dapat ditemui.",
      ph: "Pasensya na, hindi namin matagpuan ang page na hinahanap mo."
    }
  };

  // เลือกข้อมูล SEO ตามหน้า
  const { title, description } = seoData[currentPath] || noContentSeoData;

  return (
    <>
      <SEO
        title={title[language] || defaultSeoData.title[language]}
        description={description[language] || defaultSeoData.description[language]}
        url={`${baseUrl}${currentPath}`}
      />
      {/* เนื้อหาของหน้า */}
      <div>
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("th")}>ไทย</button>
        <button onClick={() => setLanguage("ko")}>한국어</button>
        {/* เพิ่มปุ่มอื่นๆ สำหรับภาษาเพิ่มเติมตามต้องการ */}
      </div>
    </>
  );
};

export default AppContent;
