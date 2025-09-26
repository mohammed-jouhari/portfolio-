const cvData = {
  personal: {
    fullName: "Mohammed Jouhari",
    title: "Assistant Professor & Researcher",
    summary:
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
      degree: "PhD in Computer Science",
      field: "Mathematics, Computer Science and Applications",
      institution: "University of Example",
      location: "City, Country",
      start: "2014",
      end: "2019",
      thesisTitle: "Advances in Underwater Wireless Sensor Networks: improvements in MAC layer, topology control and routing",
      supervisor: "Prof. Supervisor Name",
      distinction: "Highest honors"
    },
    {
      degree: "Master’s Degree",
      field: "Computer Science, Signals and Telecommunications",
      institution: "University of Example",
      location: "City, Country",
      start: "2011",
      end: "2013",
      distinction: "Fairly Good"
    }
    /* Additional education entries... */
  ],
  publications: {
    journals: [
      {
        authors: "First Author, Candidate Name, Co‑Author",
        title: "A lightweight hybrid approach for intrusion detection systems using a chi‑square feature selection approach in IoT",
        venue: "Internet of Things",
        year: 2025,
        details: {
          volume: 32,
          pages: "101624",
          impactFactor: 7.6,
          doi: "https://doi.org/10.1016/j.iot.2025.101624"
        }
      }
      /* Additional journal articles... */
    ],
    conferences: [
      {
        authors: "Candidate Name, Co‑Author",
        title: "Efficient intrusion detection: Combining χ2 feature selection with CNN‑BiLSTM on the UNSW‑NB15 dataset",
        venue: "International Conference on Wireless Networks and Mobile Communications (WINCOM)",
        location: "City, Country",
        year: 2024,
        details: {
          pages: "1–6",
          doi: "10.1109/WINCOM62286.2024.10658099"
        }
      }
      /* Additional conference papers... */
    ]
  },
  services: {
    editorialBoard: [
      {
        role: "Editorial Board Member",
        publication: "Humanities and Social Sciences Communications",
        since: "2025",
        description: "Responsible for editorial decision‑making, peer review coordination and quality assurance of manuscripts"
      }
      /* Additional board roles... */
    ],
    peerReview: [
      { journal: "IEEE Internet of Things Journal", reviews: 11 },
      { journal: "IEEE Access", reviews: 16 }
      /* Additional peer review entries... */
    ],
    tpc: [
      { event: "IEEE Globecom", period: "2024–2025" }
      /* Additional TPC roles... */
    ],
    trackChair: [
      {
        event: "AI‑Driven Network Security and Anomaly Detection Workshop",
        conference: "EngiTek",
        year: 2025,
        description: "Co‑organized workshop, chaired sessions and managed program"
      }
    ],
    sessionChair: [
      {
        event: "International Wireless Communications and Mobile Computing Conference (IWCMC)",
        session: "Online Session 20",
        date: "May 30, 2024"
      }
      /* Additional session chair entries... */
    ]
  },
  teaching: [
    {
      course: "Virtualization and Cloud Computing",
      hours: 32,
      program: "Master’s in Networks and Mobile Services",
      institution: "University",
      academicYear: "2024/2025"
    },
    {
      course: "Unix Operating Systems",
      hours: 32,
      program: "3rd year Computer Engineering and Networks",
      institution: "Engineering School",
      academicYear: "2023/2024"
    }
    /* Additional courses... */
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
