import React from 'react'


class ListCourse extends React.Component {
    render() {
      return(
        <div>
            <ul>
                <li>
                    {this.props.details.nameCourse}
                </li>
            </ul>
        </div>
      )
    }
    
  }
export default ListCourse
