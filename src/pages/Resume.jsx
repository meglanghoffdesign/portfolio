import React from 'react';

const Resume = () => {
  return (
    <main className="page-wrapper">
      <section className="about-section" id="about">
        <h2>Resume</h2>
        <div className="about-content">
          <h2>Meg Langhoff</h2>
          <h4><a href="/assets/images/Resume.pdf" download="Resume.pdf" className="download-link">Download Resume</a></h4>
          <p>UI/UX Designer | Front-End Developer | Business Analyst | Quality Assurance</p>

          <h2>Skills</h2>
          <ul>
            <li>Design Tools: Adobe XD, Figma, Sketch, Indesign, Photoshop, Illustrator, Canva</li>
            <li>Development Skills: HTML5, CSS3, JavaScript, React, TypeScript, Node.js, Express.js</li>
            <li>Frameworks & Libraries: Bootstrap, Tailwind CSS, jQuery, Material-UI</li>
            <li>Version Control: Git, GitHub</li>
            <li>Design Skills: Wireframing, Prototyping, User Research, A/B Testing, Usability Testing, Video Editing, Agile/Scrum</li>
            <li>Additional Skills: Requirement Gathering, User Stories, Stakeholder Communication, Process Mapping, Manual and Automated Testing, Test Cases, Bug Tracking, Regression Testing</li>
          </ul>

          <h2>Education</h2>
          <p>Bachelor of Arts in Communication Design | Minor in Writing | Certificate for Digital Marketing - Fort Lewis College, Durango, CO | Graduated: 2022</p>

          <h2>Experience</h2>
          <h4>Lead UI/UX Designer, Business Analyst & QA Specialist | Gnomon Technology | May 2024 - Present</h4>
          <ul>
            <li>Lead design and development of websites, web applications, and mobile interfaces for clients across various industries including e-commerce, healthcare, and education.</li>
            <li>Expanded role to include business analysis, gathering client requirements, defining project scope, and ensuring that solutions meet both business and user needs.</li>
            <li>Incorporated quality assurance practices into the design process, collaborating with development teams to perform thorough testing, ensuring the highest quality user experiences across platforms.</li>
            <li>Lead user research and testing, ensuring designs are intuitive and meet user needs while adhering to industry best practices and accessibility standards.</li>
            <li>Collaborate closely with developers to ensure that the final product aligns with design standards and provides a seamless user experience across both front-end and back-end functionalities.</li>
          </ul>

          <h4>UI/UX Designer | Codelation | August 2022 - May 2024 </h4>
          <ul>
            <li>Design and develop websites, web applications, and mobile interfaces for clients in various industries including e-commerce, healthcare, and education.</li>
            <li>Lead user research and testing, ensuring designs are intuitive and meet user needs.</li>
            <li>Collaborate with developers to ensure the final product aligns with design standards and provides a seamless user experience.</li>
          </ul>

          <h4>Lead Designer for IMAGES Magazine | Fort Lewis College | September 2019 – May 2022 </h4>
          <ul>
            <li>Instructed and collaborated with a team of designers.</li>
            <li>Focused on producing promotional material, organizing events, and publishing the bi-yearly magazine.</li>
            <li>Oversaw and interacted directly with the printing process and delivery of magazine.</li>
          </ul>

          <h4>Marketing & Communication Design Internship | Fort Lewis College | October 2019 – May 2022 </h4>
          <ul>
            <li>Worked within the Marketing and Communication department of Fort Lewis College.</li>
            <li>Produced professional designs intertwined with the FLC Brand Guidelines.</li>
            <li>Oversaw important projects such as redesigning student identification cards.</li>
          </ul>

          <h2>Projects</h2>
          <h4>SwatchSaver | Web App</h4>
          <p>Developed a web application that allows users to create, manage, and share color palettes for design purposes using React, CSS, and Firebase.</p>

          <h4>README Generator | Command-Line Tool</h4>
          <p>Created a command-line tool that automates the generation of README.md files for projects, improving efficiency for developers using Node.js and Inquirer.js.</p>

          <h4>Vehicle Application | Command-Line Tool</h4>
          <p>Built a command-line tool that allows users to interact with vehicle data, enabling them to add, view, and update vehicle records using Node.js and a MySQL database.</p>

          <h4>Weather Dashboard | Web App</h4>
          <p>Designed and developed a responsive weather dashboard that fetches real-time weather data using an API, displaying current conditions and forecasts using HTML, CSS, and JavaScript.</p>

          <h4>Employee Tracker | Command-Line Tool</h4>
          <p>Developed a command-line application to manage employee information, allowing users to add, view, and update employee records, built with Node.js and a MySQL database.</p>

          <h2>Certifications & Training</h2>
          <ul>
            <li>HubSpot Digital Academy Content Marketing Certificate | 2024</li>
            <li>HubSpot Digital Academy Social Media Marketing Certificate | 2024</li>
            <li>CRLA Peer Tutoring Level Two Certificate | 2021</li>
          </ul>

          <h2>Awards</h2>
          <ul>
            <li>Honorable Mentioned: 61st Annual Student Juried Exhibition: Derrick Velasquez | Achieved March 2022</li>
            <li>Placed First: 2nd Annual Art @ Innovation Exhibition: Looking Up | Achieved October 2021</li> 
            <li>Awarded: Just-In-Time Grant: Facial Recognition Prevention Mask | Achieved October 2021</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Resume;