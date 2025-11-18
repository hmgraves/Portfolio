import Hannah from "../../Images/Hannah.png";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-photo-wrapper">
          <img
            className="about-photo"
            src={Hannah}
            alt="Hannah Graves, Senior Software Engineer"
          />
        </div>
        <div className="about-text">
          <h2>About</h2>
          <p>
            I’m a Senior Frontend &amp; Full-Stack Engineer with a focus on building
            high-quality, scalable web and desktop applications. I love building intuitive, reliable tools that make complex
            systems easier for real people to use.
          </p>
          <p>
            My core stack includes <strong>React</strong>, <strong>Angular</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Python</strong>, <strong>Electron</strong>, and{" "}
            <strong>AWS</strong>. I’ve been the sole frontend engineer at a genetics
            company, leading projects from concept and architecture through
            implementation, launch, and ongoing iteration.
          </p>
          <ul className="about-highlights">
            <li>Lead frontend engineer delivering production applications across web and desktop.</li>
            <li>Designed and built production apps used by labs and hospitals.</li>
            <li>Experienced in design-system-driven development using Material UI, Angular Material, and Storybook.</li>
            <li>Integrated secure, cloud-based workflows for sensitive patient data.</li>
            <li>Deep ownership mindset — from planning and architecture to deployment and refinement.</li>
          </ul>
          <p>
            My background combines a <strong>B.S. in Biology</strong>, ongoing{" "}
            <strong>M.S. in Microbiology &amp; Cell Science</strong>, and previous
            hands-on work in clinical healthcare. I care deeply about building
            software that actually improves people’s lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
