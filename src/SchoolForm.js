import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveSchool, updateSchool } from './store';

class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.supplyState(this.props.school);
  }

  supplyState = school => {
    return {
      id: school ? school.id : null,
      name: school ? school.name : '',
      image: school ? school.image : '',
      logo: school ? school.logo : '',
      streetAddress: school ? school.streetAddress : '',
      cityState: school ? school.cityState : '',
      blurb: school ? school.blurb : '',
      description: school ? school.description : '',
      tuition: school ? school.tuition : '',
      acceptanceRate: school ? school.acceptanceRate : '',
      enrollment: school ? school.enrollment : '',
      typicalSAT: school ? school.typicalSAT : '',
      error: ''
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.school && !prevProps.school) {
      this.setState(this.supplyState(this.props.school));
    }
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const school = { ...this.state };
    const samePaths =
      this.props.match.path === this.props.history.location.pathname;
    console.log(this.props.match.path === this.props.history.location.pathname);
    if (samePaths) {
      this.props
        .saveSchool(school)
        .then(() => this.props.history.push('/schools'))
        .catch(() => {
          this.setState({ error: 'Form submission falied! Please try again' });
        });
    } else {
      this.props
        .updateSchool(school)
        .then(() => this.props.history.push('/schools'))
        .catch(() => {
          this.setState({ error: 'Form submission falied! Please try again' });
        });
    }
  };

  render() {
    const {
      name,
      image,
      logo,
      streetAddress,
      cityState,
      blurb,
      description,
      tuition,
      acceptanceRate,
      enrollment,
      typicalSAT,
      error
    } = this.state;

    return (
      <Fragment>
        <form
          className="d-flex flex-column col-9 form-group mx-auto"
          onSubmit={this.handleSubmit}
        >
          {error.length ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            ''
          )}

          <div className="d-flex flex-row justify-content-center form-group">
            <label className="col-sm-1 col-form-label" htmlFor="name">
              Name:
            </label>
            <input
              onChange={this.handleChange}
              name="name"
              value={name}
              id="name"
              className="form-control form-control-sm ml-3"
              placeholder="enter school name
              "
            />
          </div>

          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="image">
              Image:
            </label>
            <input
              className="form-control form-control-sm ml-3"
              name="image"
              onChange={this.handleChange}
              value={image}
              id="image"
              placeholder="enter image url
              "
            />
          </div>
          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="logo">
              Logo:
            </label>
            <input
              className="form-control form-control-sm ml-3"
              name="logo"
              onChange={this.handleChange}
              value={logo}
              id="logo"
              placeholder="enter logo url"
            />
          </div>

          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="streetAddress">
              Street:
            </label>
            <input
              className="form-control form-control-sm ml-3"
              name="streetAddress"
              onChange={this.handleChange}
              value={streetAddress}
              placeholder="enter street address"
            />
          </div>
          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label mr-1" htmlFor="cityState">
              City/State:
            </label>
            <input
              className="form-control form-control-sm ml-4"
              name="cityState"
              onChange={this.handleChange}
              value={cityState}
              placeholder="enter city and state"
            />
          </div>
          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="blurb">
              Blurb:
            </label>
            <textarea
              className="form-control form-control-sm ml-3"
              name="blurb"
              onChange={this.handleChange}
              value={blurb}
              placeholder="enter blurb"
            />
          </div>

          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="description">
              Description:
            </label>
            <textarea
              className="form-control form-control-sm ml-5"
              name="description"
              onChange={this.handleChange}
              value={description}
              placeholder="enter description"
            />
          </div>

          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="tuition">
              Tuition:
            </label>
            <input
              className="form-control form-control-sm ml-3"
              name="tuition"
              onChange={this.handleChange}
              value={tuition}
              placeholder="enter tuition"
            />
          </div>
          <div className="d-flex flex-row form-group">
            <label className="col-sm-2 col-form-label" htmlFor="acceptanceRate">
              Acceptance:
            </label>
            <input
              className="form-control form-control-sm"
              name="acceptanceRate"
              onChange={this.handleChange}
              value={acceptanceRate}
              placeholder="enter acceptance rate"
            />
          </div>
          <div className="d-flex flex-row form-group">
            <label className="col-sm-1 col-form-label" htmlFor="enrollment">
              Enrollment:
            </label>
            <input
              className="form-control form-control-sm ml-5"
              name="enrollment"
              onChange={this.handleChange}
              value={enrollment}
              placeholder="enter enrollment"
            />
          </div>
          <div className="d-flex flex-row form-group">
            <label className="col-sm-2 col-form-label" htmlFor="typicalSAT">
              Typical SAT:
            </label>
            <input
              className="form-control form-control-sm"
              name="typicalSAT"
              onChange={this.handleChange}
              value={typicalSAT}
              placeholder="enter typical SAT scores"
            />
          </div>

          <button
            type="submit"
            value={this.state}
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
    saveSchool: school => dispatch(saveSchool(school)),
    updateSchool: school => dispatch(updateSchool(school))
  };
};

const mapStateToProps = (state, { match }) => {
  let school;
  if (match.params.id) {
    school = state.schools.find(s => s.id === match.params.id * 1);
  }
  return {
    schools: state.schools,
    school
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolForm);
