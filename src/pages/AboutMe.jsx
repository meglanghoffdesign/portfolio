import React from 'react';

const AboutMe = () => {
  return (
    <main className="page-wrapper">
      <section className="about-section" id="about">
        <h2>About <span>Me</span></h2>
        <div className="about-image">
          <img src="/assets/images/me.jpg" alt="Meg Langhoff" />
        </div>
        <div className="about-content">
          <p>
          Hi, I'm Meg Langhoff, a passionate and versatile UI/UX Designer with a strong foundation in front-end development, business analysis, and quality assurance. I specialize in creating intuitive and user-centered designs that solve real-world problems and provide exceptional experiences.
With a background in design, I bring a holistic understanding of how design and development seamlessly work together, ensuring that every design is not only beautiful but also functional. I also have experience in business analysis, where I collaborate with stakeholders to understand requirements and translate them into actionable design solutions. Additionally, my QA skills help ensure that the final product meets the highest standards of quality and performance.
I thrive in dynamic environments where I can leverage my diverse skill set to deliver impactful results. My goal is to always create designs that are not only aesthetically pleasing but also practical and user-friendly. I’m passionate about staying on top of industry trends and continuously honing my skills to deliver the best possible solutions.
Feel free to connect with me on LinkedIn to learn more about my work and how I can help bring your next project to life!
            {/* Add more details about yourself */}
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;