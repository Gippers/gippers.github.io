// Site content, moved over from the old Quarto site (Gippers/personalWebsite).

export const email = "thomas.martin.stats@gmail.com"

export const projects = [
  {
    title: "ACT Road Crash Forecasting",
    description: "A temporal analysis of road crashes in the ACT.",
    date: new Date("2025-12-19"),
    tags: ["R", "Forecasting", "Technical Report", "ACT"],
    image: "/projects/crashForecast.png",
    url: "https://gippers.github.io/actRoadCrashes/",
  },
  {
    title: "ACT School Walking Analysis",
    description: "An analysis of school walking distance in the ACT.",
    date: new Date("2025-08-31"),
    tags: ["R", "Network Analytics", "ACT"],
    image: "/projects/schoolWalking.png",
    url: "https://gippers.github.io/actSchoolWalking/",
  },
  {
    title: "Solomon Islands Data Map",
    description:
      "A fully interactive dashboard integrating census, election and population projection data.",
    date: new Date("2024-02-01"),
    tags: ["Python", "BI", "Geospatial"],
    image: "/projects/solMap.png",
    url: "https://solomonislandsdatamap.onrender.com/",
    featured: true,
  },
].sort((a, b) => b.date.valueOf() - a.date.valueOf())

export const education = [
  {
    degree: "Master of Statistics",
    school: "Australian National University",
    dates: "Mar 2023 – Present",
    ongoing: true,
  },
  {
    degree: "Graduate Certificate of Finance and Actuarial Statistics",
    school: "Australian National University",
    dates: "Mar 2023 – Dec 2024",
  },
  {
    degree: "Bachelor of Science",
    school: "Australian National University / University of New South Wales",
    dates: "Mar 2015 – Nov 2018",
    detail: "Major in Computer Science, Minor in Mathematics",
  },
]
