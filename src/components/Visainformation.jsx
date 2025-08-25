import React from "react";
import "../css/QualityControl.css";

const VisaInformation = () => {
  return (
    <div className="quality-container">
    <div >
      {/* <section className="card">
        <h2>Recommended VISA Information for ICITEE 2025 Website</h2>        
      </section> */}
      <section className="card">
        <h3 className="text-xl font-bold">1. General VISA Information</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Do international attendees need a VISA?</strong><br/>Many nationalities can enter Thailand visa-free for a limited duration. Others need a Tourist Visa or a Business Visa.</li>
          <li><strong>What type of VISA should conference attendees apply for?</strong><br/>Most participants should apply for a <strong>Tourist Visa (TR)</strong>. Some may require a <strong>Non-Immigrant Visa (Type B)</strong> if they are representing an institution.</li>
        </ul>
        <p className="mt-2">Check Thailand's VISA policy for your country: <u><i><b><a className="text-blue-600 underline" href="https://www.thaievisa.go.th/" target="_blank" rel="noopener noreferrer">Thai E-Visa Official Website</a></b></i></u></p>
      </section>

      <section className="card">
        <h3 className="text-xl font-bold">2. VISA Exemption and Visa on Arrival</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Visa-Free Entry (Exempted Countries)</strong><br/>Please visit the official Thai E-Visa Official Website and refer to the Frequently Asked Questions section to determine whether your country is eligible for visa-free entry.</li>
          <li><strong>Visa on Arrival (VOA)</strong><br/>Some nationalities (e.g., India, China) can obtain a Visa on Arrival (VOA) at Suvarnabhumi Airport (BKK) or Don Mueang Airport (DMK).<br/>VOA allows 15 days stay.<br/>Please note that specific documents are required to apply for a Visa on Arrival. For detailed information, kindly refer to the <u><i><b><a className="text-blue-600 underline" href="https://www.thaiembassy.com/" target="_blank" rel="noopener noreferrer">Thai Embassy's official website</a>.</b></i></u></li>
        </ul>
        <p className="mt-2">Full list of Visa Exemption and VOA countries: <u><i><b><a className="text-blue-600 underline" href="https://www.thaiembassy.com/" target="_blank" rel="noopener noreferrer">Thai Embassy</a></b></i></u></p>
      </section>

      <section className="card">
        <h3 className="text-xl font-bold">3. VISA Application Process</h3>
        <ul className="list-decimal ml-6 mt-2">
          <li><strong>Steps to Apply for a Thai VISA (If Required):</strong></li>
          <ol className="list-disc ml-6">
            <li>Determine your visa type (Tourist Visa or Non-Immigrant Visa).</li>
            <li>Prepare required documents:
              <ul className="list-disc ml-6">
                <li>Passport (valid for at least 6 months)</li>
                <li>ICITEE 2025 Invitation Letter (if needed)</li>
                <li>Proof of accommodation (hotel booking)</li>
                <li>Return flight ticket</li>
                <li>Financial proof (bank statement)</li>
              </ul>
            </li>
            <li>Submit the application at a Thai Embassy/Consulate in your country or apply online via the <u><i><b><a className="text-blue-600 underline" href="https://www.thaievisa.go.th/" target="_blank" rel="noopener noreferrer">Thai E-Visa System</a>.</b></i></u></li>
            <li><strong>Processing Time:</strong> 3-15 business days.</li>
          </ol>
        </ul>
        <p className="mt-2 text-yellow-600">Please note that the required documents and regulations are subject to change. For the most up-to-date information, we recommend visiting the <u><i><b><a className="underline" href="https://www.mfa.go.th/" target="_blank" rel="noopener noreferrer">Ministry of Foreign Affairs</a></b></i></u> Information website and the Non-Immigrant B section of the Thai E-Visa portal.</p>
      </section>

      <section className="card">
        <h3 className="text-xl font-bold">4. Conference Invitation Letter for VISA Application</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Who can request an invitation letter?</strong><br/>Only registered participants (authors, presenters, or attendees).</li>
          <li><strong>How to request an invitation letter?</strong><br/>After registration, fill out the VISA Invitation Request Form via ICITEE 2025 portal. Provide your full name, passport number, and affiliation. The organizing committee will issue the letter within 5 business days.</li>
        </ul>
        {/* <p className="mt-2">Request your VISA Invitation Letter here : <u><i><b><a className="text-blue-600 underline" href="https://ipccc.org/ipccc2019/Visa_letter_request_instructions.pdf" target="_blank" rel="noopener noreferrer">ICITEE 2025 VISA Request Form</a></b></i></u></p>  */}
        <p className="mt-2">Request your VISA Invitation Letter here : <u><i><b>ICITEE 2025 VISA Request Form</b></i></u></p> 
      </section>

      <section className="card">
        <h3 className="text-xl font-bold">5. Travel and Immigration Tips</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Entry Requirements:</strong><br/>Immigration officers may ask for:
            <ul className="list-disc ml-6">
              <li>Return flight ticket</li>
              <li>Hotel reservation proof</li>
              <li>Conference registration proof</li>
              <li>Sufficient funds (~USD 500)</li>
            </ul>
          </li>
          <li><strong>Arrival at Bangkok Airports:</strong><br/>Main Airports: Suvarnabhumi (BKK) or Don Mueang (DMK). Airport transfer options: Taxi, Airport Rail Link, Grab, etc.</li>
        </ul>
      </section>

      {/* <section className="card">
        <h3 className="text-xl font-bold">Where Should This VISA Information Be Placed?</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>"Travel & Accommodation" Page</strong> – Under a dedicated "Visa Information" section.</li>
          <li><strong>"For International Authors" Page</strong> – If available.</li>
          <li><strong>"Registration Confirmation Email"</strong> – Include a link to the visa guidelines.</li>
          <li><strong>"Conference Invitation Letter Request Form"</strong> – With instructions on how to apply.</li>
        </ul>
      </section> */}

    </div>
    </div>
  );
};

export default VisaInformation;
