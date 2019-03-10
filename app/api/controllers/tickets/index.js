const { Ticket } = require('../../../models');

const getTicketsByStudent = (studentId) => {
  const tickets = [];
  Ticket.get().forEach((t) => {
    if (t.studentId === +studentId) {
      tickets.push(t);
    }
  });
  return tickets;
};

module.exports = {
  getTicketsByStudent,
};
