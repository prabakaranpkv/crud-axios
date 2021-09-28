import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./update.css";
import Button from "@mui/material/Button";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);
  let history = useHistory();

  const UpdateData = () => {
    axios
      .put(`https://60c7e14eafc88600179f5ce9.mockapi.io/crud/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => history.push("/"));
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div className="update">
      <h5> Update</h5>
      <div className="update-user">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Button
          type="submit"
          variant="outlined"
          size="medium"
          color="success"
          onClick={UpdateData}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
