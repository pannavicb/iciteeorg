import React from "react";

const HeaderSub18 = () => {
  return (
<header id="headersub18">
      <div className="intro slideshow1">
        
        {/* Slideshow as Background */}
        {/* <div className="slideshow-container"> */}
        {/*<SlideshowHeader />*/}
        {/* </div> */}

        {/* Overlay Content */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text">
                <h1 className="conference-title">
                  <div className="conference-title"></div>
                  <p><div class="typotitle2"> Biomedical signal processing and bio-medical big data analysis </div></p>
                </h1>
                <p><div class="typotitle2"></div></p>
                <div className="conference-timer"></div>
                <div>               
                </div>
                <div><p></p></div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          pointer-events: none; /* Allow clicks to pass through */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          height: 100%;
        }

        .overlay > * {
          pointer-events: all; /* Allow interactions only for overlay content */
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

export default HeaderSub18; // ✅ ต้องมี export default


