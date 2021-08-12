export default {
  about: {
    title: "M150 Apps by Mišo Barišić",
    image:
        "/miso.webp",
    name: "Mišo Barišić",
    sub: "19 | Croatia | English, German, Croatian",
    description:
        "Hello, my name is Mišo /MEE-SHO/ but you can call me Mike for the sake of simplicity. I started programming in 2019 and since then I've familiarised myself with native Android app development, machine learning with Tensorflow and Keras, creating RESTful APIs, using MongoDB, making websites with ReactJS and NextJS.",
    socialLinks: [
      {
        name: "Blog",
        to: "/blog",
      },
      {
        name: "Email",
        to: "mailto:miso@misobarisic.com",
      },
      {
        name: "GitHub",
        to: "/go/github",
      },
      {
        name: "GitLab",
        to: "/go/gitlab",
      },
      {
        name: "Instagram",
        to: "/go/instagram",
      },
    ],
  },
  skills: [
    {
      name: "JavaScript",
      percent: 95,
      color: "#e91e63",
    },
    {
      name: "Java",
      percent: 90,
      color: "#2196f3",
    },
    {
      name: "Python",
      percent: 80,
      color: "#4caf50",
    },
    {
      name: "Kotlin",
      percent: 60,
      color: "#f59827",
    },
  ],
  projects: [
    // status list: NEW - 1, Coming Soon - 2, Active - 3, Maintenance - 4, It's Over - 5, Closed - 6
    {
      name: "Barisko",
      description: "A multipurpose Discord bot",
      status: 2,
      to: "/barisko",
    },
    {
      name: "CommieSort",
      description: "A simple yet effective sorting algorithm. Predecessor to StalinSort",
      status: 3,
      to: "/commiesort",
    },
    {
      name: "Calculator++",
      description: "All-In-One Android Calculator",
      status: 3,
      to: "/calculator",
    },
    {
      name: "SafePaste",
      description: "Persistent snippet sharing service",
      status: 3,
      to: "/safepaste",
    },
    {
      name: "SafeLink",
      description: "Persistent link sharing service",
      status: 3,
      to: "/safelink",
    },
    {
      name: "RedGIFs Downloader",
      description: "No further explanation needed",
      status: 3,
      to: "/redgifs-downloader",
    },
  ],
};
