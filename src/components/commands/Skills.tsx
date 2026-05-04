import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const Skills: React.FC = () => {
  return (
    <AboutWrapper data-testid="skills">
      <p>
        <HighlightSpan>Languages:</HighlightSpan>{" "}
        Java (Primary), Python
      </p>
      <p>
        <HighlightSpan>Core Java:</HighlightSpan>{" "}
        OOPs, Collections, Multithreading
      </p>
      <p>
        <HighlightSpan>Backend:</HighlightSpan>{" "}
        Spring Boot, REST APIs, JPA/Hibernate
      </p>
      <p>
        <HighlightSpan>Frontend:</HighlightSpan>{" "}
        ReactJS
      </p>
      <p>
        <HighlightSpan>Databases:</HighlightSpan>{" "}
        MySQL, MongoDB
      </p>
      <p>
        <HighlightSpan>Cloud:</HighlightSpan>{" "}
        Azure (Blob Storage, VM)
      </p>
      <p>
        <HighlightSpan>Tools:</HighlightSpan>{" "}
        Git, Docker, Linux
      </p>
      <p>
        <HighlightSpan>AI/ML:</HighlightSpan>{" "}
        LLMs, NLP, PyTorch, FastAPI
      </p>
    </AboutWrapper>
  );
};

export default Skills;
