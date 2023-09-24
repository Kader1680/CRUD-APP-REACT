import React from 'react'

function FormCourse(props) {
  return (
   <form onSubmit={props.addCourse} >
       <input  value={props.current} onChange={props.updateCourse} />
       <button type='submit'>click</button>
       <button onClick={props.reloveAll} >remove all</button>
   </form>

  )
}

export default FormCourse