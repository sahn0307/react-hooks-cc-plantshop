import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, deletePlant }) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plants.map((plant) => {
        return <PlantCard key={plant.id} id={plant.id} name={plant.name} 
                image={plant.image} price={plant.price} deletePlant={deletePlant}
              />
      })}
      </ul>
  );
}

export default PlantList;
