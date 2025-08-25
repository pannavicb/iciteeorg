import React from "react";
import "../css/QualityControl.css";

const QualityControl = () => {
  return (
    <div className="quality-container">
      <h4 className="title"></h4>
      <div className="card">      
      <p>
        ICITEE 2025 adopts a <strong>Rolling Review Process</strong> with an <strong>Open Review Policy</strong> to enhance the peer review experience and ensure high-quality research contributions. This approach provides <strong>timely, transparent, and constructive feedback</strong>, helping authors improve their work before final acceptance.
      </p>
      <p2>Our <strong>quality control strategy</strong> is based on:</p2>
      <p2>
      <ul>
        <li>
          <span className="check-icon"></span>
          <strong> Continuous review</strong> to provide rapid feedback and reduce delays.
        </li>
        <li>
          <span className="check-icon"></span>
          <strong> Transparent and interactive review</strong> to encourage constructive discussions.
        </li>
        <li>
          <span className="check-icon"></span>
          <strong> Revision opportunities</strong> to enhance the quality of accepted papers.
        </li>
      </ul>
      </p2>
    </div>      

      <div className="card">
        <h2><center>What is a Rolling Review Process?</center></h2>
        <p2>
<h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        
</p2>            
        <p2>
          A Rolling Review Process is a continuous submission and evaluation system where authors
          can submit their papers at any time within the submission window.
          Instead of waiting for a fixed deadline, papers are reviewed as they arrive, 
          and authors receive decisions within three weeks of submission.          
        </p2>
        <h3>Key Benefits of Rolling Review for Quality Control</h3>
        <h3>Faster Review & Decisions</h3>        
        <p2>
           <li>Papers are reviewed as soon as they are submitted, preventing delays in the review process.</li>
        </p2>
        <p2>
        <li>Authors receive feedback within three weeks, enabling them to revise and improve their work without long waiting times.</li>
        </p2>
        <h3></h3>
        <h3>Better Paper Quality</h3>        
        <p2>
           <li>Iterative Improvement: If a paper is not immediately accepted, authors often receive a Revise & Resubmit decision rather than outright rejection, encouraging them to refine their work.</li>
        </p2>
        <p2>
        <li>More Opportunities to Improve: Authors can incorporate expert feedback into their revisions, leading to higher-quality final submissions.</li>
        </p2>
        <p2>
        <li>Reduced Last-Minute Rush: Traditional conferences lead to rushed submissions near the deadline, often reducing quality. Rolling review allows authors to submit when they are ready, leading to better-prepared research papers.</li>
        </p2>
        <h3></h3>
        <h3>More Flexibility for Authors</h3>        
        <p2>
        <li>Researchers can submit their work at their convenience, avoiding the pressure of a single deadline.</li>
        </p2>
        <p2>
        <li>Beneficial for multi-stage research projects, where findings can be submitted incrementally rather than waiting for the next conference cycle.</li>
        </p2>
        <p>        
        </p>        
      </div>

      <div className="card">
        <h3><center>Comparison of Rolling vs. Traditional Reviews</center></h3>
        <p2>
          <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "30%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                  
          </p2>     

        {/* <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Rolling Review</th>
              <th>Traditional Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Submission Period</td>
              <td>Open for months</td>
              <td>Single deadline</td>
            </tr>
            <tr>
              <td>Review Start</td>
              <td>Immediately after submission</td>
              <td>After submission closes</td>
            </tr>
            <tr>
              <td>Decision Timeline</td>
              <td>3 weeks per submission</td>
              <td>Months after deadline</td>
            </tr>
            <tr>
              <td>Paper Quality</td>
              <td>Higher (more time for revision & feedback)</td>
              <td>Often rushed before deadline</td>
            </tr>
            <tr>
              <td>Author Response</td>
              <td>Available before final decision</td>
              <td>Usually after notification</td>
            </tr>
          </tbody>
        </table> */}

        <p2>
        <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 bg-white text-black min-w-[400px]">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Rolling Review</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Traditional Review</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["Submission Period", "Open for months", "Single deadline"],
        ["Review Start", "Immediately after submission", "After submission closes"],
        ["Decision Timeline", "3 weeks per submission", "Months after deadline"],
        ["Paper Quality", "Higher (more time for revision & feedback)", "Often rushed before deadline"],
        ["Author Response", "Available before final decision", "Usually after notification"]
      ].map((row, index) => (
        <tr key={index} className="odd:bg-white even:bg-gray-50">
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="border border-gray-300 px-4 py-2">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </p2>

      </div>

      <div className="card">
        <h2><center>What is an Open Review Policy?</center></h2>
        <p2>
          <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "30%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                  
          </p2>         
        <p2>
        ICITEE 2025 follows a Partially Open Review Policy, which enhances quality control by ensuring transparent and constructive reviews.
        </p2>
        <ul>
          <li>Reviews are publicly visible to authors and the research community.</li>
          <li>Authors can respond to reviewer feedback before the final decision.</li>
          <li>Reviewer identities remain anonymous to ensure fairness.</li>
          <li>Discussions between authors and reviewers improve the quality of submissions.</li>
        </ul>
        <h3>How Open Review Improves Quality Control:</h3>
        <ul>
          <li>Transparency – Public reviews encourage constructive and fair feedback.</li>
          <li>Accountability – Reviewers provide more detailed and professional feedback when reviews are visible.</li>
          <li>Author Engagement – Authors can clarify misunderstandings and refine their work before the final decision.</li>          
        </ul>
      </div>

      <div className="card">
        <h2><center>Why is ICITEE 2025 Implementing Rolling & Open Review?</center></h2>
        <p2>
          <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "30%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                  
          </p2>         
        <p2>
        Traditional peer review systems often suffer from delays, inconsistent feedback, and lack of author engagement. ICITEE 2025 is committed to ensuring high-quality research through a fairer and more transparent review process.
        </p2>
        <h3>Key Reasons for Implementing These Policies:</h3>
        <ul>
          <li><strong>Faster Decision-Making:</strong> Authors receive reviews within three weeks.</li>
          <li><strong>More Revision Opportunities:</strong> Papers can be refined through interactive discussions, leading to higher acceptance quality.</li>
          <li><strong>Fair & Transparent Reviews:</strong> Open discussions improve the constructiveness and reliability of feedback.</li>
          <li><strong>Encouraging High-Quality Submissions:</strong> Authors get detailed guidance to improve their work before final acceptance.</li>
          <li><strong>Greater Flexibility:</strong> Researchers can submit their work at the right time, avoiding deadline stress.</li>
        </ul>
      </div>

      <div className="card">
        <h2><center>Benefits for Authors</center></h2>
        <p2>
          <h4 className="title"><center>
                                      <img
                                              src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                              alt="Line"
                                              className=""
                                              style={{ width: "30%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                      /></center>
                </h4>
                  
          </p2>         
        <p2></p2>        
        <ul>
          <li><strong>Faster Review & Decisions:</strong> Receive feedback within 3 weeks of submission.</li>
          <li><strong>Higher Paper Quality:</strong> Iterative feedback helps refine research contributions.</li>
          <li><strong>Opportunity for Revisions:</strong> Instead of outright rejection, many papers will receive a Revise & Resubmit decision.</li>
          <li><strong>Increased Visibility:</strong> Open reviews allow the broader research community to engage with your work.</li>
          <li><strong>More Informed Decisions:</strong> Authors can respond to reviewers and clarify misunderstandings before final decisions.</li>
        </ul>
      </div>
    </div>
  );
};

export default QualityControl;
