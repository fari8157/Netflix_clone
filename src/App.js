
import React from "react";
import NavBar from "./Components/NavBar/navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPoster/RowPost";
import {Originals,Action,ComedyMovies,Horror} from "./url"
function App() {
  return (
    <div className="App">
  
    <NavBar/> 
    <Banner/>
    <RowPost  url={Originals} title='Netflix Originals'/>
    <RowPost  url={Action} title='Action' isSmall />
    <RowPost  url={ComedyMovies} title='ComedyMovies' isSmall />
    <RowPost  url={Horror} title='HorrorMovies' isSmall />
    
    
    </div>
  );
}

export default App;
