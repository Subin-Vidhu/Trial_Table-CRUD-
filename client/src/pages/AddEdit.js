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

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Please provide value to into each field");
    } else {
      if (!id) {
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
        toast.success("Contact Added Successfully");
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            name,
            email,
            phone,
          })
          .then(() => {
            setState({ name: "", email: "", phone: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Updated Successfully");
      }

      setTimeout(() => history.push("/"), 500);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ minHeight: "1302.12px" }}>
        <section className="content">
          <div className="container-fluid">
            <div className="modal fade" id="modal-lg">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Add User</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="username">User Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            value={name || ""}
                            placeholder="Enter user_name"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={email || ""}
                            placeholder="Enter email"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">phone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            value={phone || ""}
                            placeholder="Enter phone"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer justify-content-between">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <div>
                      {(() => {
                        if (
                          state.name === "" ||
                          !(state.name === state.phone)
                        ) {
                          return (
                            <div>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled="true"
                              >
                                <input
                                  type="submit"
                                  value={id ? "Update" : "Save"}
                                />
                              </button>
                            </div>
                          );
                        } else {
                          return (
                            <div>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={handleSubmit}
                              >
                                <input
                                  type="submit"
                                  value={id ? "Update" : "Save"}
                                />
                              </button>
                            </div>
                          );
                        }
                      })()}
                      <Link to="/">
                        <input type="button" value="Go Back" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddEdit;
