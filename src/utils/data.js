import JsSvg from "../assets/svgs/AboutPageSvgs/JsSvg"
import ReactSvg from "../assets/svgs/AboutPageSvgs/ReactjsSvg"
import NodeSvg from "../assets/svgs/AboutPageSvgs/NodejsSvg"
import CssSvg from "../assets/svgs/AboutPageSvgs/CssSvg"
import Timly from "../assets/images/Timly.png"
import GithubSvg from "../assets/svgs/ProjectPageSvgs/GithubSvg"
import LiveWebSvg from "../assets/svgs/ProjectPageSvgs/LiveWebSvg"

export const technologiesData = [
    {id: 1, icon: <JsSvg />},
    {id: 2, icon: <ReactSvg />},
    {id: 3, icon: <NodeSvg />},
    {id: 4, icon: <CssSvg />},
];

export const projectsData = [
    {
        id: 1,
        title: "Timly – HR Recruitment Software",
        image: Timly,
        content: "Timly is a comprehensive HR recruitment software designed to streamline the hiring process. It offers features such as applicant tracking, resume parsing, and interview scheduling to help HR professionals manage their recruitment efforts efficiently.",
        links: [
            {
              label: "Github",
              icon: <GithubSvg />,
              url: "https://github.com/",
              disabled: true, // We disable GitHub for the first project
            },
            {
              label: "LiveWeb",
              icon: <LiveWebSvg />,
              url: "https://your-live-web-url.com",
              disabled: false,
            },
          ],
          description: "First project i contributed to"
        },
    {
        id: 2,
        title: "Timly – HR Recruitment Software 2",
        image: Timly,
        content: "An advanced version of Timly, this software includes additional features like AI-driven candidate matching, detailed analytics, and customizable workflows to further enhance the recruitment process.",
        links: [
            {
              label: "Github",
              icon: <GithubSvg />,
              url: "https://github.com/",
              disabled: true, // We disable GitHub for the first project
            },
            {
              label: "LiveWeb",
              icon: <LiveWebSvg />,
              url: "https://your-live-web-url.com",
              disabled: false,
            },
          ],
          description: "First project i contributed to"
        },
    {
        id: 3,
        title: "Project Management Tool",
        image: Timly,
        content: "This project management tool helps teams plan, track, and manage their projects effectively. It includes features like task management, time tracking, collaboration tools, and reporting to ensure projects are completed on time and within budget.",
        links: [
            {
              label: "Github",
              icon: <GithubSvg />,
              url: "https://github.com/",
              disabled: true, // We disable GitHub for the first project
            },
            {
              label: "LiveWeb",
              icon: <LiveWebSvg />,
              url: "https://your-live-web-url.com",
              disabled: false,
            },
          ],
          description: "First project i contributed to"
        },
    {
        id: 4,
        title: "E-commerce Platform",
        image: Timly,
        content: "A robust e-commerce platform that allows businesses to set up and manage their online stores. It offers features like product management, order processing, payment integration, and customer management to provide a seamless shopping experience.",
        links: [
            {
              label: "Github",
              icon: <GithubSvg />,
              url: "https://github.com/",
              disabled: true, // We disable GitHub for the first project
            },
            {
              label: "LiveWeb",
              icon: <LiveWebSvg />,
              url: "https://your-live-web-url.com",
              disabled: true,
            },
          ],
          description: "First project i contributed to"
    },
];


export const projectLinks = [
    {label:"Github", icon: <GithubSvg />, url:"https://github.com/", },
    {label:"LiveWeb", icon: <LiveWebSvg />, url:"https://github.com/" },
  ];