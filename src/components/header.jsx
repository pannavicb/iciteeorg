import React from "react";
import CountDownTimer from "../components/CountDownTimer";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro slideshow2">
        
        {/* Slideshow as Background */}
        {/* <div className="slideshow-container"> */}
          {/*<SlideshowHeader />*/}
        {/* </div> */}

        {/* Overlay Content */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text">
                <h2 className="conference-title">
                  <div className="conference-title"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/IEEE logo.png`}
                    alt="ICITEE 2025 Logo IEEE 1"
                    style={{ width: 'Auto', height: '100px' }}
                    className="conference-logo2"
                  />
                </h2>
                <h1 className="conference-title">
                  {/* <div className="conference-title"></div> */}
                  <img
                    src={`${process.env.PUBLIC_URL}/img/ICITEE2025-C-logo.png`}
                    alt="ICITEE 2025 Logo 2"
                    className="conference-logo2"
                  />
                </h1>   
                <div className=".light-text">Co-located with</div>
                <div className="typotitle3">
                  <p className="text-[20px] font-semibold">
                  <a 
                      href="https://www.cdve.org/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        textDecoration: "none", 
                        color: "inherit" 
                      }}
                    > The 22<span className="superscript">nd</span> International Conference on<br />
                    Cooperative Design Visualization and Engineering<span className="text-sm text-gray-600 ml-2 light-text1">(CDVE2025)</span></a>                   
                  </p>
                </div>  
                <h1><div className="semi-bold-text">20 - 21 October 2025 | Bangkok, Thailand</div></h1>
                {/* <p><div class="typotitle center custom-center">Co-located with The 22nd International conference on Cooperative Design Visualization and Engineering (CDVE2025) </div></p> */}               
                <div className=".light-text" >At The Berkeley Hotel Pratunam<br />Bangkok Thailand.</div>
                <h1><div className="typotitle">The Conference starts in</div></h1>
                <div>
                  <CountDownTimer />                  
                </div>
                <div><p></p></div>
                <div>
                <a href={`${process.env.PUBLIC_URL}/pdf/A4-21x29.7_ICITEE2025_CFP_03-6.pdf`} 
                  className="btn btn-custom btn-lg page-scroll" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  CALL FOR PAPERS
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </header>
  );
};
