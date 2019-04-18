import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deleteSchool } from './store';

class Schools extends Component {
  handleRedirect = school => {
    return <Link to={`/schools/update/${school.id}`} />;
  };

  render() {
    return (
      <Fragment>
        <ul className="container">
          <div className="row d-flex flex-wrap">
            {this.props.schools.map(school => {
              return (
                <li
                  key={school.id}
                  className="card  rounded-lg shadow m-3 mb-5 bg-white rounded"
                  style={{ width: '15rem' }}
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
                          className="btn btn-sm"
                          onClick={() => this.props.deleteSchool(school)}
                          type="button"
                        >
                          delete
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
    deleteSchool: school => dispatch(deleteSchool(school))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schools);
