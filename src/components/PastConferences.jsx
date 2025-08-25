import { useState } from "react";

const steps = [
  { title: "Bali, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/10808184/proceeding", date: "ICITEE2024" },
  { title: "Chiang Mai, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/10317623/proceeding", date: "ICITEE2023" },
  { title: "Online Virtual Conference", link: "https://ieeexplore.ieee.org/xpl/conhome/9954039/proceeding", date: "ICITEE2022" },
  { title: "Online Virtual Conference", link: "https://ieeexplore.ieee.org/xpl/conhome/9611817/proceeding", date: "ICITEE2021" },
  { title: "Yogyakarta, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/9271662/proceeding", date: "ICITEE2020" },
  { title: "Pattaya, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/8922635/proceeding", date: "ICITEE2019" },
  { title: "Bali, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/8510538/proceeding", date: "ICITEE2018" },
  { title: "Phuket, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/8241061/proceeding", date: "ICITEE2017" },
  { title: "Yogyakarta, Indonesia", link: "https://ieeexplore.ieee.org/xpl/conhome/7839735/proceeding", date: "ICITEE2016" },
  { title: "Chiang Mai, Thailand", link: "https://ieeexplore.ieee.org/xpl/conhome/7397554/proceeding", date: "ICITEE2015" }
].sort((a, b) => parseInt(b.date.replace("ICITEE", "")) - parseInt(a.date.replace("ICITEE", ""))); // เรียงจากใหม่ -> เก่า

export default function PastConferences() {
  return (   
    <div className="container mx-auto p-6 max-w-screen-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800"></h2>
      <div className="content-layout flex flex-col md:flex-row gap-6">
        <div className="about-content flex-2">
          <div className="important-dates-container">

            <table className="w-full border-collapse border border-gray-400 shadow-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-3 text-left">Proceedings</th>
                  <th className="border border-gray-400 p-3 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition duration-200">
                    <td className="border border-gray-400 p-3">
                      <a 
                        href={step.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1"
                      >
                        {step.date} <span>🔗</span>
                      </a>
                    </td>
                    <td className="border border-gray-400 p-3">{step.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] border-collapse border border-gray-400 shadow-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 p-3 text-left">Proceedings</th>
                    <th className="border border-gray-400 p-3 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((step, index) => (
                    <tr key={index} className="hover:bg-gray-100 transition duration-200">
                      <td className="border border-gray-400 p-3">
                        <a 
                          href={step.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1"
                        >
                          {step.date} <span>🔗</span>
                        </a>
                      </td>
                      <td className="border border-gray-400 p-3">{step.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}           
          </div>
        </div>
      </div>
    </div>
  );
}
