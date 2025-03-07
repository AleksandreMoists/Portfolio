import JsSvg from "../assets/svgs/AboutPageSvgs/JsSvg"
import ReactSvg from "../assets/svgs/AboutPageSvgs/ReactjsSvg"
import NodeSvg from "../assets/svgs/AboutPageSvgs/NodejsSvg"
import CssSvg from "../assets/svgs/AboutPageSvgs/CssSvg"
import Timly from "../assets/images/Timly.png"
import GithubSvg from "../assets/svgs/ProjectPageSvgs/GithubSvg"
import LiveWebSvg from "../assets/svgs/ProjectPageSvgs/LiveWebSvg"
import FullStackSoftDev from "../assets/images/FullStackSoftDev.png"
import FullStackJs from "../assets/images/FullStackJs.png"
import FrontReact from "../assets/images/FrontReact.png"
import BackendNodeExpress from "../assets/images/BackendNodeExpress.png"
import NodejsMongoDB from "../assets/images/NodejsMongoDB.png"
import PythonDataScience from "../assets/images/PythonDataScience.png"
import AIPython from "../assets/images/AIPython.png"
import VersContr from "../assets/images/VersContr.png"
import Photo from "../assets/images/Photo.png"

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
    description: "First project I contributed to"
  },
];

export const projectLinks = [
  {label: "Github", icon: <GithubSvg />, url: "https://github.com/"},
  {label: "LiveWeb", icon: <LiveWebSvg />, url: "https://github.com/"}
];

export const certificatesData = [
  {id: 1, title: "Full Stack Software Developer", image: FullStackSoftDev},
  {id: 2, title: "Full Stack JavaScript Developer", image: FullStackJs},
  {id: 3, title: "Frontend React Developer", image: FrontReact},
  {id: 4, title: "Backend Node.js & Express Developer", image: BackendNodeExpress},
  {id: 5, title: "Node.js & MongoDB Developer", image: NodejsMongoDB},
  {id: 6, title: "Python for Data Science", image: PythonDataScience},
  {id: 7, title: "AI with Python", image: AIPython},
  {id: 8, title: "Version Control with Git", image: VersContr},
];

export const imagePaths = [
  Photo
];