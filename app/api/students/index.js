const { Router } = require('express');
const { Student } = require('../../models');
const { getTicketsByStudent } = require('../controllers/tickets');
const error = require('../../utils/errors/exp-error');

const router = new Router();

router.get('/', (req, res, next) => {
  if (req.query.name !== undefined) {
    next();
  } else {
    res.status(200).json(Student.get());
  }
}, ('/?name=:terms', (req, res) => {
  try {
    const name = req.query.name.toLowerCase();
    const students = [];
    Student.get().forEach((s) => {
      if ((s.firstName.toLowerCase() + s.lastName.toLowerCase()).includes(name)) {
        students.push(s);
      }
    });
    res.status(200).json(students);
  } catch (err) {
    err(err, res);
  }
}));

router.get('/:studentId/tickets', (req, res) => {
  try {
    const student = Student.getById(req.params.studentId);
    const tickets = [];

    getTicketsByStudent(student.id).forEach((ticket) => {
      const curTicket = Object.assign({}, ticket, { student });
      delete curTicket.studentId;
      tickets.push(curTicket);
    });

    res.status(200).json(tickets);
  } catch (err) {
    error(err, res);
  }
});

router.get('/:studentId', (req, res) => {
  try {
    const student = Student.getById(req.params.studentId);
    res.status(200).json(student);
  } catch (err) {
    error(err, res);
  }
});

router.post('/', (req, res) => {
  try {
    res.status(201).json(Student.create(req.body));
  } catch (err) {
    error(err, res);
  }
});

router.delete('/:studentId', (req, res) => {
  try {
    const id = req.params.studentId;
    res.status(200).json(Student.delete(id));
  } catch (err) {
    error(err, res);
  }
});

router.put('/:studentId', (req, res) => {
  try {
    const id = req.params.studentId;
    res.status(200).json(Student.update(id, req.body));
  } catch (err) {
    error(err, res);
  }
});

module.exports = router;
