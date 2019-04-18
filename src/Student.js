import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent } from './store';

class Student extends Component {
  studentAttends = schoolId => {
    return this.props.schools.filter(school => school.id === schoolId)[0].name;
  };

  render() {
    const student = this.props.students.find(
      _student => _student.id === this.props.match.params.id * 1
    );
    if (!student) {
      return (
        <span className="d-flex justify-content-center mt-2 alert alert-danger">
          Student record doesn't exist...
        </span>
      );
    }

    if (student) {
      return (
        <Fragment>
          <div className="d-flex justify-content-center mt-2">
            <div className="card" style={{ width: '25rem' }}>
              <img className="card-img-top" src={student.image} />
              <div className="card-body">
                {student.firstName} {student.lastName}
                <div>Student Id: {student.id}</div>
                <div>
                  <Link to={`/schools/${student.schoolId}`}>
                    {this.studentAttends(student.schoolId)}
                  </Link>
                </div>
                <div>{student.email}</div>
                <div>gpa: {student.gpa}</div>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <small className="text-muted">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="submit"
                  >
                    <Link to={`/students/update/${student.id}`}>Edit</Link>
                  </button>
                </small>
                <small className="text-muted">
                  <button
                    type="submit"
                    onClick={() => this.props.deleteStudent(student)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </small>
              </div>
            </div>
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
    students: state.students,
    schools: state.schools
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: student => dispatch(deleteStudent(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
