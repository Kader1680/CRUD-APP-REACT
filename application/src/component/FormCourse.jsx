import { Button, TextField } from '@mui/material'
import React from 'react'

function FormCourse(props) {
  return (
   <form style={{ display: "flex", alignItems: "center", "justifyContent": "center" }} onSubmit={props.addCourse} >
       
      <input style={{ backgroundColor: "white", padding: "9px", border: "0", outline: "none"}} value={props.current} onChange={props.updateCourse}   variant="outlined" />
      <Button type="submit"  sx={{ backgroundColor :" #31a958", border: "0", color: "white",  marginLeft :"1rem"}} variant="outlined">Add</Button>
      
   </form>

  )
}

export default FormCourse