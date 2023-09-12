import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import FormCourse from './component/FormCourse';
import ListCourse from './component/ListCourse';
import React from 'react';
class App extends React.Component{
  state = {
    courses:[
      // {nameCourse : ""},
      // {nameCourse : "C++"},
      // {nameCourse : "Object Oriented Programming"},
      // {nameCourse : "Algorithm"},
    ],
    current : ''
  }

  updateCourse = (e) =>{
    // console.log(e.target.value)
    this.setState({
      current:e.target.value
    })
  }
  addCourse = (e) =>{
    e.preventDefault()
    console.log('dfdfdfdfd')
    // get all curent value from state
    let current = this.state.current
    // get all courses precedent from state
    let allCourses = this.state.courses
    // push the curent value into courses state
    allCourses.push({nameCourse: current});
    // update state with the curent va
    this.setState(
      {
        allCourses, 
        current : ""
      }
    )
  }

  render(){
    const {courses} = this.state
    const CourseFetsh = courses.map((cours, index) => {
          
          return <ListCourse details={cours} key={index} />
    })
    return (
      <div className="App">
          <p> {this.state.nasss} </p>
          <p> {this.state.op} </p>
          <FormCourse current={this.state.current} addCourse={this.addCourse}  updateCourse = {this.updateCourse} />
          {CourseFetsh}
      </div>
    );
  }
}
  
  


export default App;
