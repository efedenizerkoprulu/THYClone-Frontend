import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../PlaneHotelTab/planeHotelTab.css"


const RoundTrip = () => {
  return (
    <div className="main">
        
        <TextField id="outlined-basic" label="Nereden" variant="outlined" size="large" className="text" sx={{mr:1}}/>
            <TextField id="aa-basic" label="Nereye" variant="outlined" className="text" sx={{mr:1}} />
            <TextField id="date" label="Gidiş Tarihi" type="date" defaultValue="2022-05-24" className="text" sx={{mr:1}}
        InputLabelProps={{
          shrink: true,
        }}
      />
         <TextField id="date" label="Geliş Tarihi" type="date" defaultValue="2022-05-24" className="text" sx={{mr:1}}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField 
        id="date"
        label="Yolcu Sayısı"
        type="number"
        className="text"
        />  
         <Button variant="contained" className="button">
              Uçuş Ara
            </Button>
           </div>
  )
}

export default RoundTrip