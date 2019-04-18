const express = require('express');
const app = express();
const path = require('path');
const { Student, School } = require('./db/models');
const syncAndSeed = require('./db/syncAndSeed');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});
app.get('/api/students/:id', (req, res, next) => {
  Student.findByPk(req.params.id)
    .then(student => res.send(student))
    .catch(next);
});

app.post('/api/students/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.send(student))
    .catch(next);
});

app.put('/api/students/:id', (req, res, next) => {
  Student.update(req.body, {
    where: { id: req.params.id },
    returning: true
  })
    .then(student => res.send(student))
    .catch(next);
});

app.delete('/api/students/:id', (req, res, next) => {
  Student.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.get('/api/schools', (req, res, next) => {
  School.findAll()
    .then(schools => res.send(schools))
    .catch(next);
});

app.get('/api/schools/:id', (req, res, next) => {
  School.findByPk(req.params.id)
    .then(school => res.send(school))
    .catch(next);
});

app.post('/api/schools/', (req, res, next) => {
  School.create(req.body)
    .then(school => res.send(school))
    .catch(next);
});

app.put('/api/schools/:id', (req, res, next) => {
  School.update(req.body, {
    where: { id: req.params.id },
    returning: true
  })
    .then(school => res.send(school))
    .catch(next);
});

app.delete('/api/schools/:id', (req, res, next) => {
  School.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.listen(port, () => console.log(`listening on port ${port}`));

syncAndSeed();
