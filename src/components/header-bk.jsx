import React from "react";
import CountDownTimer from '../components/CountDownTimer';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0.5 intro-text ">
                <h1 className=".conference-title">
                <div class="conference-title">                  
                </div>                                    
                  <img src={`${process.env.PUBLIC_URL}/img/ICITEE2025-C-logo.png`} alt="ICITEE 2025 Logo 2" className="conference-logo2" />      
                </h1>
                <p></p>
                <div class="conference-timer">The Conference starts in</div>   
                {""}     
                <div><CountDownTimer /></div>     
              </div>            
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
