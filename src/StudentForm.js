import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveStudent, updateStudent } from './store';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.supplyState(this.props.student);
  }
  supplyState = student => {
    return {
      id: student ? student.id : null,
      firstName: student ? student.firstName : '',
      lastName: student ? student.lastName : '',
      email: student ? student.email : '',
      image: student ? student.image : '',
      gpa: student ? student.gpa : 0,
      schoolId: student ? student.schoolId : 0,
      error: ''
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.student && !prevProps.student) {
      this.setState(this.supplyState(this.props.student));
    }
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const student = { ...this.state };
    const samePaths =
      this.props.match.path === this.props.history.location.pathname;
    console.log(this.props.match.path === this.props.history.location.pathname);
    if (samePaths) {
      this.props
        .saveStudent(student)
        .then(() => this.props.history.push('/students'))
        .catch(() => {
          this.setState({ error: 'Form submission falied! Please try again' });
        });
    } else {
      this.props
        .updateStudent(student)
        .then(() => this.props.history.push('/students'))
        .catch(() => {
          this.setState({ error: 'Form submission falied! Please try again' });
        });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      image,
      gpa,
      schoolId,
      error
    } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          {error.length ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            ''
          )}
          <div className="form-group">
            <label htmlFor="firstName"> First Name: </label>
            <input
              className="form-control form-control-sm"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
              placeholder="enter first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName"> Last Name: </label>
            <input
              className="form-control form-control-sm"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
              placeholder="enter last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email: </label>
            <input
              className="form-control form-control-sm"
              name="email"
              onChange={this.handleChange}
              value={email}
              placeholder="enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image"> Image: </label>
            <input
              className="form-control form-control-sm"
              name="image"
              onChange={this.handleChange}
              value={image}
              placeholder="enter image"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gpa"> GPA: </label>
            <input
              className="form-control form-control-sm"
              name="gpa"
              onChange={this.handleChange}
              value={gpa}
              placeholder="enter gpa"
            />
          </div>
          <div className="form-group">
            <label htmlFor="schoolId"> SchoolId: </label>
            <input
              className="form-control form-control-sm"
              name="schoolId"
              onChange={this.handleChange}
              value={schoolId}
              placeholder="enter schoolId"
            />
          </div>
          <button
            type="submit"
            value={this.state.student}
            className="btn btn-outline-success"
          >
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveStudent: student => dispatch(saveStudent(student)),
    updateStudent: student => dispatch(updateStudent(student))
  };
};

const mapStateToProps = (state, { match }) => {
  let student;
  if (match.params.id) {
    student = state.students.find(s => s.id === match.params.id * 1);
  }
  return {
    students: state.students,
    student
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
