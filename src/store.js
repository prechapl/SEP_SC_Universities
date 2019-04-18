import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

//action types
const GET_STUDENTS = 'GET_STUDENTS';
const GET_SCHOOLS = 'GET_SCHOOLS';

//action creators
const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students
  };
};

const getSchools = schools => {
  return {
    type: GET_SCHOOLS,
    schools
  };
};

//reducers

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

const schoolsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SCHOOLS:
      return action.schools;
    default:
      return state;
  }
};

const reducer = combineReducers({
  students: studentsReducer,
  schools: schoolsReducer
});

//thunks

export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)));
  };
};

export const saveStudent = student => {
  return dispatch => {
    return axios
      .post('/api/students/', student)
      .then(() => dispatch(fetchStudents()));
  };
};

export const updateStudent = student => {
  return dispatch => {
    return axios
      .put(`/api/students/${student.id}`, student)
      .then(() => dispatch(fetchStudents()));
  };
};

export const deleteStudent = student => {
  return dispatch => {
    return axios
      .delete(`/api/students/${student.id}`)
      .then(() => dispatch(fetchStudents()));
  };
};

export const fetchSchools = () => {
  return dispatch => {
    return axios
      .get('/api/schools')
      .then(res => res.data)
      .then(schools => dispatch(getSchools(schools)));
  };
};

export const saveSchool = school => {
  return dispatch => {
    return axios
      .post('/api/schools/', school)
      .then(() => dispatch(fetchSchools()));
  };
};
export const updateSchool = school => {
  return dispatch => {
    return axios
      .put(`/api/schools/${school.id}`, school)
      .then(() => dispatch(fetchSchools()));
  };
};
// export const deleteStudents = (school, students) => {
//   return dispatch => {
//     students
//       .filter(s => s.schoolId !== school.id)
//       .map(st => {
//         return deleteStudent(st);
//       })
//       .then(() => dispatch(fetchStudents()));
//   };
// };

export const deleteSchool = (school, students) => {
  return dispatch => {
    students
      .filter(s => s.schoolId === school.id)
      .map(st => {
        return deleteStudent(st);
      });
    return axios
      .delete(`/api/schools/${school.id}`)
      .then(() => dispatch(fetchSchools()));
  };
};

//create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
