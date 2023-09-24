import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import FormCourse from './component/FormCourse';
import ListCourse from './component/ListCourse';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Router } from '@mui/icons-material';
class App extends React.Component{
  state = {
    courses:[
      // {nameCourse : ""},
      {nameCourse : "C++"},
      {nameCourse : "Object Oriented Programming"},
      {nameCourse : "Algorithm"},
    ],
    current : ''
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

  deleteCourse = (index) =>{
    // console.log(this.state.courses)
    let coursesSplit = this.state.courses
    coursesSplit.splice(index, 1)
    this.setState(
      {
        allCourses :  coursesSplit,

      }
    )
  }
  printArray = () =>{
    console.log(this.state.courses) 
  }
  reloveAll = () => {

    let allcourses = this.state.courses;
    while (allcourses.length > 0) {
      allcourses.pop()
    }
  }

  // update courses 
  updateCourse = (e) =>{
    // console.log(e.target.value)
    this.setState({
      current:e.target.value
    })
  }

  // Edit courses 
  // i implent the indexto edit just items
  editCourse = (index, value) =>{

    // get all courses form the array 
    let courses = this.state.courses

    // get just courses select with her ownn inddex
    let course = courses[index]

    // get name of index course and set a new value      
    course['nameCourse'] = value

    // set the current value editing ti array fo courses using setState
    this.setState({
      
        course
      
    })
  }


  render(){
    const {courses} = this.state
    const CourseFetsh = courses.map((cours, index) => {
          
          return <ListCourse editCourse = {this.editCourse} key={index} index={index}  deleteCourse={this.deleteCourse}  details={cours} />
    })
    return (
      <BrowserRouter>
        <div className="App">
          
          <button onClick={this.printArray} >alll courses</button>
          <p> {this.state.nasss} </p>
          <p> {this.state.op} </p>
          <FormCourse  reloveAll={this.reloveAll} current={this.state.current} addCourse={this.addCourse}  updateCourse = {this.updateCourse} />
          {CourseFetsh}
      </div>
      </BrowserRouter>
    );
  }
}
  
  


export default App;
