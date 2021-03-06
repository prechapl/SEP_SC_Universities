import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSchool, fetchStudents, fetchSchools } from "./store";

class Schools extends Component {
  componentDidMount() {
    this.props.fetchSchools().catch(ex => console.log(ex));
    this.props.fetchStudents().catch(ex => console.log(ex));
  }
  componentDidUpdate(prevProps) {
    if (this.props.schools.length !== prevProps.schools.length) {
      this.props.fetchStudents();
    }
  }
  render() {
    const students = this.props.students;
    return (
      <Fragment>
        <ul className="container">
          <div className="row d-flex flex-wrap col-12 justify-content-center">
            {this.props.schools.map(school => {
              return (
                <li
                  key={school.id}
                  className="card  rounded-lg shadow m-3 bg-white rounded"
                  style={{ width: "14rem" }}
                >
                  <img
                    className="card-img-top p-1"
                    src={school.logo}
                    border="0"
                    alt="..loading"
                  />
                  <div className="card-body">
                    <div className="card-title text-center">
                      <Link className="text-muted" to={`/schools/${school.id}`}>
                        {school.name}
                      </Link>
                    </div>

                    <p className="card-text">
                      <small>{school.blurb}</small>
                    </p>
                  </div>
                  <div className="card-footer nav-fill" role="group">
                    <div className="d-flex justify-content-around">
                      <small>
                        <button className="btn btn-sm" type="button">
                          <Link
                            className="text-muted"
                            to={`/schools/update/${school.id}`}
                          >
                            edit
                          </Link>
                        </button>
                      </small>
                      <small className="">
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={() =>
                            this.props.deleteSchool(school, students)
                          }
                        >
                          <Link to="#" className="text-muted">
                            delete
                          </Link>
                        </button>
                      </small>
                      <button className="btn btn-sm" type="button">
                        <Link
                          className="text-muted"
                          to={`/schools/${school.id}`}
                        >
                          details
                        </Link>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ students, schools }) => {
  return {
    students,
    schools
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSchools: () => dispatch(fetchSchools()),
    fetchStudents: () => dispatch(fetchStudents()),
    deleteSchool: (school, students) => dispatch(deleteSchool(school, students))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schools);
