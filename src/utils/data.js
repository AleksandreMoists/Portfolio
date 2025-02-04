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
    {id: 1, title: "Timly – HR Recruitment Software", image: Timly, content: "Timly is a comprehensive HR recruitment software designed to streamline the hiring process. It offers features such as applicant tracking, resume parsing, and interview scheduling to help HR professionals manage their recruitment efforts efficiently."},
    {id: 2, title: "Timly – HR Recruitment Software 2", image: Timly, content: "An advanced version of Timly, this software includes additional features like AI-driven candidate matching, detailed analytics, and customizable workflows to further enhance the recruitment process."},
    {id: 3, title: "Project Management Tool", image: Timly, content: "This project management tool helps teams plan, track, and manage their projects effectively. It includes features like task management, time tracking, collaboration tools, and reporting to ensure projects are completed on time and within budget."},
    {id: 4, title: "E-commerce Platform", image: Timly, content: "A robust e-commerce platform that allows businesses to set up and manage their online stores. It offers features like product management, order processing, payment integration, and customer management to provide a seamless shopping experience."},
    {id: 5, title: "Social Media App", image: Timly, content: "A social media application designed to connect people and foster communication. It includes features like user profiles, messaging, news feeds, and content sharing to create an engaging social experience."},
    {id: 6, title: "Online Learning Platform", image: Timly, content: "An online learning platform that provides a variety of courses and learning materials. It includes features like course management, progress tracking, quizzes, and certifications to help learners achieve their educational goals."}
];


export const projectLinks = [
    { icon: <GithubSvg />, },
    { icon: <LiveWebSvg />, },
  ];