import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my projects — built to run, not just demo.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "GrabPic – Event Image Sharing Platform",
    desc: "Spring Boot + ReactJS + Azure Blob Storage. Handled 1.6K+ requests. Optimized with LRU + TTL caching. Secured image access via Azure Blob SAS URLs (10-min expiry) with signed token fallback.",
    // TODO: Replace with actual live demo / GitHub repo links
    url: "https://github.com/AshwanthReddy-exe",
  },
  {
    id: 2,
    title: "Concurrent LRU Cache with TTL",
    desc: "Core Java + Multithreading + Collections. Thread-safe in-memory cache with O(1) LRU eviction. TTL expiry via ScheduledExecutorService. Validated at 6M ops/sec throughput.",
    // TODO: Replace with actual GitHub repo link
    url: "https://github.com/AshwanthReddy-exe",
  },
  {
    id: 3,
    title: "SceneSolver – Crime Scene Analysis System",
    desc: "PyTorch + FastAPI + ReactJS. Crime scene image/video analysis pipeline (89% accuracy using CLIP). Backend model inference + structured data processing with interactive ReactJS frontend.",
    // TODO: Replace with actual GitHub repo link
    url: "https://github.com/AshwanthReddy-exe",
  },
];

export default Projects;
