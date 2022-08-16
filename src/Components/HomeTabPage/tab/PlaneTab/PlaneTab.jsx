import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import RoundTrip from  "./RadioButtons/RoundTrip"
import OneWay from  "./RadioButtons/OneWay/OneWay"
import MultipleFlights from  "./RadioButtons/MultipleFlights/MultipleFlights"
import Checkbox from '@mui/material/Checkbox';
import './style.css'




const PlaneTab = () => {
  const [selectedValue, selectedSetValue] = useState("");   
  return (
  
    <div>
            <FormControlLabel control={<Checkbox/>} label="Ödül bilet - Millerinizle bilet satın alın" className="check" />

      <RadioGroup
        value={selectedValue}
        onChange={(e) => selectedSetValue(e.target.value)}
        defaultValue="RoundTrip"
        row
      >
        <FormControlLabel value="RoundTrip" control={<Radio defaultValue />} label="Gidiş - Dönüş" />
        <FormControlLabel value="OneWay" control={<Radio />} label="Tek Yön" />
        <FormControlLabel value="MultipleFlight" control={<Radio />} label="Çoklu Uçuş" />
      </RadioGroup>
      <br/>
      <div> 
     {(selectedValue==="RoundTrip") ?  <RoundTrip/> : null}
     {(selectedValue==="OneWay") ?  <OneWay/> : null}
     {(selectedValue==="MultipleFlight") ?  <MultipleFlights/> : null}

      
     </div>
    </div>
  );
};

export default PlaneTab;
