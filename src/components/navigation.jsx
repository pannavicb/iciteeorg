import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isSubmissionOpen, setSubmissionOpen] = useState(false);
  const [isQualityOpen, setQualityOpen] = useState(false);
 
  const toggleDropdown = (setFunction) => {
    setFunction(prev => !prev);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid nav-head">
        <div className="navbar-header">
        <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"            
        >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top"> */}
          <a className="navbar-brand page-scroll" href="/">
            <img
              src={`${process.env.PUBLIC_URL}/img/ICITEE2025.png`}
              alt="ICITEE 2025 Logo"
              className="conference-logo"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse col-md-12" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            
            <li><a href="/" className="page-scroll">Home</a></li>
            
            <li className="dropdown">
              <a href="#about" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setAboutOpen); }}>
                About <i className="fa fa-caret-down"></i>
              </a>
              {isAboutOpen && (
                <ul className="dropdown-menu">                  
                  <li><a href="/organizing-committee" className="page-scroll">Organizing Committee</a></li>
                  <li><a href="/pass-conference" className="page-scroll">Past Conferences</a></li>                                  
                  <li><a href="/gallery" className="page-scroll">Gallery</a></li>                                   
                </ul>
              )}
            </li>

            <li className="dropdown">
              <a href="#submission" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setSubmissionOpen); }}>
                Program <i className="fa fa-caret-down"></i>
              </a>
              {isSubmissionOpen && (
                <ul className="dropdown-menu">                 
                  {/* <li><a href="/topics-of-interest" className="page-scroll">KeyNote S</a></li>       */}
                <li className="submenu-parent">
                <a href="/keynote-speaker" className="page-scroll">
                  KeyNote Speaker ▸
                </a>

                {/* Submenu ที่สไลด์ไปทางขวา */}
                <ul className="submenu">
                    <li>
                      <a href="/keynote-speaker-MasanoriSugimoto">
                        Emerging Trends and Future Perspectives on Indoor Positioning Technologies
                      </a>
                        <a href="/keynote-speaker-EmiYuda">
                            Bio-signal processing research based on the characteristics of human physiology
                        </a>
                         </li>
                      </ul>
                    </li> 
                                                    
                </ul>
                
              )}
            </li>            
            
            <li className="dropdown">
              <a href="#submission" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setSubmissionOpen); }}>
                Submission <i className="fa fa-caret-down"></i>
              </a>
              {isSubmissionOpen && (
                <ul className="dropdown-menu">                 
                  <li><a href="/topics-of-interest" className="page-scroll">Topics of Interest</a></li>      
                  <li><a href="/paper-submission-guidelines" className="page-scroll">Paper Submission Guidelines</a></li>  
                  <li><a href="/registration" className="page-scroll">Registration</a></li>       
                </ul>
              )}
            </li>

            <li className="dropdown">
              <a href="#Venue & Travel Information" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setSubmissionOpen); }}>
              Venue & Travel <i className="fa fa-caret-down"></i>
              </a>
              {isSubmissionOpen && (
                <ul className="dropdown-menu">                 
                  {/* <li><a href="/conference-venue-detail" className="page-scroll">Conference venue details</a></li>      */}
                  <li><a href="/venue-travel" className="page-scroll">Conference Venue</a></li>   
                  <li><a href="/travel-guidance" className="page-scroll">Travel Guidance </a></li>   
                  <li><a href="/visa-information" className="page-scroll">Visa Information</a></li>       
                </ul>
              )}
            </li>

            <li className="dropdown">
              <a href="#quality" className="page-scroll" onClick={(e) => { e.preventDefault(); toggleDropdown(setQualityOpen); }}>
              Quality Control <i className="fa fa-caret-down"></i>
              </a>
              {isQualityOpen && (
                <ul className="dropdown-menu">                 
                  <li><a href="/quality-control-management" className="page-scroll">Quality Control & Management</a></li>                 
                </ul>
              )}
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};
