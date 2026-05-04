import {
  AboutWrapper,
  HighlightSpan,
} from "../styles/About.styled";

const Contact: React.FC = () => {
  return (
    <AboutWrapper data-testid="contact">
      <p>
        <HighlightSpan>Email:</HighlightSpan>{" "}
        <a href="mailto:ashreddy06b@gmail.com" style={{ color: "inherit" }}>
          ashreddy06b@gmail.com
        </a>
      </p>
      <p>
        <HighlightSpan>GitHub:</HighlightSpan>{" "}
        <a
          href="https://github.com/AshwanthReddy-exe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          https://github.com/AshwanthReddy-exe
        </a>
      </p>
      <p>
        <HighlightSpan>LinkedIn:</HighlightSpan>{" "}
        <a
          href="https://www.linkedin.com/in/ashreddyb/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          https://www.linkedin.com/in/ashreddyb/
        </a>
      </p>
    </AboutWrapper>
  );
};

export default Contact;
