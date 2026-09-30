const certificates = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    type: "Cloud · AWS",
    image: "certificates/aws_foundation_badge.jpeg",
  },
  {
    title: "India AI Impact Buildathon 2025",
    issuer: "HCL GUVI · AI Impact Summit",
    type: "AI · Innovation",
    image: "certificates/guvi_hcl.jpeg",
  },
  {
    title: "Data Science – ML/AI Crash Course",
    issuer: "Wisdom Sprouts IT Training Hub",
    type: "Data Science · ML · AI",
    image: "certificates/internship_certificate.jpeg",
  },
  {
    title: "Kaggle Hackathon — KoiPattern",
    issuer: "KoiPattern · Kaggle",
    type: "Hackathon · AI · Data Science",
    image: "certificates/kaggle_hackathon1.jpeg",
  },
  {
    title: "Kaggle Hackathon — KoiPattern",
    issuer: "KoiPattern · Kaggle",
    type: "Hackathon · AI · Data Science",
    image: "certificates/kaggle_hackathon2.jpeg",
  },
  {
    title: "ISRO Hackathon",
    issuer: "ISRO",
    type: "Space · Technology",
    image: "certificates/isro_hackathon.png",
  },
];

function Certificates() {
  return (
    <section className="certificates reveal" id="certificates">

      <div className="section-label">
        <span>04</span>
        <span>CERTIFICATIONS & ACHIEVEMENTS</span>
      </div>

      <div className="certificates-heading">
        <h2>
          Proof of
          <br />
          <span>building.</span>
        </h2>

        <p>
          Certifications, competitions and experiences that shaped
          how I approach real-world engineering.
        </p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <article
            className="certificate-card"
            key={`${certificate.title}-${index}`}
          >

            <div className="certificate-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <a
              className="certificate-image"
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <div className="certificate-overlay">
                <span>VIEW FULL CERTIFICATE ↗</span>
              </div>
            </a>

            <div className="certificate-info">
              <span>{certificate.type}</span>

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default Certificates;