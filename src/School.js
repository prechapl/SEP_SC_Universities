import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class School extends Component {
  render() {
    const school = this.props.schools.find(
      _school => _school.id === this.props.match.params.id * 1
    );

    if (!school) {
      return (
        <span className="alert alert-warning" role="alert">
          Dang, We have no record of that school...
        </span>
      );
    }

    const attendees = this.props.students.filter(
      student => student.schoolId === school.id
    );
    const fullName = student => {
      const name = [student.firstName, student.lastName].join(' ');
      return name;
    };

    const roster = (
      <div className="col">
        <h5 className="d-flex justify-content-center">Student Roster</h5>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">gpa</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map(s => {
              return (
                <tr key={s.id}>
                  <th scope="row">{s.id}</th>
                  <td>
                    <Link to={`/students/${s.id}`}>{fullName(s)}</Link>
                  </td>
                  <td>{s.gpa}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    const hasAttendees = attendees.length
      ? roster
      : 'Darn! No record of attendees';

    if (school) {
      return (
        <Fragment>
          <div className="container d-flex flex-row mt-2">
            <div className="row">
              <div className="card flex-grow-1">
                <img className="card-img-top" src={school.image} />
                <div className="card-body">
                  <h3 className="card-title">{school.name}</h3>
                  <p>{school.description}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Student Enrollment: {school.enrollment}
                    </li>
                    <li className="list-group-item">
                      Acceptance Rate: {school.acceptanceRate}
                    </li>
                    <li className="list-group-item">
                      Address: {school.streetAddress}, {school.cityState}
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <small className="text-muted">
                    <Link to={`/schools/update/${school.id}`}>Edit</Link>
                  </small>
                </div>
              </div>
            </div>

            <div className="col-3 m-3">{hasAttendees}</div>
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    students: state.students || [],
    schools: state.schools || []
  };
};

export default connect(
  mapStateToProps,
  null
)(School);
