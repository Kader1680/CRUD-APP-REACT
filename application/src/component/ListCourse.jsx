import { height } from '@mui/system'
import React, { Fragment } from 'react'

// import Button  from '@material-ui/core/Button'
import { red } from '@mui/material/colors';
import {Button}  from '@mui/material'
import { Container } from '@material-ui/core';

const color = red[500];


class ListCourse extends React.Component {
  
  state = {
        isEdit:false
  }

  // function that control
  toggleForm = () =>{
    
      let {isEdit}  = this.state
      this.setState(
        {isEdit: !isEdit }
      )
  }

  // updadeItem
  updadeItem = (e) =>{
    e.preventDefault()
    this.props.editCourse(this.props.index, this.input.value)

    this.toggleForm();
  }



  // renderUpdate List
  renderUpdateForm = () =>{
    return(
      <form style={{ display: "flex", alignItems: "center", "justifyContent": "center", margin: "15px 0" }} onSubmit={this.updadeItem}>
        {/* <input value={props.current} onChange={props.updateCourse}   variant="outlined" /> */}

        <input style={{ backgroundColor: "white", padding: "9px", border: "0", outline: "none"}}   ref={(value)=>{this.input = value}} defaultValue={this.props.details.nameCourse} type='text' />
        {/* <button>Update</button> */}
        <Button type="submit"  sx={{ backgroundColor :" #31a958", border: "0", color: "white",  marginLeft :"1rem"}} variant="outlined">Update</Button>

      </form>
    )
  }

    render() {
      let {isEdit}  = this.state
      return(
        <Fragment>
          {isEdit ? this.renderUpdateForm() : this.renderList()}
        </Fragment>
      )
    }






    
    renderList = () =>{
      return(
    // <Container>
          <div class="tasks">
                      <div>
                          <div  style={{ height:"auto" }}>{this.props.details.nameCourse}</div>
                      </div>
                      <div>
                        <Button onClick={() =>{this.toggleForm () }}  sx={{
                                                  backgroundColor: "white",
                                                  color: "#31a958",       
                                                  margin: "0px 10px", 
                                                  border: "2px solid #31a958 ",      
    
                                }}>Update</Button>
                        <Button onClick={()=>{this.props.deleteCourse(this.props.index)}}
                        
                                                                        sx={{
                                                    backgroundColor: "#31a958",
                                                    color: "#fff",       
                                                    border : "2px solid #31a958"
                                                    
                                                }}
                        
                         variant="outlined">Delete</Button>

                       
                      </div>
          </div>
    // </Container>
        
      )
    }



    
  }
export default ListCourse
