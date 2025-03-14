import React from 'react';
import LargeProjectCard from '../components/LargeProjectCard';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <main className="page-wrapper">
      <section className="work-container" id="work">
        <h3 className="work-title">Work</h3>
        <div className="flex-container">
          <LargeProjectCard
            title="SwatchSaver"
            description="SwatchSaver is a web app that allows users to manage color palettes."
            imageUrl="/assets/images/swatchsaver.jpg"
            githubLink="https://github.com/ellimckinley/SwatchSaver"
          />
          <ProjectCard
            title="README Generator"
            description="Command-line tool that helps generate README.md files."
            imageUrl="/assets/images/readme.jpg"
            githubLink="https://github.com/meglanghoffdesign/readme-generator"
          />
          <ProjectCard
            title="Vehicle Application"
            description="Command-line tool that allows users to interact with vehicles."
            imageUrl="/assets/images/vehicle.jpg"
            githubLink="https://github.com/meglanghoffdesign/vehicle-command-line-application"
          />
          <ProjectCard
            title="Weather Dashboard"
            description="Weather app that fetches and displays real-time weather data."
            imageUrl="/assets/images/weather.jpg"
            githubLink="https://github.com/meglanghoffdesign/weather-dashboard"
          />
          <ProjectCard
            title="Employee Tracker"
            description="Command-line application that helps manage employee data."
            imageUrl="/assets/images/employee.jpg"
            githubLink="https://github.com/meglanghoffdesign/employee-tracker"
          />
        </div>
      </section>
    </main>
  );
};

export default Portfolio;