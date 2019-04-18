const faker = require('faker');
const conn = require('./conn');
const { Student, School } = require('./models');
const seedSchools = require('./seedSchools');

const syncAndSeed = () => {
  const randomGPA = () => {
    return (Math.random() * (4.0 - 1.2) + 1.2).toString().slice(0, 4);
  };
  const randomSchoolId = (min, _max) => {
    return Math.floor(Math.random() * (_max - min + 1) + min).toString();
  };
  const randomStudent = () => {
    return {
      firstName: faker.fake('{{name.firstName}}'),
      lastName: faker.fake('{{name.lastName}}'),
      email: faker.fake('{{internet.email}}'),
      image: faker.fake('{{image.avatar}}'),
      gpa: randomGPA(),
      schoolId: randomSchoolId(1, 8)
    };
  };
  function generateStudentsArray(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(randomStudent());
    }
    return arr;
  }

  return conn.sync({ force: true }).then(() => {
    return Promise.all(seedSchools.map(s => School.create(s)))
      .then(() => generateStudentsArray(20))
      .then(students => {
        return Promise.all(students.map(student => Student.create(student)));
      })
      .catch(e => {
        throw e;
      });
  });
};

module.exports = syncAndSeed;
