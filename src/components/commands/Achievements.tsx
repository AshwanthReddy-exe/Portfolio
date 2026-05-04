import {
  AboutWrapper,
  HighlightSpan,
} from "../styles/About.styled";

const Achievements: React.FC = () => {
  return (
    <AboutWrapper data-testid="achievements">
      <p>
        • <HighlightSpan>LeetCode rating: 1603</HighlightSpan> — solved 300+
        DSA problems.
      </p>
      <p>
        • <HighlightSpan>Runner-up</HighlightSpan>, Udbhav Hackathon —
        Image-to-Story Converter.
      </p>
      <p>
        • <HighlightSpan>Finalist</HighlightSpan>, Manzil (IITM BS) Hackathon
        — top 5 among 100+ teams.
      </p>
      <p>
        • <HighlightSpan>Finalist</HighlightSpan>, BVRIT Hackathon — top 5
        among 100+ teams.
      </p>
    </AboutWrapper>
  );
};

export default Achievements;
