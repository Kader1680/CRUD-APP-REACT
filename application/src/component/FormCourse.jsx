import React from 'react'

function FormCourse(props) {
  return (
   <form onSubmit={props.addCourse} >
       <input value={props.current} onChange={props.updateCourse} />
       <button type='submit'>kkljlkjl</button>
   </form>

  )
}

export default FormCourse