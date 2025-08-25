import React from "react"; 

export const TopicsOfInterest = () => {
  const topics = [
    {
      title: "Information Technology",
      description:
        "Distributed Systems; AI-Driven Knowledge Discovery and Explainable AI; Big Data, Data Mining, and AI-driven Analytics; Visualization and Computer Graphics; Multimedia Computing & Applications; Human-Computer Interaction (HCI) and Brain-Computer Interfaces (BCI); Social Media and Computational Social Science; Mobile Computing and Edge AI; Internet of Things (IoT) and Industrial IoT (IIoT); AI in Digital Marketing and Personalized Advertising; Software Engineering and AI-Assisted Development; AI-Powered Decision Support Systems; Network and Cyber Security (including AI-driven threats); Generative AI and Foundation Models; Digital Twin Technology.",
    },
    {
      title: "Signal Processing and Machine Intelligence.",
      description:
        "Artificial Intelligence (including Generative AI and Foundation Models); Machine Learning (Self-Supervised Learning, Federated Learning, and Few-Shot Learning); High-Performance Computing for AI (GPUs and TPUs); AI-Driven Signal and Image Processing (including Neural Compression and Super-Resolution AI); AI-Based Image Synthesis (GANs, Diffusion Models, and Neural Rendering); Computer Vision (Vision Transformers, 3D Vision, and Multimodal Perception); Natural Language Processing (LLMs, Multimodal AI, and Prompt Engineering); Graph Neural Networks (GNNs) and Geometric Deep Learning; Neurosymbolic AI and Explainable AI (XAI); Bioinformatics and AI in Healthcare (Medical Imaging, Computational Genomics, and Biomedical Signal Processing); Spiking Neural Networks (SNNs) and Neuromorphic Computing.",
    },
    {
      title: "Communication and Network Technologies",
      description:
        "Networking and Telecommunication Systems; Wireless Ad-hoc and Sensor Networks; Cognitive Radio; Cooperative Communications; Radio Resource Management and Optimization; Vehicular Communications; Information Theory; Software Defined Networking",
    },
    {
      title: "Electronics, Circuits, and Systems",
      description:
        "Green Design for VLSI and Micro Electronic Circuits; Embedded Systems and SoC design; Power Electronics; RF Devices and Circuits; Computer-Aided-Electronics Design and Technology; Device Material and Manufacturing Technology; Photonic and Optoelectronic Circuits",
    },
    {
      title: "Power Systems",
      description:
        "Power Generation, Protection, and Conversion; Power Engineering and Systems; High-Voltage Engineering; Power Transmission and Distributions; Electric Motors; Power Electronics; Smart Grid; Renewable Energy; Microgrid and Distributed Generations",
    },
    {
      title: "Control Systems",
      description:
        "Control Theory and Applications; Robotics and Autonomous Systems; Intelligent Control, Robust and Nonlinear Control; Adaptive Control, Industrial Automation, and Control Systems Technology; Control of Infinite Dimensional Systems; Geometric Control Theory and Applications",
    },
    {
      title: "Special session: Agentic AI in Business Applications and Digital Transformation",
      description:
        "Decision-making, Digital Marketing, Process Automation, Software Development Workflows, IT System Integration, and Business Transformation",
    },
    {
      title: "The Joint Symposium on Computational Intelligence (JSCI)",
      description:
        "The Joint Symposium on Computational Intelligence (JSCI) was first held in 2016. It was initiated by the IEEE Computational Intelligence Society Thailand Chapter (IEEE-CIS Thailand Chapter) with the aim of supporting research students and young researchers. The symposium provides a platform for participants to share and discuss their research before submitting it to high-ranking journals. The event is open to all researchers interested in expanding their knowledge of computational intelligence. It features student paper presentations as well as invited talks.",  
      description2:
        "Neural Networks and Deep Learning;Fuzzy Systems and Fuzzy Logic;Evolutionary Computation and Genetic Algorithms;Swarm Intelligence and Nature-Inspired Computing;Machine Learning and Pattern Recognition;Data Mining and Knowledge Discovery;Bioinformatics and Biomedical Applications;Image and Signal Processing using CI Techniques;Natural Language Processing;Intelligent Robotics and Control Systems;Cognitive Computing and Brain-Inspired Systems;Hybrid Intelligent Systems;Optimization and Decision Support Systems;Reinforcement Learning and Online Learning;Explainable AI and Trustworthy CI Systems;Applications of CI in Smart Cities, Healthcare, Finance, Energy, and Industry 4.0;Cybersecurity and Privacy in Intelligent Systems."
    },
   
  ];

  return (
    <div className="page-topics-background  mb-5">
            {/* 🔹 เพิ่มรูปภาพหัวข้อ */}
            <div className="header-container text-center mb-5">
            </div>
      <div className="container">
        <h3 className="topics-title">
          The topics of interest include but are not limited to the following areas:
        </h3>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-row">
              <h3>
                 <div className="heading-left topics-title">{topic.title}</div>             
              </h3>

              {/* <div className="topic-description text-justify">{topic.description + "<\t>" + topic.description2}                  */}
              <div className="topic-description text-justify">
                {topic.description}
                <br /><br />
                {topic.description2}             
              <p2>
              <h4 className="title"><center>
                                    <img
                                            src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                            alt="Line"
                                            className=""
                                            style={{ width: "100%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                                    /></center>
              </h4>
             </p2> 

              </div>    
              {/* <div className="topic-description text-justify">{topic.description2}</div>                         */}
            </div>
            
          ))}
        </div>
        <div>
        {/* <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "80%", height: "0.25%"}} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4> */}
        </div>
      </div>
    </div>
  );
};