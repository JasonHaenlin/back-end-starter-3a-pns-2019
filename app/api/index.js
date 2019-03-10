const { Router } = require('express');
const { Student, Ticket } = require('../models');
const TicketRouter = require('./tickets');
const StudentRouter = require('./students');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.get('/reset', (req, res) => {
  Student.reset();
  Ticket.reset();
  res.status(200).json('reset');
});
router.use('/tickets', TicketRouter);
router.use('/students', StudentRouter);

module.exports = router;
