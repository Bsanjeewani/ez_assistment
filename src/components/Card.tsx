import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="cardwrapper">
        <img src={image} alt={title} className="cardImage" />
        <h2 className="title">{title}</h2>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
