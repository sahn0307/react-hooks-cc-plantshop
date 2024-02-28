import {useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {onAddNewPlant} ) {
  const [plants, setPlants] = useState([]);
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plantsArray => setPlants(plantsArray))
      .catch(err => console.log(err))
  }, []);

  function handleAddNewPlant(newPlant) {
    const newPlantsArray = [...plants, newPlant];
    setPlants(newPlantsArray);
  }

  function handleDeletePlant(id) {
    const newPlantsArray = plants.filter(plant => plant.id !== id);
    setPlants(newPlantsArray);
  }
  const filteredPlants =plants.filter((plant => {
    return plant.name.toLowerCase().includes(searchItem.toLowerCase())
  }))

  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant} />
      <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
      <PlantList plants={filteredPlants} deletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
