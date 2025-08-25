import React from "react";
// import "../css/Team.css";
// update this file
export const Team4 = (props) => {
  return (
    <div id="team4" style={{background: 'white'}} className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h33>Co-Organizer</h33>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 team">
                  <div className="thumbnail">                 
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
