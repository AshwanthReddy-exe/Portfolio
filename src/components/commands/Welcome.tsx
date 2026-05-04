import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    ___         __                        __  __  
   /   |  _____/ /_ _      ______ _____  / /_/ /_ 
  / /| | / ___/ __ \ | /| / / __ \`/ __ \/ __/ __ \\
 / ___ |(__  ) / / / |/ |/ / /_/ / / / / /_/ / / /
/_/  |_/____/_/ /_/|__/|__/\__,_/_/ /_/\__/_/ /_/ 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ___        __  
   /   |_____/ /_ 
  / /| / ___/ __ \\
 / ___ (__  ) / / /
/_/  |_/___/_/ /_/ 
                    
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to Ashwanth's Terminal Portfolio!</div>
        <Seperator>----</Seperator>
        <div>
          Type '<Cmd>help</Cmd>' to see available commands.
        </div>
        <Seperator>----</Seperator>
        <div>
          Available commands: about, skills, experience, projects, education,
          achievements, contact, resume, themes, clear
        </div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/AshwanthReddy-exe">
            GitHub repo
          </Link>
          .
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
