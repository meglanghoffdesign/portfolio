import React from 'react';

const LargeProjectCard = ({ title, description, imageUrl, githubLink }) => {
  return (
    <div className="flex-item first" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div>
        {/* Wrap the title with an anchor tag for the clickable GitHub link */}
        <h3>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LargeProjectCard;