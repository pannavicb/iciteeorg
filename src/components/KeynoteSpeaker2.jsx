import React, { useState, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
  en: {
    travelTips1: 'Abstract:',
    content1:
      'Technologies for accurately recognizing the positions of people and objects are essential for realizing applications such as the Internet of Things (IoT), cyber-physical systems (CPS), augmented reality (AR), and digital twins. While Global Navigation Satellite System (GNSS) is the standard positioning technology in outdoor environments, there is still no such universally accepted technology for indoor settings, and various approaches have been proposed so far. Some market research reports predict that the market related to indoor positioning technologies is expected to grow at a compound annual growth rate (CAGR) exceeding 40%, reaching USD 150 billion by 2030. In light of the social background, this talk will first introduce recent research trends in indoor positioning technologies. Then, some of the research achievements from the speaker group indoor positioning research project will be presented. The talk will describe indoor positioning systems realized using smartphone built-in sensors and provide examples of their applications. Finally, future prospects for research in indoor positioning will be discussed.',
    
    travelTips2: 'Bio:',
    content2:
      'Masanori Sugimoto received the B.E., M.E., and D.E. degrees in aeronautics and astronautics from the University of Tokyo, Tokyo, Japan, in 1990, 1992 and 1995, respectively. He is currently a Professor with the Graduate School of Information Science and Technology, Hokkaido University, Sapporo, Japan. His research interests include acoustic engineering, signal processing, artificial intelligence, and human-computer interaction technologies for designing smart systems and environments',
  },
};

const TravelGuidance1 = () => {
  const [lang] = useState('en');
  const t = translations[lang] || translations['en'];
  const mapRef = useRef(null);

  return (
    <div className="quality-container">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Speaker Info */}
        <div className="text-center md:text-left">
          <img
            src={`${process.env.PUBLIC_URL}/img/masanori-sugimoto.jpg`}
            alt="Prof. Masanori Sugimoto"
            className="img-fluid mb-3"
            style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
          />
          <h1></h1>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold m-0">Prof. Masanori Sugimoto</h2>
            <h3 className="text-lg font-semibold m-0">Hokkaido University</h3>
          </div>
        </div>

        {/* Abstract */}
        <section className="mt-8 mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips1}</h2>
          <p className="mb-4 text-justify">{t.content1}</p>
          <p className="mb-2 text-justify">{t.content12}</p>
        </section>

        {/* Bio */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.travelTips2}</h2>
          <p className="mb-2 text-justify">{t.content2}</p>
        </section>

      </div>
    </div>
  );
};

export default TravelGuidance1;
