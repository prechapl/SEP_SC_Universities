const sequelize = require("sequelize");
const conn = require("./conn");

const School = conn.define("school", {
  name: {
    type: sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: sequelize.TEXT,
    defaultValue: sequelize.TEXT
  },
  logo: {
    type: sequelize.TEXT,
    defaultValue: sequelize.TEXT
  },
  streetAddress: {
    type: sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  cityState: {
    type: sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  blurb: sequelize.TEXT,
  description: sequelize.TEXT,
  tuition: sequelize.STRING,
  acceptanceRate: sequelize.STRING,
  enrollment: sequelize.STRING,
  typicalSAT: sequelize.STRING
});

const Student = conn.define("student", {
  firstName: {
    type: sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: sequelize.STRING,
    defaultValue: sequelize.STRING
  },
  gpa: sequelize.DECIMAL
});

Student.belongsTo(School);
// School.belongsTo(Student);

module.exports = {
  School,
  Student
};
