import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./read.css";
import Button from "@mui/material/Button";

export default function Read() {
  const [read, setRead] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios
      .get(`https://60c7e14eafc88600179f5ce9.mockapi.io/crud`)
      .then((getData) => setRead(getData.data));
  });

  const setData = (id, fname, lname) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", fname);
    localStorage.setItem("lastName", lname);
  };

  const getData = () => {
    axios
      .get(`https://60c7e14eafc88600179f5ce9.mockapi.io/crud`)
      .then((getData) => setRead(getData.data));
  };

  const Delete = (id) => {
    axios
      .delete(`https://60c7e14eafc88600179f5ce9.mockapi.io/crud/${id}`)
      .then(() => getData(), history.push("/"));
  };

  return (
    <div>
      <div className="read-title">User List</div>
      <div className="read-head">
        <div>ID</div>
        <div>Name</div>
        <div>Update</div>
        <div>Delete</div>
      </div>
      {read.map((data) => (
        <div className="read-user">
          <div>{data.id}</div>
          <div>{data.firstName}</div>
          <div>{data.lastName}</div>
          <Link to="/update">
            <Button
              className="button-update"
              color="success"
              variant="outlined"
              size="small"
              onClick={() => setData(data.id, data.firstName, data.lastName)}
            >
              Update
            </Button>
          </Link>

          <Button
            className="button-delete"
            color="error"
            variant="outlined"
            size="small"
            onClick={() => Delete(data.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
