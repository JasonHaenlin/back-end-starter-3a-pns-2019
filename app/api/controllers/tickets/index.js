const { Ticket } = require('../../../models');

const getTicketsByStudent = (studentId) => {
  const tickets = [];
  Ticket.get().forEach((t) => {
    t.studentId.forEach((id) => {
      if (id === +studentId) {
        tickets.push(t);
      }
    });
  });
  return tickets;
};

module.exports = {
  getTicketsByStudent,
};
