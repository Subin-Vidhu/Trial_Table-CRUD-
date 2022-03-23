import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (userid) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`http://localhost:5000/api/remove/${userid}`);
      //console.log(userid);
      toast.success("Contact Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ minHeight: "1302.12px" }}>
        <section className="content">
          <div className="container-fluid">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card-body">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Link to="/addContact">
                        <button
                          type="button"
                          class="d-grid gap-2 d-md-flex justify-content-md-end"
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#modal-lg"
                        >
                          Add Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <b>DDC Employees List</b>
                    </h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Action</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => {
                          return (
                            <tr key={item.user_id}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>
                                {/* Edit */}
                                <Link to={`/update/${item.userid}`}>
                                  <button className="btn btn-edit">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-pencil-square"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </Link>
                              </td>
                              <td>
                                {/* Delete */}
                                <button
                                  className="btn btn-delete"
                                  onClick={() => deleteContact(item.userid)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-trash"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path
                                      fill-rule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                    ></path>
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

//   <div style={{ marginTop: "150px" }}>
//     <Link to="/addContact">
//       <button className="btn btn-contact">Add Contact</button>
//     </Link>
//     <table class="styled-table">
//       <thead>
//         <tr>
//           <th style={{ textAlign: "center" }}>No.</th>
//           <th style={{ textAlign: "center" }}>Name</th>
//           <th style={{ textAlign: "center" }}>Email</th>
//           <th style={{ textAlign: "center" }}>Phone</th>
//           <th style={{ textAlign: "center" }}>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => {
//           return (
//             <tr key={item.userid}>
//               <th scope="row">{index + 1}</th>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>
//                 <Link to={`/update/${item.userid}`}>
//                   <button className="btn btn-edit">Edit</button>
//                 </Link>
//                 <button
//                   className="btn btn-delete"
//                   onClick={() => deleteContact(item.userid)}
//                 >
//                   Delete
//                 </button>
//                 <Link to={`/view/${item.userid}`}>
//                   <button className="btn btn-view">View</button>
//                 </Link>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   </div>
// );
// };

export default Home;
