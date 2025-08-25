import React from "react";
// import "../css/Team.css";

export const Team2 = (props) => {
  return (
    <div id="team2" style={{background: 'white'}} className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h1></h1>
          <h33>Organizer</h33>
          <p>
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 team">
                  <div className="thumbnail">                 
                    <img src={d.img} alt="..." className="team-img " />
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
