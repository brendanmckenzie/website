export type Position = {
  company: string;
  position: string;
  summary: string;
  dates: [string, string];
  location: string;
  technologies: string[];
};

export const positions: Position[] = [
  {
    company: "Pokko",
    position: "Founder",
    dates: ["July 2020", "Present"],
    location: "Melbourne, Australia",
    summary:
      "Contrived, planned, developed and deployed a new Australia-first SaaS platform for managing content and media.  Compiled a team of passionate people from various backgrounds and disciplines to deliver the final product while planning and executing customer engagement strategies.",
    technologies: ["PostgreSQL", "Kubernetes", "Typescript", "React", "Redis"],
  },
  {
    company: "VERSA",
    position: "Head of Engineering",
    dates: ["May 2013", "September 2021"],
    location: "Melbourne, Australia",
    summary:
      "Involved in all aspects of the digital agency business from pitching, strategy, design, development, management, resourcing, training, deployment, support and maintenance. Standardised and optimised internal development practises across a number of platforms. Successfully delivered a number of projects without exceeding budgets and/or timelines. Supported clients in their technology choices from software platforms to hosting environments. Architected and implemented cloud-based solutions for hosting client deliverables.",
    technologies: [
      "Sitecore",
      "Umbraco",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      ".NET Core",
      "PostgreSQL",
      "Entity Framework",
      "Xamarin",
      "React Native",
      "TeamCity",
      "Octopus Deploy",
      "Bitbucket Pipelines",
    ],
  },
  {
    company: "Take Off Go",
    position: "Director",
    dates: ["May 2012", "Present"],
    location: "Melbourne, Australia",
    summary:
      "Manage business finances and day to day operations for a small boutique travel agency.  Built and maintained backend systems for distributing travel itineraries to clients, including managing methods of taking payment for upcoming travel plans.",
    technologies: ["PostgreSQL", "Typescript", "React"],
  },
  {
    company: "The Marketing Store",
    position: "Freelance Developer",
    dates: ["July 2013", "November 2013"],
    location: "Toronto, Canada",
    summary:
      "Fixed-term contract working on maintaining existing extensively integrated .NET systems, developing enhancements, debugging intricate issues and producing web applications running on the Microsoft stack.",
    technologies: ["C#", "ASP.NET MVC", "Microsoft SQL", "PHP", "Linux", "AWS"],
  },
  {
    company: "A.K.A. New Media",
    position: "Application Developer",
    dates: ["April 2012", "July 2013"],
    location: "Toronto, Canada",
    summary:
      "A senior developer hired to research and implement advancements to the main product - A.K.A. raisin. Working with Visual Studio 2012, ASP.NET MVC 4, Entity Framework 5 and jQuery Mobile to develop a mobile-friendly interface to the legacy current system.",
    technologies: ["C#", "ASP.NET MVC", "Microsoft SQL"],
  },
  {
    company: "Libertine London",
    position: "Freelance Developer",
    dates: ["October 2011", "December 2013"],
    location: "London, United Kingdom",
    summary:
      "Contracted to maintain CMS based websites for a number of clients. Successfully optimised solutions to utilise fewer resources reducing their cloud hosting expenditure; primarily utilising a Microsoft development stack.",
    technologies: [
      ".NET",
      "Microsoft SQL Server",
      "ASP.NET MVC",
      "PHP",
      "jQuery",
      "YouTube",
      "Facebook integrations",
    ],
  },
  {
    company: "SapientNitro",
    position: "Freelance Developer",
    dates: ["January 2011", "October 2011"],
    location: "London, United Kingdom",
    summary:
      "Initially brought on for a two-week contract to develop web applications for clients. Was offered an extension, and completed eight months later after creating websites for numerous clients and developing strong relationships with many great people from around the world across the entire design and development field.",
    technologies: [
      ".NET",
      "ASP.NET WebForms and MVC",
      "Umbraco",
      "Entity Framework",
      "WCF and SOAP",
      "Javascript",
      "CSS3",
      "HTML5",
    ],
  },
];
