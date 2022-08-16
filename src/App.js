import React from "react";
import "./App.css";
import { ChildHeader,Header} from "./Components";
import {Home} from './Containers'
import {BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import PlanFlyMegaMenu from "./Components/MegaPages/PlanFlyMegaMenu"
import TravelExperience from "./Components/MegaPages/TravelExperienceMegaPage";
import DiscoverMegaPages from "./Components/MegaPages/DiscoverMegaPages";

const App = () => {   
  return (
  <Router>
   <div className="App">
      <div className="gradient__bg">
      <ChildHeader/>
      <Header/>
      <Routes><Route path="/planemenutab" element={<PlanFlyMegaMenu/>}></Route></Routes>
     <Routes><Route path="/travelexperiencetab" element={<TravelExperience/>}></Route></Routes>
     <Routes><Route path="/discovertab" element={<DiscoverMegaPages/>}></Route></Routes>
      </div>
     <Home/>
     
    </div>
    </Router>
    
   
  );
}

export default App;
