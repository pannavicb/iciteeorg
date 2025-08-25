import React from "react";
import "../css/QualityControl.css";

const Registration = () => {
  return (
    <div className="quality-container">
      <h1 className="title"><center>Important Dates</center></h1>
      
      <div className="card">
        <div className="">
         <h1></h1>
         <p><b>ICITEE 2025 offers two rounds of early-bird registration to align with our Rolling Review Process</b>, ensuring authors who submit early receive timely decisions. Papers that meet the quality criteria can be accepted as-is, allowing authors to secure the lowest registration fee in the first early-bird round. <b>This system encourages high-quality submissions</b> while giving authors ample time for revisions if needed.</p>
        <h1></h1>
        </div>
      </div>

      <div className="card">
        <div className="table-responsive">
        <table>

  <thead>
    <tr>
      <th>Date</th>
      <th>Event</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>May-28, 2025</td><td>Extra Early Bird Registration Deadline.</td></tr>
    <tr><td>Jul-23, 2025</td><td>Early Bird Registration Deadline.</td></tr>
    <tr><td>Aug-20, 2025</td><td>Final Paper Submission Deadline (Rolling Review Ends).</td></tr>
    <tr><td>Sep-05, 2025</td><td>Final Notification of Acceptance (Latest Possible Decision Date).</td></tr>
    <tr><td>Sep-10, 2025</td><td>Camera-Ready Submission Deadline.</td></tr>
    <tr><td>Sep-10, 2025</td><td>Final Registration Deadline.</td></tr>
    <tr><td>Oct-20,21, 2025</td><td>Conference Date.</td></tr>
  </tbody>
</table>


        </div>
      </div>
      
      <h1 className="title"><center>Registration Fees</center></h1>
      <div className="card">
        <div className="table-responsive">

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Extra Early Bird (by 28 May 2025)*</th>
                <th>Early Bird (by 23 July 2025)*</th>
                <th>Regular</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Non-IEEE Member</td><td>12,000 THB</td><td>13,500 THB</td><td>15,000 THB</td></tr>
              <tr><td>IEEE Member</td><td>11,500 THB</td><td>13,000 THB</td><td>14,500 THB</td></tr>
              <tr><td>Non-IEEE Student Member</td><td>10,000 THB</td><td>11,500 THB</td><td>12,500 THB</td></tr>
              <tr><td>IEEE Student Member</td><td>9,500 THB</td><td>11,000 THB</td><td>12,000 THB</td></tr>
              <tr><td>Accompanying Person</td><td colSpan="3">9,000 THB/Person</td></tr>
            </tbody>
          </table>
          
        </div>
        <h1></h1>
        <p>* All the registration fees should be paid by <b>THBs.(Thai Baht)</b> Authors are required to pay publication fees, which may vary depending on the exchange rate. Additionally, financial transaction charges may apply, affecting the total payment amount. Authors are advised to check with their financial institutions for applicable exchange rates and transaction fees before making payments.</p>
        <p>Each accepted paper should have at least one author making registration to publish the paper in the proceedings. <b>(ONE author registration will cover only ONE paper)</b> After July 23, please use the Regular registration rate. Other co-authors of the accepted papers can participate in the conference by making the registration as other participants. <b>Registration fees are non-refundable and non-transferable.</b></p>
      </div>
      
      <div className="card">      
      <h4>
                      <a href={`${process.env.PUBLIC_URL}/pdf/Registration Instructions for ICITEE 2025.pdf`} 
                  className="btn btn-custom btn-lg page-scroll" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  ** Registration Instructions for ICITEE 2025 **
                </a> </h4>
      </div>

      <div className="card">      
      <h4>
                <a href='https://events.it.kmitl.ac.th/' 
                  className="btn btn-custom btn-lg page-scroll" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  ** Online Registration **
                </a> </h4>
      </div>

      <div className="card">
        <h4>The registration fee for ICITEE 2025 includes:</h4>
        <ul>
          <li>Conference kit</li>
          <li>Two lunches and four coffee breaks (over two days)</li>
          <li>Banquet dinner on Day 1</li>
          <li>Cruise dinner on Day 2</li>
        </ul>
      </div>
      {/* <div className="quality-container">
      <h1 className="title"><center>Important Dates & Registration</center></h1>
      
      <div className="card">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan="5"><center>Early Bird Registration (Round 1): May 28, 2025</center></th>
              </tr>
              <tr>
                <th>Non-IEEE Member</th>
                <th>IEEE Member</th>
                <th>Non-IEEE Student Member</th>
                <th>IEEE Student Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12,000 Baht</td>
                <td>11,500 Baht</td>
                <td>10,000 Baht</td>
                <td>9,500 Baht</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="card">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan="5"><center>Early Bird Registration (Round 2): July 23, 2025</center></th>
              </tr>
              <tr>
                <th>Non-IEEE Member</th>
                <th>IEEE Member</th>
                <th>Non-IEEE Student Member</th>
                <th>IEEE Student Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13,500 Baht</td>
                <td>13,000 Baht</td>
                <td>11,500 Baht</td>
                <td>11,000 Baht</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       */}
      {/* <div className="card"><center>
        <p style={{ color: "red" }}>Final Paper Submission Deadline (Rolling Review Ends): <b>August 20, 2025</b></p>
        <p style={{ color: "red" }}>Final Notification of Acceptance (Latest Possible Decision Date): <b>September 5, 2025</b></p>
        <p>Final Registration Deadline: <b> September 10, 2025</b></p>
        </center></div>
      
      <div className="card">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Non-IEEE Member</th>
                <th>IEEE Member</th>
                <th>Non-IEEE Student Member</th>
                <th>IEEE Student Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15,000 Baht</td>
                <td>14,500 Baht</td>
                <td>12,500 Baht</td>
                <td>12,000 Baht</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      
      {/* <div className="card"><center>
        <p>Camera-Ready Submission Deadline: <b>September 10, 2025</b></p>
        <p>The registration fee for an accompanying person:<b> 9,000 Baht/Person</b></p>
        </center></div>
      
      <h4 className="">The registration fee for ICITEE 2025 includes:</h4>
      <div className="card">
        <ul>
          <li>Conference kit</li>
          <li>Two lunches and four coffee breaks (over two days)</li>
          <li>Banquet dinner on Day 1</li>
          <li>Cruise dinner on Day 2</li>
        </ul>
      </div>
    </div> */}
    </div>
    
  );
};

export default Registration;