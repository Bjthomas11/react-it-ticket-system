// ticket schema
const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: [
        "iPhone",
        "Macbook Air M1",
        "Macbook Pro M1",
        "iMac",
        "iPad Air",
        "iPad Pro",
      ],
    },
    description: {
      type: String,
      required: [true, "Provide a description of the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["NEW", "OPEN", "CLOSED"],
      default: "NEW",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
