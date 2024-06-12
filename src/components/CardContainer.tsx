import React from "react";
import Card from "./Card";
import { cards } from "../utilities/constants";

const CardContainer: React.FC = () => {
  return (
    <div className="cardContainer">
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardContainer;
