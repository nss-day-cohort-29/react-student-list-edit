import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StudentList extends Component {
  render() {
    return (
      <section className="students">
        {/* this .map loops through the list of students*/}
        {this.props.students.map(student => (
          <div key={student.id} className="card card--student">
            <div className="card-body">
              <h5 className="card-title">
                {student.firstName} {student.lastName}
              </h5>
              <p>{student.notes}</p>

              <Link className="nav-link" to={`/students/${student.id}/edit`}>Edit</Link>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
