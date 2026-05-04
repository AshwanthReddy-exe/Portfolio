import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const Experience: React.FC = () => {
  return (
    <AboutWrapper data-testid="experience">
      <p>
        <HighlightSpan>Engineering Intern</HighlightSpan> —{" "}
        <HighlightAlt>CyberGuard360, USA (Remote)</HighlightAlt>
      </p>
      <p>March 2025 – July 2025 | Hyderabad, India</p>
      <br />
      <p>
        • Built a Spring Boot backend showcase for automated threat analysis
        workflows.
      </p>
      <p>
        • Improved ML model performance from 55% to 73% through data
        preprocessing and optimization.
      </p>
      <p>
        • Integrated an LLM-based model for contextual threat analysis across
        security indicators.
      </p>
    </AboutWrapper>
  );
};

export default Experience;
