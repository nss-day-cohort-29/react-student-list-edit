import { Route } from "react-router-dom";
import React, { Component } from "react";
import StudentList from "./student/StudentList";
import StudentManager from "../modules/StudentManager"
import StudentForm from "./student/StudentForm"

export default class ApplicationViews extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    StudentManager.getAll()
    .then(students => {
      this.setState({
        students: students
      });
    });
  }

  updateStudent = (studentId, editedStudentObj) => {
    return StudentManager.put(studentId, editedStudentObj)
    .then(() => StudentManager.getAll())
    .then(students => {
      this.setState({
        students: students
      })
    });
  }



  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/students" render={props => {
            return <StudentList students={this.state.students} />
          }}
        />

        <Route
          path="/students/:studentId(\d+)/edit" render={props => {
            return <StudentForm {...props} updateStudent={this.updateStudent}/>
          }}
        />


      </React.Fragment>
    );
  }
}
