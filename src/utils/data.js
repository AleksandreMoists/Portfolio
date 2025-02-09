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
          description: "First project i contributed to"
        },
];


export const projectLinks = [
    {label:"Github", icon: <GithubSvg />, url:"https://github.com/", },
    {label:"LiveWeb", icon: <LiveWebSvg />, url:"https://github.com/" },
  ];