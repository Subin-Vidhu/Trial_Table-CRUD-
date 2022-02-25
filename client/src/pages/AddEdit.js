import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link, useNavigate } from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, phone } = state;

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Please provide value to into each field");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          name,
          email,
          phone,
        })
        .then(() => {
          setState({ name: "", email: "", phone: "" });
        })
        .catch((err) => toast.error(err.response.data));
      setTimeout(() => history.push("/"), 500);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">phone</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Your phone..."
          value={phone}
          onChange={handleInputChange}
        />
        <input type="submit" value="Save" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
