import {
  AboutWrapper,
  HighlightSpan,
} from "../styles/About.styled";

const Resume: React.FC = () => {
  return (
    <AboutWrapper data-testid="resume">
      <p>
        {/* TODO: Replace the URL below with actual resume link when available */}
        <HighlightSpan>Resume:</HighlightSpan>{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          [Resume link coming soon — check back later!]
        </a>
      </p>
    </AboutWrapper>
  );
};

export default Resume;
