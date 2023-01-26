import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

import { Typography, Button } from "@material-ui/core";

const Dashboard = () => {
  const history = useHistory();

  return (
    <>
      <Typography variant="h5">{`Welcome....!`}</Typography>
      <h2 style={{ textAlign: "center" }}>Amazing Journey</h2>
      <img
        src="https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        width="1250px"
        height="700px"
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.push("/flight-search")}
      >{`Search Flights `}</Button>
    </>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object
};

export default Dashboard;
