import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./create.css";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let history = useHistory();
  const CreateName = () => {
    axios
      .post(`https://60c7e14eafc88600179f5ce9.mockapi.io/crud`, {
        firstName,
        lastName,
      })
      .then(() => history.push("/"));
  };

  return (
    <div>
      <h5> Create User</h5>
      <div className="create-user">
        <TextField
          id="outlined-basic"
          label="FirstName"
          type="text"
          name="fname"
          onChange={(e) => setFirstName(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="LastName"
          type="text"
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
          variant="outlined"
        />
        <Button variant="outlined" type="submit" onClick={CreateName}>
          Create
        </Button>
      </div>
    </div>
  );
}
