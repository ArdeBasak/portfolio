// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#191970, #420D09, #8E4585, #000000, #ecf0f1",
  firstName: "Arpan",
  middleName: "",
  lastName: "Basak",
  message:
    " | Engineer | Programmer | Polyglot | Athlete | Video Gamer | Artist | Foodie | Story Writer | ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arpan-basak-1647391b2/",
    },
    {
      image: "fa-github",
      url: "https://github.com/ArdeBasak",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/arpanportfolio.jpeg"),
  imageSize: 375,
  message: [
    "Hey there! 👋 I'm Arpan Basak, your friendly neighborhood code wrangler, sketch artist, sports enthusiast and unapologetic food fanatic. Think of me as a hybrid creature - part engineer, part athlete and full-time aficionado of all things creative.",
    "In the digital realm, I'm your go-to person for all things backend. I've indulged myself with the nuances of Java and Golang, crafting solutions to complex problems while occasionally sprinkling in some frontend magic with React (because who doesn't love a little flair?).",
    "When I'm not busy crafting lines of code, you can find me exploring video games, sketching out fantastical landscapes, weaving new tales or embarking on culinary adventures in search of the perfect dish. Whether it's optimizing algorithms or perfecting my pasta recipe, I'm always up for a challenge and eager to dive into the next big adventure.",
    "So, if you're in need of a tech-savvy guy with a penchant for creativity and a knack for problem-solving, look no further! Let's connect and create some magic together.",
  ],
  resume: require("../assets/pdf/ArpanBasak_Resume.pdf"),
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Personal Projects",
  gitHubUsername: "ArdeBasak",
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 95 },
    { name: "Spring", value: 90 },
    { name: "Spring Boot", value: 90 },
    { name: "JUnit", value: 85 },
    { name: "Golang", value: 80 },
    { name: "React.js", value: 70 },
    { name: "HTML/CSS", value: 70 },
    { name: "PostgreSQL", value: 85 },
    { name: "MySQL", value: 85 },
    { name: "MongoDB", value: 70 },
    { name: "Kafka", value: 85 },
    { name: "AWS - S3/DynamoDB", value: 75 },
    { name: "Kubernetes", value: 80 },
    { name: "Docker", value: 80 },
    { name: "ELK Stack", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  email: "arpan.basak1408@gmail.com",
  phone: "+91 7044904599",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Senior Software Engineer",
      companylogo: require("../assets/img/sixt_logo.png"),
      date: "Aug 2022 – Present",
      details: [
        "Conducted high level API spec design and development for multiple epics from scratch, enhancing the functionalities in the Damage team.",
        "Developed seamless frontend interfaces for multiple tasks handling by Damage agents, leading to quicker claims processing by 70%.",
        "Integrated with image capture via Proovstation gates, from scratch and automated damage workflow management, improving successful claims by 45%.",
        "Migrated our Backend services to latest Java 18, Spring 6 and Spring Boot 3.",
        "Modularized and refactored our existing codebases using best design practices.",
        "Increased test coverage from 40% to 90% across services.",
      ],
    },
    {
      role: "Lead Software Engineer",
      companylogo: require("../assets/img/harman_logo.png"),
      date: "May 2021 – Aug 2022",
      details: [
        "Designed and implemented user flows for Notification Center - Ignite including integration with Gigya for third party platforms.",
        "Worked on Mongo sync driver integration for Mongo client creation as part of MongoDB upgrade from 3.7 to 4.4.",
        "Migrated our Data Platform components to Java 11 from existing Java 8.",
      ],
    },
    {
      role: "IT Analyst",
      companylogo: require("../assets/img/tcs_logo.jpg"),
      date: "July 2015 – May 2021",
      details: [
        "Migrated existing four web services (Card Verification Service, Card Eligibility Service, Keep Alive Service and Out-of-band Authentication Service) from IBM WebSphere to Cloud Enterprise PaaS (RedHat OpenShift).",
        "Refactored existing monolithic service (Card Verification Service) to new components with Microservices Architecture using REST APIs.",
      ],
    },
  ],
};

// Achievements SECTION
const achievements = {
  show: true,
  heading: "Achievements",
  data: [
    {
      text: "MVP Q3 2023 @ Sixt",
      icon: require("../assets/img/achievementsIcon/mvp.png"),
    },
    {
      text: "Technical Excellence Award 2020 @ TCS",
      icon: require("../assets/img/achievementsIcon/techExcellence.png"),
    },
    {
      text: "On the Spot Award 2016, 2017, 2018, 2019",
      icon: require("../assets/img/achievementsIcon/onthespot.png"),
    },
    {
      text: "School Topper in Class XII (ISC)",
      icon: require("../assets/img/achievementsIcon/rank1.png"),
    },
    {
      text: "3rd rank in Class X (ICSE)",
      icon: require("../assets/img/achievementsIcon/rank3.jpeg"),
    },
    {
      text: "Intraschool Quiz Winner 2009, 2010",
      icon: require("../assets/img/achievementsIcon/winner.jpeg"),
    },
    {
      text: "19th rank in British Council Spelling Competition, 2009",
      icon: require("../assets/img/achievementsIcon/spelling.png"),
    },
  ],
};

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      institutionType: "College",
      title: "B.Tech (Computer Science)",
      performance: "8.17",
      institutionName: "Techno India, Salt Lake",
      year: "2015",
    },
    {
      institutionType: "School",
      title: "Class XII (ISC)",
      performance: "95",
      institutionName: "Calcutta Public School",
      year: "2011",
    },
    {
      institutionType: "School",
      title: "Class X (ICSE)",
      performance: "94",
      institutionName: "Calcutta Public School",
      year: "2009",
    },
  ],
  phone: "+91 7044904599",
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences,
  achievements,
  education,
};
