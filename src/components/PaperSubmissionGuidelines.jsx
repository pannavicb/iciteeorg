import React from "react";
import "../css/QualityControl.css";

const PaperSubmissionGuidelines = () => {
  return (
    <div className="quality-container">
      <h4 className="title"><center>General Submission Guidelines</center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
      <div className="card">
        <p>
          Prospective authors are invited to submit original full papers (4 to 6 pages) in A4 IEEE Xplore double-column format, including tables, figures, and references.
        </p>
        <p2>General Submission Guidelines:</p2>
        <p>
        <ul>
          <li>Submissions must be written in English and adhere to <b><u><i><a href="https://www.ieee.org/conferences/publishing/templates.html"> IEEE formatting guidelines.</a></i></u></b></li>
          <li>All submitted papers must be original, unpublished, and not under review elsewhere.</li>
          <li>Papers exceeding 6 pages (excluding references) will be automatically rejected.</li>
          <li>All papers must be submitted electronically through the <b><u><i><a href="https://edas.info/N33533">EDAS Conference Submission System.</a></i></u></b></li>
          <li>Authors must ensure their paper is processable for similarity checking (e.g., no scanned images of text).</li>
          <li>Papers with plagiarism or self-plagiarism exceeding 30% similarity will be immediately rejected.</li>
        </ul>
        </p>
      </div>
      <div className="card">
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Group_233.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "100%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
      </div>
      <div className="card">
      <h4 className="title"><center> Rolling Review Process</center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <h3><center>Continuous Submission and Review Timeline</center></h3>
        <p2>
          ICITEE 2025 implements a rolling review process, meaning papers are reviewed as they are submitted rather than waiting for a fixed deadline. Authors will receive a decision within three weeks of submission.
        </p2>

        <h3><center>Decision Categories</center></h3>
        <p2>Each submission will receive one of the following decisions:</p2>
        <p2>
        <h3><center></center></h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
          <div>
            {/* <img src={`${process.env.PUBLIC_URL}/img/Group216.png`} alt="Image 1" style={{ maxWidth: "100%", height: "50px" }} /> */}
            <center>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <a 
    href=""
    className="btn btn-custom btn-lg page-scroll" 
    target="" 
    rel="noopener noreferrer"
    style={{ maxWidth: "300px", width: "80%" }} // ปรับขนาดให้ตอบสนอง
  >
    Accept
  </a>
</div>

</center>
            <h1><center></center></h1>
            <p className="">The paper is accepted as-is and will be included in the proceedings.</p>
          </div>          
          <div>
            {/* <img src={`${process.env.PUBLIC_URL}/img/Group218.png`} alt="Image 2" style={{ maxWidth: "100%", height: "50px" }} /> */}
            <center>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <a 
    href=""
    className="btn btn-custom btn-lg page-scroll" 
    target="" 
    rel="noopener noreferrer"
    style={{ maxWidth: "300px", width: "80%" }} // ปรับขนาดให้ตอบสนอง
  >
    Revise & Resubmit
  </a>
</div>

</center>
            <h1><center></center></h1>
            <p className="">The paper is conditionally accepted, but authors must address reviewer concerns and submit a revised version within four weeks.</p>
          </div>
          <div>
            {/* <img src={`${process.env.PUBLIC_URL}/img/Group219.png`} alt="Image 3" style={{ maxWidth: "100%", height: "50px" }} /> */}
            <center>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <a 
    href=""
    className="btn btn-custom btn-lg page-scroll" 
    target="" 
    rel="noopener noreferrer"
    style={{ maxWidth: "300px", width: "80%" }} // ปรับให้ขนาดตอบสนอง
  >
    Reject
  </a>
</div>

</center>
            <h1><center></center></h1>
            <p className="">The paper does not meet the quality standards and is not eligible for resubmission.</p>
          </div>
        </div>
        <h3><center></center></h3>

        </p2>
        <ul>
          {/* <li><strong>Accept:</strong> The paper is accepted as-is and will be included in the proceedings.</li>
          <li><strong>Revise & Resubmit (R&R):</strong> The paper is conditionally accepted, but authors must address reviewer concerns and submit a revised version within four weeks.</li>
          <li><strong>Reject:</strong> The paper does not meet the quality standards and is not eligible for resubmission.</li> */}
        </ul>
        <p2>
          Note: A "Revise & Resubmit" decision does not guarantee acceptance. The revised paper will undergo another review before a final decision is made.
        </p2>
      </div>

      <div className="card">
      <h4 className="title"><center> Open Review Policy </center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <p2>
          ICITEE 2025 adopts a <strong>Partially Open Review Policy</strong> to enhance transparency and encourage constructive discussions.
        </p2>
        <ul>
          <li>Authors can view all reviews and feedback on their papers.</li>
          <li>Reviewer identities remain anonymous to ensure fairness.</li>
          <li>Reviewers may update their evaluations based on author responses.</li>
        </ul>

        <h4 className="title"><center> How Open Review Works </center></h4>        
        <p2>
        <ol>
          <li><strong>1. Initial Submission:</strong> Authors submit their anonymized paper through EDAS.</li>
          <li><strong>2. Review Assignment:</strong> Papers are assigned to three reviewers who provide detailed feedback.</li>
          <li><strong>3. Rebuttal Phase:</strong> Authors receive reviews within three weeks and have four weeks to submit a rebuttal addressing reviewer comments, clarifying misunderstandings, and justifying their research decisions.</li>
          <li><strong>4. Reviewer Updates (Optional):</strong> Reviewers may update their evaluations after considering the author’s rebuttal, but this is optional and at the reviewer’s discretion.</li>
          <li><strong>5. Decision:</strong> The Track Chair considers initial reviews, author rebuttals, and any reviewer updates before making a final decision on acceptance or rejection.</li>
          <li><strong>6. Public Review Phase:</strong> Only accepted papers and their corresponding reviews (with reviewer and author identities anonymized) will be publicly accessible. This promotes academic transparency, encourages constructive discussions, and enhances knowledge-sharing on high-quality research.</li>
        </ol>
        </p2>
        <h4 className="title"><center> Why Open Review? </center></h4>        
        <h3></h3>
        <ul>
          <li>Encourages high-quality, transparent feedback.</li>
          <li>Allows the research community to engage with accepted papers and their reviews.</li>
          <li>Ensures a fair review process with accountability while protecting rejected papers.</li>
        </ul>
        <center>
      <a 
  href="/quality-control-management" 
>
<span>🔗</span> <u><i>For More Information</i></u>
</a> </center>
      </div>
     
      <div className="card">
        <h4 className="title"><center> Formatting and Anonymity Policy </center></h4>
        <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <h3><center>Formatting</center></h3>
        <p2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            <div style={{ flex: "1 1 150px", display: "flex", justifyContent: "center" }}>
              {/* <img
                src={`${process.env.PUBLIC_URL}/img/Group 220.png`}
                alt="Image 1"
                style={{ maxWidth: "30%", Height: "50px" }}
              /> */}

<center>
  <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">
    <img 
      src={`${process.env.PUBLIC_URL}/img/Group 220.png`} 
      alt="IEEE Templates"
      style={{ maxWidth: "80%", maxHeight: "80%" }} 
    />
    <br />
    {/* <span>🔗</span><i>For More Information</i> */}
  </a>
</center>

            </div>
            <div style={{ flex: "1 1 150px", display: "flex", justifyContent: "center" }}>
              {/* <img
                src={`${process.env.PUBLIC_URL}/img/Group 221.png`}
                alt="Image 2"
                style={{ maxWidth: "40%", Height: "50px" }}
              /> */}

<center>
  <a href="https://www.ieee.org/publications/rights/copyright-main.html" target="_blank" rel="noopener noreferrer">
    <img 
      src={`${process.env.PUBLIC_URL}/img/Group 221.png`} 
      alt="IEEE Templates"
      style={{ maxWidth: "80%", maxHeight: "80%" }} 
    />
    <br />
    {/* <span>🔗</span><i>For More Information</i> */}
  </a>
</center>

            </div>
          </div>


        </p2>
        <ul>
          <li>Papers must follow the IEEE A4 two-column format.</li><p><break></break></p>
          <li>Templates can be found here: <span>🔗</span> <u><a href="https://www.ieee.org/conferences/publishing/templates.html"><i><b>IEEE Templates</b></i></a></u></li>
        </ul>

        <h3><center>Anonymity (For First Submission Only)</center></h3>
        <ul>
          ICITEE 2025 follows a partially anonymized review process. Initial submissions must be double-blind, meaning:<p><break></break></p>
          1. <b>Do NOT </b>include author names, emails, or affiliations anywhere in the paper.<p><break></break></p>
          2. <b>Self-citations must be anonymized</b> (e.g., use "Blind year" instead of "Smith et al., 2023").<p><break></break></p>
          3. <b>Remove identifying information </b>from document metadata before submission.<p><break></break></p>
        </ul>
      </div>

      <div className="card">
      <h4 className="title"><center> Revision and Resubmission Policy </center></h4><p><break></break></p>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
      <h4 className="title"><center><h3> Revision Guidelines (For Revise & Resubmit Decisions)</h3></center></h4>
        <ul>
          <li>Authors receiving an R&R decision must submit a revised paper that thoroughly addresses all reviewer comments. Submissions with only minor modifications or insufficient revisions may be rejected.</li>
          <li>Revised papers must be submitted within <b>four weeks </b>of receiving reviewer feedback.</li>
          <li>A detailed response letter is required, summarizing changes and justifications for any reviewer comments that were not fully implemented.</li>
          <li>Major changes must be clearly marked using tracked changes or highlighted text for easy identification.</li>
          <li>Whenever possible, the same reviewers will re-evaluate the revised submission to ensure continuity and consistency in feedback.</li>
        </ul>

        <h4 className="title"><center> Camera-Ready Submission Guidelines </center></h4>
<h3></h3>
<ul>
  <li>Final accepted papers must include author <b> names, emails, and affiliations.</b></li>
  <li>All accepted papers will be <b>checked for compliance</b> with IEEE Xplore standards before publication.</li>
  <li>Authors must <b>sign the IEEE Copyright Form </b> before final submission.</li>
  <li>Only papers that <b>pass the IEEE PDF eXpress check </b> will be included in the conference proceedings.<p><break></break></p></li><p><break></break></p>
</ul><p><break></break></p>
<p2><center><b><i> IEEE PDF eXpress </i></b> Instructions: </center> <p><break></break></p> 

<p2>
<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
  {/* ส่วนของรูปภาพ */}
  {/* <div style={{ flex: "1 1 150px", textAlign: "center" }}>
    <img
      src={`${process.env.PUBLIC_URL}/img/Group 221.png`}
      alt="Image 1"
      style={{ maxWidth: "80%", maxHeight: "80%" }}
    />
  </div> */}

  {/* ส่วนของรูปภาพ */}
  <div style={{ flex: "1 1 150px", textAlign: "center" }}>
    {/* <img
      src={`${process.env.PUBLIC_URL}/img/Frame 222.png`}
      alt="Image 2"
      style={{ maxWidth: "50%", Height: "50px" }}
    /> */}

<center>
  <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer">
    <img 
      src={`${process.env.PUBLIC_URL}/img/Frame 222.png`} 
      alt="IEEE Templates"
      style={{ maxWidth: "50%", Height: "50px" }}
    />
    <br />
    {/* <span>🔗</span><i>For More Information</i> */}
  </a>
</center>

  </div>
  {/* ส่วนของข้อความ */}
  <div style={{ flex: "2 1 400px", textAlign: "left" }}>
    <p>
      Log in to the <span>🔗</span> 
      <b>
        <i>
          <u><a href="https://ieee-pdf-express.org/"><i>IEEE PDF eXpress™</i></a></u>
        </i>
      </b> site
    </p>
    <p>First-time users should do the following:</p>
    <ol>
      <li>
        <p>1. Select the New Users - <span>🔗</span> 
          <u><a href="https://ieee-pdf-express.org/account/signup"><i><b>Click Here link.</b></i></a></u>
        </p>
      </li>
      <li>
    <p>2. Enter the following:</p>
        <ul>
            <li>
                66631X for the Conference ID
            </li>
            <li>
                Your email address
            </li>
            <li>
                A password
            </li>
        </ul>
</li>


      <li><p>3. Continue to enter information as prompted.</p></li>
      <li><p>An online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.</p></li>
    </ol>
  </div>
</div>
</p2>
</p2>

<div className="card">
  <h4 className="title"><center> Submission Process and EDAS Instructions </center></h4>
  <h4 className="title"><center>
    <img
      src={`${process.env.PUBLIC_URL}/img/Line9.png`}
      alt="Line"
      className=""
      style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
    /></center>
  </h4>
  <h4 className="title">
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <div style={{ flex: "1 1 150px", textAlign: "center" }}>
    {/* <img
      src={`${process.env.PUBLIC_URL}/img/Group220.png`}
      alt="Image 1"
      style={{ maxWidth: "30%", Height: "50px" }}
    /> */}

{/* <center>
  <a href="https://edas.info/N33533" target="_blank" rel="noopener noreferrer">
    <img 
      src={`${process.env.PUBLIC_URL}/img/Group220.png`} 
      alt="IEEE Templates"
      style={{ maxWidth: "30%", Height: "50px" }} 
    />
    <br />
    {/* <span>🔗</span><i>For More Information</i> *
  </a>
</center> */}
<center>
<div>
                <a href="https://edas.info/N33533"
                  className="btn btn-custom btn-lg page-scroll" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  EDAS Link for Submission
                </a>
                </div>
</center>


    </div>
  </div></h4>
  <h2></h2><p><break></break></p>
  <p2>📌 Submission Portal: <span>🔗</span> <u><a href="https://edas.info/N33533"><i><b>ICITEE 2025 EDAS Submission</b></i></a></u></p2>
  <h3>Steps to Submit a Paper:</h3>
  <ul>
    <li>Step 1 - Log in to EDAS (Create an account if you don’t have one).</li>
    <li>Step 2 - Click "Submit Paper" and choose the relevant track.</li>
    <li>Step 3 - Upload your double-blind formatted PDF.</li>
    <li>Step 4 - Enter all author details and affiliations in EDAS.</li>
    <li>Step 5 - Click Submit and wait for confirmation.</li>
  </ul>
  <h3>Steps for Revised Submissions:</h3>
  <ul>
    <li>Upload the <b>revised </b>paper with marked changes.</li>
    <li>Upload the <b>response </b> letter detailing how reviewer comments were addressed.</li>
    <li>Complete the <b>resubmission </b> before the revision deadline.</li>
  </ul>
</div>

<div className="card">
  <h4 className="title"><center> Ethical Guidelines and Quality Control </center></h4>
  <h4 className="title"><center>
    <img
      src={`${process.env.PUBLIC_URL}/img/Line9.png`}
      alt="Line"
      className=""
      style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
    /></center>
  </h4>
  <h3>ICITEE 2025 is committed to maintaining high research integrity. Authors must adhere to the following guidelines:</h3>
  <ul>
    <li><b>Plagiarism must be below 30% </b>(checked via similarity detection tools).</li>
    <li><b>No dual submissions </b> – Papers under review elsewhere will be immediately rejected.</li>
    <li><b>Respectful review discussions </b> – Unprofessional author responses may result in rejection.</li>
    <li><b>Strict formatting compliance </b>– Papers that do not follow IEEE format will be rejected.</li>
  </ul>
  <p2>📌 <b>Important: </b>The Technical Program Committee reserves the right to reject submissions that fail quality control checks, even before the review process.</p2>
</div>

<div className="card">
  <h4 className="title"><center> Contact and Support </center></h4>
  <h4 className="title"><center>
    <img
      src={`${process.env.PUBLIC_URL}/img/Line9.png`}
      alt="Line"
      className=""
      style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
    /></center>
  </h4>
  <h2></h2>
  <p2>For any questions regarding submission, formatting, or the review process, please contact:</p2>
  <p><break></break></p>
  <p2>📧 ICITEE 2025 Submission Committee: <span>🔗</span> <a href="mailto:icitee2025@it.kmitl.ac.th"><i><b>icitee2025@it.kmitl.ac.th</b></i></a></p2> <p><break></break></p>
  <p2>🌐 Conference Website: <span>🔗</span> <a href="https://icitee2025.it.kmitl.ac.th/"><i><b>https://icitee2025.it.kmitl.ac.th/</b></i></a></p2>
</div>
</div>
</div>

  );
};

export default PaperSubmissionGuidelines;
