import React from "react";

export const KeynoteList = () => {
  const keynoteData = [
    {
      name: "Prof. Masanori Sugimoto",
      affiliation: "Hokkaido University",
      summary: "Expert in Indoor Positioning Technologies and Smart Systems.",
      photo: `${process.env.PUBLIC_URL}/img/masanori-sugimoto.jpg`,
      link: "/keynote-speaker-MasanoriSugimoto",
    },
    {
      name: "Prof. Dr. Emi Yuda",
      affiliation: "Mie University",
      summary: "Specialist in biomedical signal processing and health data analysis.",
      photo: `${process.env.PUBLIC_URL}/img/emi-yuda.jpg`,
      link: "/keynote-speaker-EmiYuda",
    },
  ];

  return (
    <div id="keynote" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Keynote Speakers</h2>
          <p className="text-justify">
            Meet our distinguished keynote speakers from leading universities and organizations.
          </p>
        </div>

       <div className="row">
  {keynoteData.map((speaker, i) => (
    <div key={`${speaker.name}-${i}`} className="col-6 mb-4">
      <div className="card text-center p-3 shadow-sm h-100">
        <img
          src={speaker.photo}
          alt={speaker.name}
          className="img-fluid mb-3"
          style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
        />
        <h4>{speaker.name}</h4>
        <p className="text-muted">{speaker.affiliation}</p>
        <p>{speaker.summary}</p>
        <a
          href={speaker.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          View Details
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default KeynoteList;
