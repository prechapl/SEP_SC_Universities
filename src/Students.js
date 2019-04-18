import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, fetchStudents, fetchSchools } from './store';

class Students extends Component {
  componentDidMount() {
    this.props.fetchStudents().catch(ex => console.log(ex));
    this.props.fetchSchools().catch(ex => console.log(ex));
  }

  studentAttends = schoolId => {
    if (schoolId) {
      return this.props.schools.filter(school => school.id === schoolId)[0]
        .name;
    }
  };

  // schoolsExists = schoolId => {
  //   return this.props.students.filter(
  //     student => student.schoolId === schoolId
  //   );
  // };

  render() {
    return (
      <Fragment>
        <h4 className="d-flex mt-1 justify-content-center"> Students </h4>
        <table className="table table-sm m-3">
          <thead
            style={{ backgroundColor: '#205286' }}
            className="font-weight-light"
          >
            <tr className="text-white ">
              <th scope="col">id</th>
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">school</th>
              <th scope="col">email</th>
              <th scope="col">gpa</th>
              <th scope="col">edit</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.students.map(student => {
              return (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>
                    <img
                      className="img-thumbnail"
                      style={{ width: '75px' }}
                      src={student.image}
                      border="0"
                      alt="loading..."
                    />
                  </td>
                  <td>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                  </td>

                  <td>
                    {student
                      ? this.studentAttends(student.schoolId)
                      : 'does not exist'}
                  </td>
                  <td>{student.email}</td>

                  <td>{student.gpa}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <Link to={`/students/update/${student.id}`}>Edit</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => this.props.deleteStudent(student)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
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
    deleteStudent: student => dispatch(deleteStudent(student)),
    fetchStudents: () => dispatch(fetchStudents()),
    fetchSchools: () => dispatch(fetchSchools())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
