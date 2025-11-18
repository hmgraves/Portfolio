import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <h2>Contact</h2>
        <p className="contact-text">
          I’m currently open to senior frontend and full-stack roles (React, Angular, TypeScript,
          web or desktop), especially in healthcare, data, and developer tools.
        </p>

        <a href="mailto:hannahmgraves@gmail.com" className="contact-email">
          Email me at <span>hannahmgraves@gmail.com</span>
        </a>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/hannah-m-graves/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <i className="devicon-linkedin-plain"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/hmgraves"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <i className="devicon-github-plain"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
