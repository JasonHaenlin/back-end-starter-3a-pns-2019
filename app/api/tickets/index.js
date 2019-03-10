const { Router } = require('express');
const { Ticket } = require('../../models');
const error = require('../../utils/errors/exp-error');
const {
  attachStudent,
  isStudentExist,
} = require('../controllers/students');

const router = new Router();
router.get('/', (req, res) => {
  const tickets = Ticket.get();
  const attachedTickets = [];
  tickets.forEach(e => attachedTickets.push(attachStudent(e)));
  res.status(200).json(attachedTickets);
});
router.post('/', (req, res) => {
  try {
    isStudentExist(req.body.studentId);
    const ticket = Ticket.create(req.body);
    res.status(201).json(attachStudent(ticket));
  } catch (err) {
    error(err, res);
  }
});
router.get('/:ticketId', (req, res) => {
  try {
    const id = req.params.ticketId;
    const ticket = Ticket.getById(id);
    res.status(200).json(attachStudent(ticket));
  } catch (err) {
    error(err, res);
  }
});
router.delete('/:ticketId', (req, res) => {
  try {
    const id = req.params.ticketId;
    Ticket.delete(id);
    res.status(200).json('ok');
  } catch (err) {
    error(err, res);
  }
});
router.put('/:ticketId', (req, res) => {
  try {
    const id = req.params.ticketId;
    const ticket = Ticket.update(id, req.body);
    res.status(200).json(attachStudent(ticket));
  } catch (err) {
    error(err, res);
  }
});

module.exports = router;
