import React, { useState, useRef } from 'react';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
    en: {
      title: 'Venue & Travel',
      conferenceInfo: '',
      conferenceDetails:
        '',
      hotelInfo: 'Hotel Information',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '559 Ratchaprarop Road, Makkasan, Ratchathewi, Bangkok 10400, Thailand',
      phone: 'Phone : (662) 309-9999',
      email: 'Website : https://berkeleypratunam.com',
      mapTitle: 'Hotel Map',
      qrTitle: 'Scan to open map',
      qrNote: 'Scan this QR code to open the map of The Berkeley Hotel on your phone.',
      travelTips: 'Travel Tips',
      tips: [
        'You can take a taxi or Airport Rail Link (Ratchaprarop Station) from Suvarnabhumi Airport.',
        'BTS/MRT, bus, or Grab service is available around Bangkok.',
        'The hotel is close to Platinum Fashion Mall, CentralWorld, and Siam Paragon.',
        'It is recommended to book the hotel in advance as there may be many attendees.',
      ],
      hotelWebsite: 'Visit Hotel Website',
      selectLang: 'Select Language',
      scrollToMap: 'Jump to Hotel Map',
    },
    th: {
      title: 'แนะแนวการเดินทาง',
      conferenceInfo: 'ข้อมูลงานประชุม',
      conferenceDetails:
        'งานประชุม ICITEE 2025 จะจัดขึ้นที่โรงแรมเดอะ เบอร์เคลีย์ ประตูน้ำ ระหว่างวันที่ 1-3 ธันวาคม 2568',
      hotelInfo: 'ข้อมูลโรงแรม',
      hotelName: 'โรงแรมเดอะ เบอร์เคลีย์ ประตูน้ำ',
      hotelAddress:
        '559 ถนนราชปรารภ มักกะสัน ราชเทวี กรุงเทพมหานคร 10400 ประเทศไทย',
      phone: 'โทร',
      email: 'อีเมล',
      mapTitle: 'แผนที่โรงแรม',
      qrTitle: 'สแกนเพื่อเปิดแผนที่',
      qrNote: 'QR Code สำหรับเปิดแผนที่โรงแรมเดอะ เบอร์เคลีย์ บนมือถือ',
      travelTips: 'คำแนะนำสำหรับผู้เดินทาง',
      tips: [
        'เดินทางจากสนามบินสุวรรณภูมิได้โดยรถแท็กซี่ หรือแอร์พอร์ตลิงก์ (สถานีราชปรารภ)',
        'สามารถใช้บริการรถไฟฟ้า BTS/MRT, รถเมล์, หรือ Grab',
        'โรงแรมอยู่ใกล้ Platinum Mall, CentralWorld และ Siam Paragon',
        'แนะนำให้จองโรงแรมล่วงหน้าเนื่องจากอาจมีผู้เข้าร่วมจำนวนมาก',
      ],
      hotelWebsite: 'เยี่ยมชมเว็บไซต์โรงแรม',
      selectLang: 'เลือกภาษา',
      scrollToMap: 'ดูแผนที่โรงแรม',
    },
    zh: {
      title: '旅行指南',
      conferenceInfo: '会议资料',
      conferenceDetails:
        'ICITEE 2025 将于 2025 年 12 月 1 至 3 日在曼谷的 The Berkeley Hotel Pratunam 举行。请提前注册并准备所需的文件。',
      hotelInfo: '酒店信息',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '泰国曼谷 Ratchaprarop Road 559号，Makkasan，Ratchathewi，10400',
      phone: '电话',
      email: '电子邮件',
      mapTitle: '酒店地图',
      qrTitle: '扫描打开地图',
      qrNote: '扫描此二维码以在您的手机上打开 The Berkeley Hotel 地图。',
      travelTips: '旅行提示',
      tips: [
        '从素万那普机场可以乘坐出租车或机场铁路联运（Ratchaprarop站）到达酒店。',
        '曼谷周围提供BTS/MRT、巴士或Grab服务。',
        '酒店靠近白金时尚购物中心、中央世界购物中心和暹罗广场。',
        '建议提前预定酒店，因为可能会有很多参会人员。',
      ],
      hotelWebsite: '访问酒店网站',
      selectLang: '选择语言',
      scrollToMap: '跳转到酒店地图',
    },
    ko: {
      title: '여행 안내',
      conferenceInfo: '컨퍼런스 정보',
      conferenceDetails:
        'ICITEE 2025는 2025년 12월 1일부터 3일까지 방콕의 The Berkeley Hotel Pratunam에서 개최됩니다. 사전 등록하고 필요한 서류를 준비해 주세요.',
      hotelInfo: '호텔 정보',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '태국 방콕 Ratchaprarop Road 559번지, Makkasan, Ratchathewi, 10400',
      phone: '전화',
      email: '이메일',
      mapTitle: '호텔 지도',
      qrTitle: '지도를 열려면 스캔하세요',
      qrNote: '이 QR 코드를 스캔하여 모바일에서 The Berkeley Hotel 지도를 여세요.',
      travelTips: '여행 팁',
      tips: [
        '수완나품 공항에서 택시 또는 공항철도(라차프라롭역)를 이용해 호텔에 갈 수 있습니다.',
        '방콕에서는 BTS/MRT, 버스 또는 Grab 서비스를 이용할 수 있습니다.',
        '호텔은 플래티넘 패션몰, 센트럴월드, 시암 파라곤과 가까운 위치에 있습니다.',
        '많은 참가자가 있을 수 있으므로 호텔 예약을 미리 하는 것이 좋습니다.',
      ],
      hotelWebsite: '호텔 웹사이트 방문하기',
      selectLang: '언어 선택',
      scrollToMap: '호텔 지도 보기',
    },
    vi: {
      title: 'Hướng dẫn di chuyển',
      conferenceInfo: 'Thông tin hội nghị',
      conferenceDetails:
        'ICITEE 2025 sẽ được tổ chức tại The Berkeley Hotel Pratunam, Bangkok từ ngày 1-3 tháng 12, 2025. Vui lòng đăng ký trước và chuẩn bị các tài liệu cần thiết.',
      hotelInfo: 'Thông tin khách sạn',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '559 Ratchaprarop Road, Makkasan, Ratchathewi, Bangkok 10400, Thái Lan',
      phone: 'Điện thoại',
      email: 'Email',
      mapTitle: 'Bản đồ khách sạn',
      qrTitle: 'Quét mã để mở bản đồ',
      qrNote: 'Quét mã QR này để mở bản đồ khách sạn The Berkeley trên điện thoại của bạn.',
      travelTips: 'Mẹo du lịch',
      tips: [
        'Có thể đi taxi hoặc Airport Rail Link (Ga Ratchaprarop) từ sân bay Suvarnabhumi.',
        'Có thể sử dụng BTS/MRT, xe buýt hoặc dịch vụ Grab quanh Bangkok.',
        'Khách sạn gần Platinum Fashion Mall, CentralWorld và Siam Paragon.',
        'Khuyến khích đặt phòng khách sạn sớm vì có thể có nhiều người tham gia.',
      ],
      hotelWebsite: 'Truy cập website khách sạn',
      selectLang: 'Chọn ngôn ngữ',
      scrollToMap: 'Xem bản đồ khách sạn',
    },
    he: {
      title: 'הנחיות נסיעה',
      conferenceInfo: 'מידע על הכנס',
      conferenceDetails:
        'הכנס ICITEE 2025 יתקיים ב-The Berkeley Hotel Pratunam, בנגקוק, בתאריכים 1-3 בדצמבר 2025. אנא הירשם מראש והכן את המסמכים הנדרשים.',
      hotelInfo: 'מידע על המלון',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '559 Ratchaprarop Road, Makkasan, Ratchathewi, Bangkok 10400, תאילנד',
      phone: 'טלפון',
      email: 'אימייל',
      mapTitle: 'מפת המלון',
      qrTitle: 'סרוק כדי לפתוח את המפה',
      qrNote: 'סרוק קוד QR זה כדי לפתוח את המפה של The Berkeley Hotel בטלפון הנייד שלך.',
      travelTips: 'טיפים לטיול',
      tips: [
        'ניתן להגיע משדה התעופה סווארנבהומי במונית או ב-Airport Rail Link (תחנת Ratchaprarop).',
        'בנגקוק מציעה שירותי BTS/MRT, אוטובוסים או שירות Grab.',
        'המלון קרוב ל-Platinum Fashion Mall, CentralWorld ו-Siam Paragon.',
        'מומלץ להזמין את המלון מראש, שכן ייתכן שיהיו הרבה משתתפים.',
      ],
      hotelWebsite: 'בקר באתר המלון',
      selectLang: 'בחר שפה',
      scrollToMap: 'עבור למפת המלון',
    },
    hi: {
      title: 'यात्रा निर्देश',
      conferenceInfo: 'सम्मेलन जानकारी',
      conferenceDetails:
        'ICITEE 2025 1-3 दिसंबर 2025 तक बैंगकॉक के The Berkeley Hotel Pratunam में आयोजित होगा। कृपया अग्रिम रूप से पंजीकरण करें और आवश्यक दस्तावेज तैयार करें।',
      hotelInfo: 'होटल जानकारी',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '559 राचाप्रारोप रोड, मक्का, राचथेवि, बैंकॉक 10400, थाईलैंड',
      phone: 'फोन',
      email: 'ईमेल',
      mapTitle: 'होटल का मानचित्र',
      qrTitle: 'मैप खोलने के लिए स्कैन करें',
      qrNote: 'इस QR कोड को स्कैन करें ताकि आप अपने फोन पर The Berkeley Hotel का मानचित्र खोल सकें।',
      travelTips: 'यात्रा सुझाव',
      tips: [
        'आप सुवरनभुमी हवाई अड्डे से टैक्सी या एयरपोर्ट रेल लिंक (राचाप्रारोप स्टेशन) से होटल तक पहुंच सकते हैं।',
        'बैंकॉक के आसपास BTS/MRT, बस, या Grab सेवा उपलब्ध है।',
        'होटल प्लेटिनम फैशन मॉल, सेंट्रलवर्ल्ड और सियाम पैरागोन के पास है।',
        'कृपया अग्रिम रूप से होटल बुक करें क्योंकि इसमें कई प्रतिभागी हो सकते हैं।',
      ],
      hotelWebsite: 'होटल वेबसाइट पर जाएं',
      selectLang: 'भाषा चुनें',
      scrollToMap: 'होटल के मानचित्र पर जाएं',
    },
    fr: {
      title: 'Guide de voyage',
      conferenceInfo: 'Informations sur la conférence',
      conferenceDetails:
        'La conférence ICITEE 2025 se tiendra à The Berkeley Hotel Pratunam, Bangkok, du 1er au 3 décembre 2025. Veuillez vous inscrire à l’avance et préparer les documents nécessaires.',
      hotelInfo: 'Informations sur l\'hôtel',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '559 Ratchaprarop Road, Makkasan, Ratchathewi, Bangkok 10400, Thaïlande',
      phone: 'Téléphone',
      email: 'E-mail',
      mapTitle: 'Carte de l’hôtel',
      qrTitle: 'Scannez pour ouvrir la carte',
      qrNote: 'Scannez ce QR code pour ouvrir la carte de The Berkeley Hotel sur votre téléphone.',
      travelTips: 'Conseils de voyage',
      tips: [
        'Vous pouvez prendre un taxi ou l’Airport Rail Link (station Ratchaprarop) depuis l’aéroport de Suvarnabhumi.',
        'BTS/MRT, bus ou service Grab sont disponibles à Bangkok.',
        'L’hôtel est proche du Platinum Fashion Mall, du CentralWorld et du Siam Paragon.',
        'Il est recommandé de réserver l’hôtel à l’avance car il peut y avoir beaucoup de participants.',
      ],
      hotelWebsite: 'Visitez le site de l’hôtel',
      selectLang: 'Choisir la langue',
      scrollToMap: 'Aller à la carte de l’hôtel',
    },
    it: {
      title: 'Guida di viaggio',
      conferenceInfo: 'Informazioni sulla conferenza',
      conferenceDetails:
        'La conferenza ICITEE 2025 si terrà al The Berkeley Hotel Pratunam, Bangkok dal 1 al 3 dicembre 2025. Si prega di registrarsi in anticipo e preparare i documenti necessari.',
      hotelInfo: 'Informazioni sull\'hotel',
      hotelName: 'The Berkeley Hotel Pratunam',
      hotelAddress:
        '559 Ratchaprarop Road, Makkasan, Ratchathewi, Bangkok 10400, Thailandia',
      phone: 'Telefono',
      email: 'Email',
      mapTitle: 'Mappa dell\'hotel',
      qrTitle: 'Scansiona per aprire la mappa',
      qrNote: 'Scansiona questo codice QR per aprire la mappa di The Berkeley Hotel sul tuo telefono.',
      travelTips: 'Suggerimenti di viaggio',
      tips: [
        'Puoi prendere un taxi o l’Airport Rail Link (stazione Ratchaprarop) dall\'aeroporto di Suvarnabhumi.',
        'BTS/MRT, autobus o servizio Grab sono disponibili a Bangkok.',
        'L\'hotel si trova vicino al Platinum Fashion Mall, al CentralWorld e al Siam Paragon.',
        'Si consiglia di prenotare l\'hotel in anticipo in quanto potrebbero esserci molti partecipanti.',
      ],
      hotelWebsite: 'Visita il sito web dell\'hotel',
      selectLang: 'Seleziona lingua',
      scrollToMap: 'Vai alla mappa dell\'hotel',
    },
  };
  
const VenuTravel = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations['en'];
  const mapRef = useRef(null);

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="quality-container">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Language Selector */}
        {/* <div className="mb-6 text-right">
          <i><label className="font-semibold mr-2">{t.selectLang || 'Language'}:</label></i>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
            <option value="vi">Tiếng Việt</option>
            <option value="he">עברית</option>
            <option value="hi">हिंदी</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
          </select>
        </div> */}
        {/* <div className="mb-6 text-right">
          <i><label className="font-semibold mr-2 text-black">{t.selectLang || 'Language'}:</label></i>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border px-2 py-1 rounded text-black"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
            <option value="vi">Tiếng Việt</option>
            <option value="he">עברית</option>
            <option value="hi">हिंदी</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
          </select>

         </div> */}


        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">{}</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.conferenceInfo}</h2>
          <p>{t.conferenceDetails}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.hotelInfo}</h2>
          <p className="mb-2">
            <strong>{t.hotelName}</strong><br />
            {t.hotelAddress}
          </p>
          <p>
            <strong>{t.phone}:</strong> (662) 309-9999<br />
            {/* <strong>{t.email}:</strong>{' '} */}
             {/* <u><i><b>{t.hotelWebsite}</b></i></u> */}
             <a
            href="https://www.berkeleypratunam.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
          > <strong>{t.email}:</strong>{' '} </a>
            <a href="mailto:rsvn@berkeleyhotel.co.th" className="text-blue-600 underline"></a>{' '}
            <a href="mailto:info@berkeleyhotel.co.th" className="text-blue-600 underline"></a>
          </p>
          <h1></h1>
        </section>

        {/* 🔖 Jump Button
        <div className="text-center mb-6">
          <button
            onClick={scrollToMap}
            className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition"
          >
            🔖 {t.scrollToMap}
          </button>
          <h1></h1>
        </div> */}

        <section className="mb-8" ref={mapRef}>
          <h2 className="text-xl font-semibold mb-2">{t.mapTitle}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Hotel Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7180590762127!2d100.5399155!3d13.7513468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed8d1a16175%3A0x620f4d61dc9e9fd5!2sThe%20Berkeley%20Hotel%20Pratunam!5e0!3m2!1sen!2sth!4v1680093276889!5m2!1sen!2sth"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section className="mb-8 text-center">
          {/* <h1></h1>
          <h2 className="text-xl font-semibold mb-2">{t.qrTitle}</h2>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://goo.gl/maps/wYh1jBuJPhR2"
            alt="QR Code Map"
            className="mx-auto"
          /> */}
          <h1></h1>
          {/* <p className="text-gray-600 mt-2">{t.qrNote}</p> */}
        </section>

        <section className="mb-8">
          {/* <h2 className="text-xl font-semibold mb-2">{t.travelTips}</h2> */}
          {/* <ul className="list-disc pl-6">
            {t.tips.map((tip, index) => (
              <li key={index} className="mb-1">{tip}</li>
            ))}
          </ul> */}
        </section>

        <div className="text-center mt-10">
        <h1></h1>
        <h1></h1>
        <h3>How to Reach the Conference Venue</h3>
        <h1></h1>
        <h1></h1>
        </div>
         
        <div className="text-center mt-10">
          <h1></h1>
          <a
            href="https://www.berkeleypratunam.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
          >
            <h1></h1>
            <div>
            <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/image7.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "100%", height: "70%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                </div>
                <h1></h1>
            {/* <u><i><b>{t.hotelWebsite}</b></i></u> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VenuTravel;
