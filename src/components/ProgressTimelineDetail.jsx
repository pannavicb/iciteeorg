import { useState } from "react";
// import { Link } from "react-router-dom";

const steps = [
  { title: "Registration", date: "May 29, 2025" },
  { title: "Post-Event Survey", date: "April 15, 2025" },
  { title: "Setting Up the Venue", date: "April 10, 2025" },
  { title: "Confirming Attendees", date: "April 5, 2025" },
  { title: "Preparing Materials", date: "April 2, 2025" },
  { title: "Finalizing Speakers", date: "March 30, 2025" },
  { title: "Evaluation and Summary", date: "March 25, 2025" },
  { title: "Conference Execution", date: "March 20, 2025" },
  { title: "Promotion and Registration", date: "March 10, 2025" },
  { title: "Contacting Speakers and Venue", date: "March 5, 2025" },
  { title: "Planning and Topic Selection", date: "March 1, 2025" }
];

export default function ProgressTimelineDetail() {
  const [currentStep, setCurrentStep] = useState(2); // Set current step

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
      
      <div className="overflow-x-auto flex justify-center">
        <table className="min-w-full max-w-3xl mx-auto border-collapse border border-gray-300 border-spacing-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left text-sm md:text-base">Topics</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((step, index) => (
              <tr key={index} className="border border-gray-300 hover:bg-gray-100 transition">
                <td className="p-2 text-sm md:text-base">{step.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ปุ่มลิงก์ไปหน้าประกาศ */}
      <div className="text-right mt-4">
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
    </div>
  );
}
