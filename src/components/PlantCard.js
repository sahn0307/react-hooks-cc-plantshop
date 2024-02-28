import React, {useState} from "react";

function PlantCard( { id, name, image, price, deletePlant} ) {
  const [inStock, setInStock] = useState(true);

  function handleToggle() {
    setInStock(inStock => !inStock);
  }
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    });
    deletePlant(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name}/>
      <h4>{name }</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
