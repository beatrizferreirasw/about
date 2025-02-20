let info = {
  name: "Beatriz Ferreira",
  logo_name: "bea",
  flat_picture: require("./src/assets/avatar.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I’m a Full-Stack Developer who loves building software that is not only functional but also well-structured and efficient. Collaboration comes naturally, whether it’s with designers, project managers, and other developers, share knowledge openly, learning from different perspectives, and keeping up with the latest tech trends. <br><br>I am a detail oriented person that enjoy solving complex problems. My skill set ranges from architecture design and code development to writing optimized sql scripts. The experiences I've gained in fast-paced environments and university have shaped me, and I am looking forward to implementing and polishing them in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/beatrizferreira-software-engineer/",
    github: "https://github.com/beatrizferreirasw",
    resume:
      "https://github.com/beatrizferreirasw/portfolio/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "FEUP",
      place: "Faculty of Engineering of Porto",
      date: "Sep, 2019 - Jun, 2021",
      degree: "Master’s in Software Engineering",
      gpa: "18/20",
      description:
        "Specialized in Agile Software and Requirements Engineering, supported by a prestigious scholarship from SONAE and collaborating on a dissertation project mutually beneficial. Also participated in a multidisciplinary project to develop a real-world product for a client.",
      skills: [
        "Machine Learning",
        "Microservices",
        "Java",
        "Flutter",
        "React",
        "Android Studio",
        "Software Testing",
        "Security"
      ]
    },
    {
      name: "Óbuda University",
      place: "Budapest",
      date: "Sep, 2019 - Jun, 2021",
      degree: "Erasmus+",
      description:
          "Participated in the Erasmus Program, gaining valuable insights from a new environment while focusing on AI and integrated Amazon Web Services to enhance functionality, including features like text-to-speech and image recognition.",
      skills: [
        "Amazon Web Services",
        "Cloud computing",
        "Object-Oriented Programming",
        "Project Management",
      ]
    },
    {
      name: "ISEP",
      place: "Institute of Engineering of Porto",
      date: "Sep, 2016 - Jun, 2019",
      degree: "Bachelor’s in Computer Science",
      description:
        "Learned the fundamentals of Computational Mathematics, explored the entire software development process, and deep dive into database management. Enhanced skills through hands-on projects, laboratories and final internship.",
      skills: [
        "Linear Algebra",
        "Algorithms",
        "Computer Architecture",
        "UML",
        "Databases",
        "Computer Networks"
      ]
    }
  ],
  experience: [
    {
      name: "Kuehne+Nagel",
      place: "Porto",
      date: "Oct, 2021 - Present",
      position: "Software architect; Full Stack Developer",
      description:
        "Migrating a global Logistics transport management system to the web, shifting towards a more cross-functional working approach with DevOps. Actively involved in company initiatives and responsible for onboarding new teams and individuals, focusing on software architecture and web UI development.",
      skills: ["Java", "Angular", "Oracle", " CI/CD", "Docker", "REST", "Agile", "Jenkins"]
    },
    {
      name: "BIT SONAE",
      place: "Porto",
      date: "Set, 2020 - Jun, 2021",
      position: "Full Stack Web Developer",
      description:
        "Implementation of a framework to support data migration between different OutSystems environments. ETL software with automated process, can be run manually or on reoccurring schedules. Data mask, notifications, automatic entity dependencies detection and many more in-built functionalities. ",
      skills: ["C#", "OutSystems", "JavaScript", "ETL", ".NET", "REST", "SQL Server"]
    },
    {
      name: "Natixis",
      place: "Porto",
      date: "Feb, 2019 - Jun, 2019",
      position: "Full Stack Web Developer",
      description:
        "Replacement of a legacy technology to build data grids and development of a new .NET Web API. The project API retrieve and provide data for the new UI grid.",
      skills: ["Angular", "Typescript", "SQL Server", ".NET", "Agile", "TFS", "DDD", "SOLID"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Java",
        "C#",
        "Javascript",
        "TypeScript",
        "SQL",
        "R"
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Keras",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "LibROSA",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Flutter", "Angular", "React", "Node", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["OracleSQL", "SQLServer", "PostgreSQL", "MySQL" ],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "Intelligent, autonomous and full of positive energy. Always willing to learn new things and contribute with good opinions. A great person to be part of a productive team.",
      author: "Igor Matos",
      position: "Group Lead",
      company: "Natixis",
      location: "Porto"
    },
    {
      title:
        "Beatriz is a person that will bring a lot of energy and intelligence to the team. I'm very glad to had the chance to have Beatriz in one of my teams. For the future, no doubts she will succeed as a software engineer.",
      author: "Gonçalo Bastos Sá",
      position: "Head of Information Technology & Management",
      company: "Kuehne+Nagel",
      location: "Porto"
    }
  ]
};

export default info;
