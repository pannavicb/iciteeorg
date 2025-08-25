import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
 // import { VisitorCounter } from "./visitor"; ✅ แก้ import ให้ถูกต้อง (ไม่ต้องใช้ /components/visitor)
 import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";

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
                        src="https://www.youtube.com/embed/q3OUFsQAivI?autoplay=1&mute=1&loop=1&playlist=q3OUFsQAivI"
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
                
              </p>
            </div>

    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
      <table className="w-full border border-collapse text-white">
        <tbody>
          <tr className="align-middle border border-white">
            {/* ใส่ไอคอนใน <td> แยกเพื่อจัดตำแหน่งได้ง่ายขึ้น */}
            <td className="text-center border border-white">
              <FaMapMarkerAlt className="text-xl text-white" />
            </td>
            <td className="w-5/6 border border-white">
              <p className="font-semibold text-white">
                King Mongkut's Institute of Technology Ladkrabang
              </p>
              <p className="text-white">
                1 Chalong Krung 1 Alley, Lat Krabang, Bangkok, Thailand
              </p>
            </td>
          </tr>

          <tr className="align-middle border border-white">
            <td className="text-center border border-white">
              <FaPhone className="text-xl text-white" />
            </td>
            <td className="border border-white">
              <p>(+66) 2-723-4900</p>
            </td>
          </tr>

          <tr className="align-middle border border-white">
            <td className="text-center border border-white">
              <FaEnvelope className="text-xl text-white" />
            </td>
            <td className="border border-white">
              <p>icitee2025@it.kmitl.ac.th</p>
            </td>
          </tr>

          <tr className="align-middle border border-white">
            <td className="text-center border border-white">
              <FaFacebook className="text-xl text-white" />
            </td>
            <td className="border border-white">
              <a
                href="https://www.facebook.com/icitee"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/icitee
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

          </div>          
          <div className="col-md-12">
                                {/* ✅ แสดง VisitorCounter ด้านล่าง <VisitorCounter />*/}
                                <div className="col-md-12">
                          
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
            Copyright © ICITEE 2025 : 17th International Conference on Information Technology and Electrical Engineering{" "}
            <a href="http://icitee2025.it.kmitl.ac.th" rel="nofollow">
              ICITEE 2025
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
