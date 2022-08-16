import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import "./flightStatus.css"

const FlightStatus = () => {
    const [time, setTime] = React.useState(10);
    const [road, setRoad] = React.useState(10);

    const handleChange = (event: SelectChangeEvent) => {
      setRoad(event.target.value);
    }
      const handleChange2 = (event2: SelectChangeEvent) => {
        setTime(event2.target.value);
    };
    
  return (
    <Box className="flight">
    <Select variant="outlined"
     className="checkin-input"
      labelId="/"
      id="/"
      value={road}
      onChange={handleChange}
    >
      <MenuItem value={20}>Varış</MenuItem>
      <MenuItem value={30}>Kalkış</MenuItem>
      <MenuItem value={10}>Uçuş No</MenuItem>
      <MenuItem value={40}>Güzergah</MenuItem>
    </Select>
    <TextField
          id="aa-basic"
          label="Uçuş numarasını girin"
          variant="outlined"
          className="flightNoInput"
          size="medium"
        />

<Select variant="outlined"
       className="checkin-input"
      labelId="/"
      id="/"
      value={time}
      onChange={handleChange2}
    >
      <MenuItem value={20}>Perşembe 11 ağu</MenuItem>
      <MenuItem value={30}>Cuma 12 ağu</MenuItem>
      <MenuItem value={10}>Cumartesi 13 ağu</MenuItem>
      <MenuItem value={40}>Pazar 14 ağu</MenuItem>
      <MenuItem value={50}>Pazartesi 15 ağu</MenuItem>
    </Select>

    <Button variant="contained">
          Durumu kontrol et
        </Button>
        </Box>
  )
}

export default FlightStatus