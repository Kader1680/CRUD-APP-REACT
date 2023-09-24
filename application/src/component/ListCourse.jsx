import { height } from '@mui/system'
import React, { Fragment } from 'react'


class ListCourse extends React.Component {
  
  state = {
        isEdit:false
  }
  // function that return form
  // renderUpdateForm = () =>{
  //   return(
  //     <form>
  //       <input type='text' />
  //       <button>Update</button>
  //     </form>
  //   )
  // }



  // function that control
  toggleForm = () =>{
    
      let {isEdit}  = this.state
      this.setState(
        {isEdit: !isEdit }
      )
  }





  // add new task
  // newTask = (e) =>{
  //   // console.log(this.props.details.nameCourse)
  //   e.preventDefault()
  //   // this.props.editCoursed()
  // }

  // updadeItem
  updadeItem = (e) =>{
    e.preventDefault()
    this.props.editCourse(this.props.index, this.input.value)

    this.toggleForm();
  }



  // renderUpdate List
  renderUpdateForm = () =>{
    return(
      <form onSubmit={this.updadeItem}>
        <input ref={(value)=>{this.input = value}} defaultValue={this.props.details.nameCourse} type='text' />
        <button>Add New Task</button>
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
        <div>
              <ul>
                  <li style={{ display:'flex' }}>
                      <div style={{ width:"50%" }}>
                          <div  style={{ height:"auto" }}>{this.props.details.nameCourse}</div>
                      </div>
                      <div style={{ width:"50%" }}>
                        <button onClick={() =>{this.toggleForm () }} >Update</button>
                        <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete</button>
                      </div>
                  </li>
                  
              </ul>
          </div>
      )
    }



    
  }
export default ListCourse
