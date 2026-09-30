function Contact() {
  const contact = {
    email: "karkikapil147@gmail.com",
    phone: "+91 9518317181",
    github: "https://github.com/kaka-koi",
    linkedin: "https://www.linkedin.com/in/kapil-karki-949731399?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  };

  return (
    <section className="contact reveal" id="contact">
      <div className="section-label">
        <span>05</span>
        <span>CONTACT</span>
      </div>

      <div className="contact-heading">
        <h2>
          Let's build
          <br />
          <em>something.</em>
        </h2>

        <p>
          Have a project, idea, collaboration or opportunity in mind?
          Let's talk about it.
        </p>
      </div>

      <div className="contact-main">
        <div className="contact-intro">
          <span className="contact-kicker">
            GET IN TOUCH
          </span>

          <a
            href={`mailto:${contact.email}`}
            className="contact-email"
          >
            {contact.email}
          </a>
        </div>

        <div className="contact-links">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GITHUB</span>
            <span>↗</span>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LINKEDIN</span>
            <span>↗</span>
          </a>

          <a href={`tel:${contact.phone}`}>
            <span>PHONE</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="contact-bottom">
        <span>AI · ML · WEB · SYSTEMS</span>
        <span>AVAILABLE FOR SELECTED PROJECTS</span>
      </div>
    </section>
  );
}

export default Contact;