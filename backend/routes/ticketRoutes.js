const express = require("express");

const router = express.Router();

const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

const { protected } = require("../middleware/authMW");

router.route("/").get(protected, getTickets).post(protected, createTicket);

router
  .route("/:id")
  .get(protected, getTicket)
  .delete(protected, deleteTicket)
  .put(protected, updateTicket);

module.exports = router;
