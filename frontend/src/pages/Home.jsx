import { Fragment } from "react";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <section className="heading">
        <h1>Need Help?</h1>
        <p>Please select an option below</p>
      </section>
      <Link to="new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>
      <Link to="tickets" className="btn btn-block">
        <FaTicketAlt /> View Tickets
      </Link>
    </Fragment>
  );
};

export default Home;
