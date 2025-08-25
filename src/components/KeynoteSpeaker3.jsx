import React, { useState, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/QualityControl.css";
import "../css/TravelGuidance.css";

const translations = {
  en: {
    travelTips1: 'Abstract:',
    content1:
      'Heart rate variability (HRV) has long been used as a non-invasive indicator of autonomic nervous system activity, and it has become widely adopted in fields ranging from human interface design to human-robot interaction. However, misinterpretations and methodological pitfalls in HRV analysis remain widespread, often leading to erroneous conclusions about autonomic function. Our landmark paper, “Pitfalls of assessment of autonomic function by heart rate variability” (2019), has been cited more than 370 times in just five years, reflecting the growing concern and interest in improving the scientific rigor of HRV-based assessments.',
    content12:
      'In this talk, I will discuss the physiological basis of HRV, clarify common misunderstandings in its interpretation, and demonstrate why certain HRV metrics fail to reflect autonomic balance under conditions involving speech, motion, or cognitive load. Using evidence from both experimental and clinical studies, I will outline appropriate methods for extracting meaningful physiological information from HRV and related bio-signals. Furthermore, I will introduce practical applications of refined HRV analysis in the context of real-world systems, such as driver monitoring, fatigue detection, and affective computing. Emphasis will be placed on aligning signal processing techniques with physiological principles to ensure robust and interpretable outcomes. This presentation aims to promote more accurate and effective use of bio-signal analysis in modern human-centered technologies.',
    travelTips2: 'Bio:',
    content2:
      'Prof. Dr. Emi Yuda is a professor specializing in biomedical signal processing and bio-medical big data analysis. Her obtained her PhD in Engineering from Niigata University, and served as an assistant professor and associate professor at Tohoku University, before becoming a professor at Mie University in 2024. Her research interests span a wide range of fields, from biomedical engineering to health sciences, including autonomic nerve interpretation using heart rate variability (HRV) analysis extracted from electrocardiograms (ECGs), as well as multimodal analysis centered on time series data from wearable sensors. She has contributed to the development of advanced algorithms for detecting human cardiac diseases, sleep apnea, fatigue, drowsiness, and posture changes. Recent research has utilized bio-signal analysis for ensuring the safety of elderly people and drivers. In biomedical big data analysis, she integrates the analysis using machine learning. She has published numerous papers in peer-reviewed journals and international conferences, and is actively engaged in collaborative research with industry and medical institutions.',
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
            src={`${process.env.PUBLIC_URL}/img/emi-yuda.jpg`}
            alt="Prof. Dr. Emi Yuda"
            className="img-fluid mb-3"
            style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
          />
          <h1></h1>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold m-0">Prof. Dr. Emi Yuda</h2>
            <h2 className="text-lg font-semibold m-0">Mie University in 2024</h2>            
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
