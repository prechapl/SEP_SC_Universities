import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Students from './Students';
import Student from './Student';
import Schools from './Schools';
import School from './School';
import SchoolForm from './SchoolForm';
import StudentForm from './StudentForm';
import Nav from './Nav';
import Invalid from './Invalid';
import { fetchSchools, fetchStudents } from './store';

class App extends Component {
  componentDidMount() {
    this.props.fetchSchools().catch(ex => console.log(ex));
    this.props.fetchStudents().catch(ex => console.log(ex));
  }
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route component={Nav} />
          <Switch>
            <Route exact path="/" component={Schools} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/addStudent" component={StudentForm} />
            <Route exact path="/students/update/:id" component={StudentForm} />
            <Route exact path="/students/:id" component={Student} />
            <Route exact path="/schools" component={Schools} />
            <Route exact path="/addSchool" component={SchoolForm} />
            <Route exact path="/schools/update/:id" component={SchoolForm} />
            <Route exact path="/schools/:id" component={School} />
            <Route component={Invalid} />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    fetchSchools: () => dispatch(fetchSchools())
  };
};

const mapStateToProps = state => {
  return {
    students: state.students,
    schools: state.schools
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
