import React from "react";

export const OrganizeCommittee = () => {
  const committeeSections = [
    {
      title: "Advisory Board",
      members: [
        "Frederic Merienne (UTP, Malaysia)",
        "Hanung Adi Nugroho (UGM, Indonesia)",
        "Jonathan Hoyin Chan (KMUTT, IEEE CIS Thailand Chapter, Thailand)",
        "Lila Iznita Izhar (UTP, Malaysia)",
        "Loo Chu Kiong (UM, Malasia)",
        "Lukito Edi (UGM, Indonesia)",
        "Masanori Sugimoto (HU, Japan)",
        "M Naufal M Saad (UTP, Malaysia)",
        "Ruttikorn Varakulsiripunth (PlanetComm, Thailand)",
        "Sarjiya (UGM, Indonesia)",
        "Supavadee Aramvith (IEEE Thailand Section)",
        "Virach Sornlertlamvanich (MU, Japan)",
        "Worapoj Kreesuradej (KMITL, Thailand)",
        "Yasushi Kiyoki (MU, Japan)"
      ],
    },
    {
      title: "Steering Committee",
      members: [
        "Asako Uraki (MU, Japan)",
        "Chayanon Sub-r-pa (CYUT, Taiwan)",
        "Chitsutha Soomlek (KKU, Thailand)",
        "David Klotz (HdM, Germany)",
        "I Wayan Mustika (UGM, Indonesia)",
        "Jan Kirenz (HdM, Germany)",
        "Phayung Meesad (KMUTNB, IEEE CIS Thailand Chapter)",
        "Pornchai Mongkolnam (KMUTT, IEEE CIS Thailand Chapter)",
        "Shigeru KUCHII (NIT, Kitakyushu College, Japan)",
        "Shiori Sasaki (MU, Japan)",        
        "Sigit B. Wibowo (UGM, Indonesia)",
        "Syukron Abu Ishaq Alfarozi (UGM, Indonesia)",        
        "Thatsanee Charoenporn (MU, Japan)",
        "Teerapong Leelanupab (UQ, Australia)",
        "Ungsumalee Suttapakti (BUU, Thailand)",
        "Wanthanee Rathasamuth (UDRU, Thailand)",
        "Yasuhiro Hayashi (MU, Japan)",
        "Yoshimitsu Kuroki (NIT, Kurume College, Japan)"
      ],
    },
    {
      title: "Local Organizing Committee",
      members: [" "],
    },
    {
      title: "Conference Chair",
      members: [
        "Kuntpong Woraratpanya (IT-KMITL, IEEE CIS Thailand Chapter)"
      ],
    },
    {
      title: "Conference Co-chair",
      members: [
        "Guntur Dharma Putra (UGM, Indonesia)",
        "Ramani Kannan (UTP, Malaysia)"
      ],
    },
    {
      title: "Technical Program Chair",
      members: [
        "Praphan Pavarangkoon (IT-KMITL, Thailand)"
      ],
    },
    {
      title: "Technical Program Co-chair",
      members: [
        "Ahmad Ataka Awwalur Rizqi (UGM, Indonesia)",
        "Taib Ibrahim (UTP, Malaysia)"
      ],
    },
    {
      title: "Senior TPC",
      members: [
        "Ataka Ahmad (UGM,Indonesia)",
        "Annop Monsakul (PIM, Thailand)",
        "Chanboon Sathitwiriyawong (IT-KMITL, CIS Thailand Chapter)",
        "Chotipat Pornavalai (IT-KMITL, Thailand)",
        "Chuwong Phongcharoenpanich (KMITL, Thailand)",
        "Hasanah Rini (UB, Indonesia)",
        "Iswandi Iswandi (UGM, Indonesia)",
        "Kanokwan Atchariyachanvanich (IT-KMITL, Thailand)",
        "Kitsuwan Nattapong  (UEC, Japan)",
        "Kobayashi Kazuki (Shindai, Japan)",
        "Maleerat Sodanil (KMUTNB, IEEE CIS Thailand Chapter)",
        "Nat Dilokthanakul (IT-KMITL, Thailand)",
        "Nasikun Ahmad (UGM, Indonesia)",
        "Nont Kanungsukkasem (IT-KMITL, Thailand)",
        "Olarn Wongwirat (IT-KMITL, Thailand)",
        "Olarik Surinta (MSU, Thailand)",
        "Pratama Azkario Rizky (UGM, Indonesia",
        "Pornsuree Jamsri (IT-KMITL, Thailand)",
        "Pramuk Boonsieng (TNI, Thailand)",
        "Putra Guntur (UGM, Indonesia)",
        "Sarayut Nonsiri (TNI, IEEE CIS Thailand Chapter)",
        "Setyawan Iwan (UKSW, Indonesia)",
        "Sirion Vittayakorn (IT-KMITL, Thailand)",
        "Soradech Krootjohn (KMUTNB, IEEE CIS Thailand Chapter)",
        "Sudchai Boonto (KMUTT, Thailand)",
        "Sudiro (UGM, Indonesia)",
        "Sumet Prabhavat (IT-KMITL, Thailand)",
        "Suvit Poomrittigul (IT-KMITL, Thailand)",
        "Taravichet Titijaroenroj (IT-KMITL, Thailand)",
        "Timotius Ivanna (UKSW, Indonesia)",
        "Thitiporn Lertrusdachakul (TNI, Thailand)",
        "Tuchsanai Ploysuwan (IT-KMITL, Thailand)",
        "Wijaya Yudha Atmaja (UGM, Indonesia)",
        "Ridwan Wicaksono (UGM, Indonesia)",
        "Sutthiphong Srigrarom (NUS, Singapore)",
        "Unger Herwig (FeU Germany)"
      ],
    },
    {
      title: "Publication Chair",
      members: [
        "Samart Moodleah (IT-KMITL, Thailand)"
      ],
    },
    {
      title: "Registration Chair",
      members: [
        "Issarapong Khuankrue (IT-KMITL, Thailand)"
      ],
    },
    {
      title: "Local Arrangement Chair",
      members: [
        "Nont Kanungsukkasem (IT-KMITL, Thailand)"
      ],
    },
    {
      title: "Financial Chair",
      members: [
        "Warune Buavirat (IT-KMITL, Thailand)"
      ],
    },
    {
      title: "Conference Secretariat",
      members: [
        "Kitsuchart Pasupa (IT-KMITL, IEEE CIS Thailand Chapter)"
      ],
    }
  ];

  return (
    <div className="page-topics-background mb-5 flex justify-center">
      <div className="topics-container w-full max-w-4xl px-4">
        <div className="topic-description text-center">
          {committeeSections.map((section, index) => (
            <div key={index} className="mb-10">
              <h1 className="committee-title text-xl font-bold mb-4">{section.title}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                {section.members.map((member, idx) => (
                  <p key={idx} className="text-base">{member}</p>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <h1></h1>                
                {/* <img
                  src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                  alt="Line"
                  className="w-1/3 h-px"
                /> */}
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    
  );
};