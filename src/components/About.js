import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        const { educationList, certificateList } = this.props;

        return (
            <div className="AboutMe-container">
                {/* Divider */}
                <div className="section-divider"></div>
                <section className="aboutMe-section">
                    <h2>About Me</h2>
                    <div className="aboutMe-content">
                        <p className="aboutMe-intro">
                            I'm <span>John Vincent Macayanan</span>
                        </p>
                        <p className="aboutMe-description">
                            An aspiring software developer and a current Bachelor of Science in Information Technology (BSIT) student.
                        </p>
                        <p className="aboutMe-description">
                            I am continuously learning and honing my skills in software development to tackle real-world challenges and build applications.
                        </p>
                    </div>
                </section>

                {/* Background Education Section */}
                <section className="background-education-section">
                    <h2 className="bgH2">Background Education</h2>
                    <div className="education-list">
                        {educationList.map((education, index) => (
                            <div key={index} className="education-card">
                                <div className="image-container">
                                    <img
                                        src={education.image}
                                        alt={`${education.name} logo`}
                                        className="education-image"
                                    />
                                </div>
                                <div className="education-details">
                                    <h3>{education.name}</h3>
                                    <h4>{education.level}</h4>
                                    <p>{education.description}</p>
                                    {education.link && (
                                        <a
                                            href={education.link}
                                            className="education-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View School
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="certificate-section">
                    <h2 className="bgH2">Certificates & Achievements</h2>
                    <div className="certificate-list">
                        {certificateList.map((cert, index) => (
                            <div key={index} className="certificate-card">
                                <div className="certificate-details">
                                    <h3>{cert.name}</h3>
                                    <p>{cert.description}</p>
                                    {cert.certificate && (
                                        <a
                                            href={cert.certificate}
                                            className="certificate-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutMe;
