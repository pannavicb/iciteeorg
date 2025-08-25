import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { VisitorCounter } from "./visitor"; // ✅ แก้ import ให้ถูกต้อง (ไม่ต้องใช้ /components/visitor)

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="section-title">
              <h2>
               <p class="text-highlight2 bg-gradient-to-r from-purple-800 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-purple-500 hover:to-purple-800 transition">
                 <span>Experience</span> Bangkok through 
              </p>
              <p class="text-highlight2 bg-gradient-to-r from-purple-800 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:from-purple-500 hover:to-purple-800 transition">
                 <span>Cutting-Edge Technology</span> and <span>Cultural Richness</span>
              </p>
              </h2>
            </div>
            <div className="row">
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="image-slider-container img-responsive">
                    <iframe
                      src="https://www.youtube.com/embed/q3OUFsQAivI?autoplay=1&mute=1"
                      title="Tourism Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: "100%",
                        maxWidth: "750px",
                        height: "420px",
                        aspectRatio: "16/9",
                      }}
                    ></iframe>
                  </div>
                </div>
                <div id="success"></div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>            
          </div>
          <div className="col-md-12">
                                {/* ✅ แสดง VisitorCounter ด้านล่าง */}
                                <div className="col-md-12">
                           <VisitorCounter />
                      </div>
            <div className="row">
              <div className="social">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Copyright © ICITEE 2025:17th International Conference on Information Technology and Electrical Engineering{" "}
            <a href="http://icitee2025.it.kmitl.ac.th" rel="nofollow">
              ICITEE 2025
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
