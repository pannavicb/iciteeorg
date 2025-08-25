import React from 'react';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";
import 'font-awesome/css/font-awesome.min.css';

const HeaderSub15 = () => {
  const keynoteData = [

    {
      name: "Prof. Masanori Sugimoto",
      affiliation: "Hokkaido University",
      summary: "Emerging Trends and Future Perspectives on Indoor Positioning Technologies.",
      photo: `${process.env.PUBLIC_URL}/img/masanori-sugimoto.jpg`,
      link: "/keynote-speaker-MasanoriSugimoto",
    },
    {
      name: "Prof. Dr. Emi Yuda",
      affiliation: "Mie University",
      summary: "Biomedical signal processing and bio-medical big data analysis.",
      photo: `${process.env.PUBLIC_URL}/img/emi-yuda.jpg`,
      link: "/keynote-speaker-EmiYuda",
    },

  ];

  return (
    <header id="headersub15">
      <div className="intro slideshow1">
        <div className="overlay">
          <div className="container">
            
            {/* ส่วนหัวข้อหลัก */}
            {/* <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text">
                <h1 className="conference-title">
                  <div className="typotitle2">
                    Emerging Trends and Future Perspectives on Indoor Positioning Technologies
                  </div>
                </h1>
              </div>
            </div> */}

            {/* ส่วน Keynote Speakers */}
            <div className="section-title mt-5 text-center">
              <h1></h1>
              <p className="text-justify">
                Meet our distinguished keynote speakers from leading universities and organizations.
              </p>
            </div>

            <div className="row">
              {keynoteData.map((speaker, i) => (
                <div key={`${speaker.name}-${i}`} className="col-6 mb-4">
                  <div className="card text-center p-3 shadow-sm h-100">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="img-fluid mb-3"
                      style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
                    />
                    <h4>{speaker.name}</h4>
                    <p className="text-muted">{speaker.affiliation}</p>
                    <p>{speaker.summary}</p>
                    <a
                      href={speaker.link}
                      target="_parent"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}

            </div>
            
          </div>
        </div>
      </div>

      {/* CSS เฉพาะ */}
      <style jsx>{`
        .intro1 {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slideshow-container3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .overlay3 {
          position: relative;
          z-index: 2;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          height: 100%;
        }

        .overlay > * {
          pointer-events: all;
        }

        .conference-title3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .conference-logo22 {
          max-width: 80%;
          margin: 0 auto;
          display: block;
        }
      `}</style>
    </header>
  );
};

export default HeaderSub15;
