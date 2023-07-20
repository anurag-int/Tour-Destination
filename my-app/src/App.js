import React from "react";   
import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./components/Tours";

const  App = () => {


  
  const [tours, setTours] = useState(data);
 
  function removeTour(id) {
    const newTours = tours.filter( tour  => tour.id !==id);
    setTours(newTours);
  }

  return(
    <div>
      <Tours></Tours>
    </div>
  )
}

export default App;
   