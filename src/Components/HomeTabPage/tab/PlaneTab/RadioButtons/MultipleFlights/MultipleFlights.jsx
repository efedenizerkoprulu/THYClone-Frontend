import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./multipleFlights.css"

const MultipleFlights = () => {
  return (
    <div className="main">
<div>
<div className="count"> 
       <p> 1 </p></div>
    <TextField id="outlined-basic" label="Nereden" variant="outlined" size="large" className="main-text" sx={{mr:1}}/>
        <TextField id="aa-basic" label="Nereye" variant="outlined" className="main-text" sx={{mr:1}} />
        <TextField id="date" label="Gidiş Tarihi" type="date" defaultValue="2022-05-24" className="main-text" sx={{mr:1}}
    InputLabelProps={{
      shrink: true,
    }}
  />
</div>
  <br />
  <div className="count"> 
       <p> 2 </p></div>
    <TextField id="outlined-basic" label="Nereden" variant="outlined" size="large" className="main-text" sx={{mr:1}}/>
        <TextField id="aa-basic" label="Nereye" variant="outlined" className="main-text" sx={{mr:1}} />
        <TextField id="date" label="Gidiş Tarihi" type="date" defaultValue="2022-05-24" className="main-text" sx={{mr:1}}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <br />
    <TextField 
    id="date"
    label="Yolcu Sayısı"
    type="number"
    className="passenger-count"
    sx={{mt:2, mr:6}}
    />  
     <Button variant="contained" className="button" sx={{mr:2, mt:2}}>
          Uçuş Bul
        </Button>
        <Button variant="contained" id="add-passenger" sx= {{mt:2}}>
          Uçuş ekle
        </Button>
       </div>
  )
}

export default MultipleFlights