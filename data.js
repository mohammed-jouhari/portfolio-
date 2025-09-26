const cvData = {
  personal: {
    fullName: "Mohammed Jouhari",
    title: "Assistant Professor & Researcher",
    summary: `
      <p>Dr. Mohammed Jouhari is an Assistant Professor of Computer Science at Ibn Tofail University, Faculty of Sciences (Kenitra, Morocco).
      He received his Ph.D. in Computer Science from Ibn Tofail University in 2019, with a dissertation focused on underwater wireless sensor networks.</p>

      <p>His research interests include cybersecurity, Internet of Things (IoT), intrusion detection systems, distributed and federated learning, and intelligent networking.
      He has co-authored numerous publications in leading IEEE and Elsevier journals and conferences, addressing challenges in lightweight security solutions for resource-constrained devices.</p>

      <p>Beyond research, Dr. Jouhari is actively engaged in the academic community as a reviewer for more than 20 international journals,
      a member of technical program committees for major IEEE conferences (including Globecom, ICC, IWCMC, and WINCOM), and a session/track chair at international events.
      Since 2025, he has served as an Editorial Board Member for <i>Humanities and Social Sciences Communications</i> (Springer Nature).</p>

      <p>He has also taught a wide range of courses in computer science and engineering, from cybersecurity and operating systems to cloud computing and digital culture,
      mentoring both master’s and Ph.D. students. His work combines academic rigor with a strong commitment to capacity building and scientific collaboration, both nationally and internationally.</p>
    `,
    contact: {
      email: "user@example.com",
      linkedin: "https://linkedin.com/in/username",
      googleScholar: "https://scholar.google.com/citations?user=xyz",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=00000000000",
      orcid: "https://orcid.org/0000-0000-0000-0000"
    }
  },

  professionalExperience: [
    {
      title: "Assistant Professor",
      organization: "Faculty of Sciences, Ibn Tofail University",
      location: "Kenitra, Morocco",
      start: "2024",
      end: "Present",
      details: [
        "Teaching courses in cybersecurity, distributed systems, and intelligent networks.",
        "Supervising Master’s theses and doctoral dissertations.",
        "Engaged in IoT and sensor network research projects and co-organizer of scientific events and workshops."
      ]
    },
    {
      title: "Assistant Professor",
      organization: "Moroccan School of Engineering Sciences (EMSI)",
      location: "Tangier, Morocco",
      start: "2023",
      end: "2024",
      details: [
        "Delivered courses on Unix systems, application security, and virtualization.",
        "Supervised undergraduate final-year projects.",
        "Contributed to the development of curricula and innovative teaching methods."
      ]
    },
    {
      title: "Postdoctoral Researcher",
      organization: "Mohammed VI Polytechnic University (UM6P)",
      location: "Benguerir, Morocco",
      start: "2021",
      end: "2023",
      details: [
        "Conducted research on machine learning for energy-efficient IoT and sensor networks.",
        "Published results in indexed journals and presented at international conferences.",
        "Collaborated with national and international research teams."
      ]
    },
    {
      title: "Postdoctoral Researcher",
      organization: "Qatar University",
      location: "Doha, Qatar",
      start: "2020",
      end: "2021",
      details: [
        "Developed AI-based methods for drones and intelligent surveillance systems.",
        "Coordinated funded projects and contributed to joint international publications.",
        "Supervised Master’s students in computer science."
      ]
    },
    {
      title: "Adjunct Lecturer",
      organization: "Ibn Tofail University",
      location: "Kenitra, Morocco",
      start: "2017",
      end: "2020",
      details: [
        "Taught courses in data security, VoIP, and IPv6 for undergraduate and graduate students.",
        "Conducted research on underwater wireless sensor networks.",
        "Supervised research projects and Master’s theses."
      ]
    }
  ],

  education: [
    {
      degree: "National PhD",
      field: "Mathematics, Computer Science, and Applications",
      institution: "Ibn Tofail University, Faculty of Sciences",
      location: "Kenitra, Morocco",
      start: "2014",
      end: "2019",
      thesisTitle: "Advances in Underwater Wireless Sensor Networks: Improvements in MAC Layer, Topology Control, and Geographic Routing Protocols.",
      supervisor: "Prof. Khalil Ibrahimi",
      distinction: "Highest honors with congratulations of the examination committee"
    },
    {
      degree: "Master’s Degree",
      field: "Computer Science, Signals, and Telecommunications (Research Track)",
      institution: "Mohammed V University, Faculty of Sciences",
      location: "Rabat, Morocco",
      start: "2011",
      end: "2013",
      distinction: "Fairly Good"
    },
    {
      degree: "Bachelor’s Degree",
      field: "Fundamental Studies in Physics",
      institution: "Mohammed V University, Faculty of Sciences",
      location: "Rabat, Morocco",
      start: "2009",
      end: "2011"
    },
    {
      degree: "Baccalaureate",
      field: "Experimental Sciences",
      institution: "Ibn Rochd High School",
      location: "Temara, Morocco",
      start: "2007",
      end: "2008"
    }
  ],

  publications: { 
  journals: [
    {
      authors: "Hafsa Benaddi; Mohammed Jouhari; Omar Elharrouss",
      title: "A lightweight hybrid approach for intrusion detection systems using a chi-square feature selection approach in IoT",
      venue: "Internet of Things",
      year: 2025,
      details: {
        volume: 32,
        pages: "101624",
        doi: "https://doi.org/10.1016/j.iot.2025.101624",
        url: "https://www.sciencedirect.com/science/article/pii/S2542660525001386",
        impactFactor: 7.6
      }
    },
    {
      authors: "Mohammed Jouhari; El Mehdi Amhoud; Nasir Saeed; Mohamed-Slim Alouini",
      title: "A Survey on Scalable LoRaWAN for Massive IoT: Recent Advances, Potentials, and Challenges",
      venue: "IEEE Communications Surveys & Tutorials",
      year: 2022,
      details: {
        volume: 25,
        number: 3,
        pages: "1841–1876",
        doi: "https://doi.org/10.1109/COMST.2023.3274934",
        url: "https://ieeexplore.ieee.org/abstract/document/10122600",
        impactFactor: 33.84
      }
    },
    {
      authors: "H. Benaddi; Mohammed Jouhari; K. Ibrahimi; J. Ben Othman; A. Benslimane; El Mehdi Amhoud",
      title: "Anomaly Detection in Industrial IoT using Distributional Reinforcement Learning and Generative Adversarial Networks",
      venue: "Sensors",
      year: 2022,
      details: {
        volume: 22,
        number: 21,
        pages: "8085",
        doi: "https://doi.org/10.3390/s22218085",
        url: "https://www.mdpi.com/1424-8220/22/21/8085",
        impactFactor: 3.847
      }
    },
    {
      authors: "H. Benaddi; K. Ibrahimi; A. Benslimane; Mohammed Jouhari; J. Qadir",
      title: "Robust Enhancement of Intrusion Detection Systems Using Deep Reinforcement Learning and Stochastic Game Approaches",
      venue: "IEEE Transactions on Vehicular Technology",
      year: 2022,
      details: {
        volume: 71,
        number: 10,
        pages: "11089–11102",
        doi: "https://doi.org/10.1109/TVT.2022.3186834",
        url: "https://ieeexplore.ieee.org/abstract/document/9809923",
        impactFactor: 5.978
      }
    },
    {
      authors: "Mohammed Jouhari; A. Al-Ali; E. Baccour; A. Mohamed; A. Erbad; M. Guizani; M. Hamdi",
      title: "Distributed CNN Inference on Resource-Constrained UAVs for Surveillance Systems: Design and Optimization",
      venue: "IEEE Internet of Things Journal",
      year: 2021,
      details: {
        volume: 9,
        number: 2,
        pages: "1227–1242",
        doi: "https://doi.org/10.1109/JIOT.2021.3079164",
        url: "https://ieeexplore.ieee.org/abstract/document/9428021",
        impactFactor: 9.936
      }
    },
    {
      authors: "Mohammed Jouhari; K. Ibrahimi; H. Tembine; J. Ben-Othman",
      title: "Underwater Wireless Sensor Networks: A Survey on Enabling Technologies, Localization Protocols, and Internet of Underwater Things",
      venue: "IEEE Access",
      year: 2019,
      details: {
        volume: 7,
        pages: "96879–96899",
        doi: "https://doi.org/10.1109/ACCESS.2019.2928876",
        url: "https://ieeexplore.ieee.org/abstract/document/8763947",
        impactFactor: 4.098
      }
    },
    {
      authors: "Mohammed Jouhari; K. Ibrahimi; H. Tembine; J. Ben-Othman",
      title: "Signaling Game Approach to Improve the MAC Protocol in the Underwater Wireless Sensor Networks",
      venue: "International Journal of Communication Systems",
      year: 2019,
      details: {
        volume: 32,
        number: 13,
        pages: "e3971",
        doi: "https://doi.org/10.1002/dac.3971",
        url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/dac.3971",
        impactFactor: 1.278
      }
    }
  ],

  conferences: [
    {
      authors: "A. Serhane; K. Ibrahimi; E. Hamzaoui; Mohammed Jouhari; J. Ben-Othman",
      title: "IoT Intrusion Detection Using Machine Learning Classifiers and PCA Dimensionality Reduction for N-BaIoT dataset",
      venue: "IEEE GLOBECOM",
      location: "Cape Town, South Africa",
      year: 2024,
      details: { status: "Submitted" }
    },
    {
      authors: "Khalil Ibrahimi; Mohammed Jouhari; Zineb Jakout",
      title: "Enhancing Intrusion Detection Systems Using Machine Learning Classifiers on the CSE-CIC-IDS2018 Dataset",
      venue: "WINCOM 2024",
      year: 2024,
      details: {
        pages: "1–6",
        doi: "https://doi.org/10.1109/WINCOM62286.2024.10655131"
      }
    },
    {
      authors: "Mohammed Jouhari; Hafsa Benaddi; Khalil Ibrahimi",
      title: "Efficient Intrusion Detection: Combining X2 Feature Selection with CNN-BiLSTM on the UNSW-NB15 Dataset",
      venue: "WINCOM 2024",
      year: 2024,
      details: {
        pages: "1–6",
        doi: "https://doi.org/10.1109/WINCOM62286.2024.10658099"
      }
    },
    {
      authors: "Mohammed Jouhari; M. Guizani",
      title: "Lightweight CNN-BiLSTM based Intrusion Detection Systems for Resource-Constrained IoT Devices",
      venue: "IEEE IWCMC",
      location: "Ayia Napa, Cyprus",
      year: 2024,
      details: {
        doi: "https://doi.org/10.1109/IWCMC61514.2024.10592352",
        url: "https://ieeexplore.ieee.org/document/10592352"
      }
    },
    {
      authors: "H. Benaddi; Mohammed Jouhari; K. Ibrahimi; A. Benslimane; El Mehdi Amhoud",
      title: "Improvement of Anomaly Detection System in the IoT Networks using CNN-LSTM Approach",
      venue: "IEEE GLOBECOM",
      location: "Kuala Lumpur, Malaysia",
      year: 2023,
      details: {
        doi: "https://doi.org/10.1109/GLOBECOM54140.2023.10437475",
        url: "https://ieeexplore.ieee.org/document/10437475"
      }
    },
    {
      authors: "El Mehdi Amhoud; Mohammed Jouhari; T. Maksymyuk; K. Zerhouni; K. Ibrahimi",
      title: "Conditional Generative Adversarial Networks for Rx-to-Tx Translation in Wireless Communication Systems",
      venue: "IEEE GLOBECOM",
      location: "Kuala Lumpur, Malaysia",
      year: 2023,
      details: {
        doi: "https://doi.org/10.1109/GLOBECOM54140.2023.10437739",
        url: "https://ieeexplore.ieee.org/document/10437739"
      }
    },
    {
      authors: "Y. Etiabi; Mohammed Jouhari; A. Burg; El Mehdi Amhoud",
      title: "Spreading Factor assisted LoRa Localization with Deep Reinforcement Learning",
      venue: "IEEE 97th VTC (Spring)",
      location: "Florence, Italy",
      year: 2023,
      details: {
        doi: "https://doi.org/10.1109/VTC2023-Spring57618.2023.10200189",
        url: "https://ieeexplore.ieee.org/document/10200189"
      }
    },
    {
      authors: "Mohammed Jouhari; K. Ibrahimi; J. Ben Othman; El Mehdi Amhoud",
      title: "Deep Reinforcement Learning-based Energy Efficiency Optimization For Flying LoRa Gateways",
      venue: "IEEE ICC",
      location: "Rome, Italy",
      year: 2023,
      details: {
        doi: "https://doi.org/10.1109/ICC45041.2023.10279198",
        url: "https://ieeexplore.ieee.org/document/10279198"
      }
    },
    {
      authors: "H. Benaddi; Mohammed Jouhari; El Mehdi Amhoud; K. Ibrahimi; A. Benslimane",
      title: "Adversarial Attacks Against IoT Networks using Conditional GAN based Learning",
      venue: "IEEE GLOBECOM",
      location: "Rio de Janeiro, Brazil",
      year: 2022,
      details: {
        doi: "https://doi.org/10.1109/GLOBECOM48099.2022.10000726",
        url: "https://ieeexplore.ieee.org/abstract/document/10000726"
      }
    },
    {
      authors: "B. Jebari; Mohammed Jouhari; K. Ibrahimi",
      title: "Analysis of Blockchain Selfish Mining: a Stochastic Game Approach",
      venue: "IEEE ICC",
      location: "Seoul, South Korea",
      year: 2022,
      details: {
        doi: "https://doi.org/10.1109/ICC45855.2022.9839233",
        url: "https://ieeexplore.ieee.org/abstract/document/9839233"
      }
    },
    {
      authors: "H. Zradgui; Mohammed Jouhari; K. Ibrahimi",
      title: "Decentralized Autonomous Underwater Vehicles Distribution for IPv6-UWSN: A Study With Heuristic Methods",
      venue: "CommNet 2021",
      location: "Kenitra, Morocco",
      year: 2021,
      details: {
        doi: "https://doi.org/10.1109/CommNet52204.2021.9641903",
        url: "https://ieeexplore.ieee.org/abstract/document/9641903"
      }
    },
    {
      authors: "M. Ammar; K. Ibrahimi; Mohammed Jouhari; J. Ben-Othman",
      title: "MAC Protocol-Based Depth Adjustment And Splitting Mechanism For UnderWater Sensor Network (UWSN)",
      venue: "IEEE GLOBECOM",
      location: "Abu Dhabi, UAE",
      year: 2018,
      details: {
        doi: "https://doi.org/10.1109/GLOCOM.2018.8647644",
        url: "https://ieeexplore.ieee.org/abstract/document/8647644"
      }
    },
    {
      authors: "I. Rouam; K. Ibrahimi; Mohammed Jouhari",
      title: "Best Association of Macro User in Two-Tier Cellular Networks",
      venue: "WINCOM",
      location: "Rabat, Morocco",
      year: 2017,
      details: {
        doi: "https://doi.org/10.1109/WINCOM.2017.8238157",
        url: "https://ieeexplore.ieee.org/abstract/document/8238157"
      }
    },
    {
      authors: "Mohammed Jouhari; K. Ibrahimi; M. Benattou; A. Kobbane",
      title: "New Greedy Forwarding Strategy for UWSNs Geographic Routing Protocols",
      venue: "IWCMC",
      location: "Paphos, Cyprus",
      year: 2016,
      details: {
        doi: "https://doi.org/10.1109/IWCMC.2016.7577089",
        url: "https://ieeexplore.ieee.org/abstract/document/7577089"
      }
    },
    {
      authors: "Mohammed Jouhari; K. Ibrahimi; M. Benattou",
      title: "Topology Control Through Depth Adjustment and Transmission Power Control For UWSN Routing Protocols",
      venue: "WINCOM",
      location: "Marrakech, Morocco",
      year: 2015,
      details: {
        doi: "https://doi.org/10.1109/WINCOM.2015.7381310",
        url: "https://ieeexplore.ieee.org/abstract/document/7381310"
      }
    }
  ],

  bookChapters: [
    {
      authors: "Mohammed Jouhari; K. Ibrahimi; M. Benattou",
      title: "Implementation of Bit Error Rate Model of 16-QAM in Aqua-Sim Simulator for Underwater Sensor Networks",
      bookTitle: "Advances in Ubiquitous Networking 2",
      series: "Lecture Notes in Electrical Engineering",
      volume: 397,
      editors: "Rachid El-Azouzi; Daniel Sadoc Menasche; Essaïd Sabir; Francesco De Pellegrini; Mustapha Benjillali",
      pages: "123–134",
      publisher: "Springer, Singapore",
      year: 2016,
      details: {
        doi: "https://doi.org/10.1007/978-981-10-1627-1_10",
        isbn: "978-981-10-1626-4",
        url: "https://link.springer.com/chapter/10.1007/978-981-10-1627-1_10"
      }
    }
  ]
},

services: {
  overview: "Extensive involvement in scientific evaluation, including editorial board membership, peer review for leading journals, technical program committee (TPC) service, and chairing conference sessions.",

  editorialBoard: [
    {
      role: "Editorial Board Member",
      publication: "Humanities and Social Sciences Communications (Springer Nature)",
      since: "2025",
      description: "Developed expertise in editorial decision making, peer review coordination, and quality assurance of manuscripts."
    }
  ],

  peerReview: {
    total: "More than 55 reviews",
    focus: "Particularly in IoT, wireless networks, and cybersecurity.",
    coreJournals: [
      { journal: "IEEE Internet of Things Journal", reviews: 11 },
      { journal: "IEEE Access", reviews: 16 },
      { journal: "IEEE Wireless Communications", reviews: 3 },
      { journal: "IEEE Wireless Communications Letters", reviews: 3 },
      { journal: "IEEE Internet of Things Magazine", reviews: 2 }
    ],
    otherJournals: [
      "IEEE Transactions on Communications",
      "IEEE Consumer Electronics",
      "IEEE Industrial Informatics",
      "IEEE Information Forensics and Security",
      "IEEE Mobile Computing",
      "IEEE Neural Networks and Learning Systems",
      "IEEE Network and Service Management",
      "IEEE Services Computing",
      "IEEE Intelligent Transportation Systems",
      "Computers & Security (3 reviews)",
      "International Journal of Communication Systems (4 reviews)",
      "Others"
    ]
  },

  tpc: [
    { event: "IEEE Globecom", period: "2024–2025" },
    { event: "IEEE ICC", period: "Ongoing" },
    { event: "IEEE IWCMC", period: "2023–2025" },
    { event: "IEEE WINCOM", period: "2023–2025" },
    { event: "CommNet", period: "2021–2024" }
  ],

  trackChair: [
    {
      event: "Online Workshop on AI-Driven Network Security and Anomaly Detection",
      conference: "EngiTek 2025",
      location: "Irbid, Jordan",
      date: "29–31 December 2025",
      website: "https://mohammed-jouhari.github.io/nsad2025/"
    }
  ],

  sessionChair: [
    {
      event: "International Wireless Communications and Mobile Computing Conference (IWCMC)",
      session: "Online Session 20",
      date: "May 30, 2024"
    },
    {
      event: "11th International Conference on Wireless Networks and Mobile Communications (WINCOM)",
      session: "TS8",
      date: "July 25, 2024"
    }
  ]
},

teaching: [
    {
      course: "Virtualization and Cloud Computing",
      hours: 32,
      program: "Master’s in Networks and Mobile Services",
      institution: "Faculty of Sciences, Ibn Tofail University, Kenitra",
      academicYear: "2024/2025"
    },
    {
      course: "Digital Culture",
      hours: 24,
      program: "Bachelor’s in Fundamental Studies",
      institution: "Faculty of Law and Political Science, Ibn Tofail University, Kenitra",
      academicYear: "2024/2025"
    },
    {
      course: "Unix Operating Systems",
      hours: 32,
      program: "3rd year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Application Security",
      hours: 32,
      program: "4th year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Virtualization",
      hours: 24,
      program: "4th year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Information Systems Design",
      hours: 24,
      program: "3rd year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Case Study: UML",
      hours: 32,
      program: "4th year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Information Systems Governance",
      hours: 32,
      program: "5th year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Cross-Platform Development",
      hours: 32,
      program: "5th year Computer Engineering and Networks",
      institution: "EMSI Tangier",
      academicYear: "2023/2024"
    },
    {
      course: "Data Security",
      hours: "18h in 2021/2022; 32h in 2019/2020; 32h in 2017/2018",
      program: "Master’s in Software Engineering for Cloud Computing",
      institution: "Ibn Tofail University, Kenitra"
    },
    {
      course: "VoIP",
      hours: 28,
      program: "Bachelor’s in Networks and Telecommunications",
      institution: "Ibn Tofail University, Kenitra",
      academicYear: "2021/2022"
    },
    {
      course: "IPv6",
      hours: 28,
      program: "Bachelor’s in Networks and Telecommunications",
      institution: "Ibn Tofail University, Kenitra",
      academicYear: "2017/2018"
    }
  ],

  bibliometrics: {
    googleScholar: { citations: 1156, hIndex: 14, i10Index: 18 },
    scopus: { citations: 796, hIndex: 10 },
    profiles: {
      googleScholar: "https://scholar.google.com/citations?user=xyz",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=00000000000"
    }
  }
};
