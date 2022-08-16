import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import './checkinTab.css'

const ChecinTab = () => {
  return (
    <div>
          <Box className="checkin">
            <TextField  sx={{mr:2	}}
              id="margin"
              label="Bilet ya da rezarvasyon kodu (PNR)"
              variant="outlined"
              size="large"
              className="textinput"
            />
            <TextField
              id="margin"
              label="Yolcunun soyadı"
              variant="outlined"
              className="textinput"
            />
            <Button variant="contained">
              Check-in
            </Button>
            <br/>
            <a className="left" href="/">Havalimanlarındaki online/mobil check-in olanaklar</a>
            <a href="/">Rezervasyon kodu (PNR) ve bilet numarası nedir?</a>
            
          </Box>
        </div>
  )
}

export default ChecinTab