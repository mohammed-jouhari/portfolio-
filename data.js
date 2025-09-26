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
        authors: "First Author, Candidate Name, Co-Author",
        title: "A lightweight hybrid approach for intrusion detection systems using a chi-square feature selection approach in IoT",
        venue: "Internet of Things",
        year: 2025,
        details: {
          volume: 32,
          pages: "101624",
          impactFactor: 7.6,
          doi: "https://doi.org/10.1016/j.iot.2025.101624"
        }
      }
      // Additional journal articles…
    ],
    conferences: [
      {
        authors: "Candidate Name, Co-Author",
        title: "Efficient intrusion detection: Combining χ2 feature selection with CNN-BiLSTM on the UNSW-NB15 dataset",
        venue: "International Conference on Wireless Networks and Mobile Communications (WINCOM)",
        location: "City, Country",
        year: 2024,
        details: {
          pages: "1–6",
          doi: "10.1109/WINCOM62286.2024.10658099"
        }
      }
      // Additional conference papers…
    ]
  },

  services: {
    overview:
      "Extensive involvement in scientific evaluation, including editorial board membership, peer review for leading journals, technical program committee (TPC) service, and chairing conference sessions.",

    editorialBoard: [
      {
        role: "Editorial Board Member",
        publication: "Humanities and Social Sciences Communications (Springer Nature)",
        since: "2025",
        description:
          "Developed expertise in editorial decision making, peer review coordination, and quality assurance of manuscripts."
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
        "and others"
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
