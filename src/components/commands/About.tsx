import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Most student projects never face real users. That's where they break.
      </p>
      <p>
        I built <HighlightSpan>GrabPic</HighlightSpan>, an image-processing
        backend that handled 1.8K+ requests during a live event — real traffic,
        real failures, real performance challenges, not just code that works
        locally.
      </p>
      <p>
        I've also worked as an intern at{" "}
        <HighlightSpan>CyberGuard360</HighlightSpan> (USA, Remote), where I
        fine-tuned LLMs on domain-specific data for cyber threat detection,
        improving model accuracy from 55% to 73%.
      </p>
      <p>
        My focus:{" "}
        <HighlightAlt>
          build systems that actually run, not just demos.
        </HighlightAlt>{" "}
        I care about how APIs behave under load, how data flows through a
        system, and where things break in real usage.
      </p>
      <p>
        I work primarily with Java and Spring Boot for backend, and I'm actively
        exploring how AI/ML fits into real-world applications beyond theory.
      </p>
      <p>
        Currently pursuing B.E. at{" "}
        <HighlightSpan>
          Neil Gogte Institute of Technology
        </HighlightSpan>{" "}
        (Expected 2027).
      </p>
    </AboutWrapper>
  );
};

export default About;
