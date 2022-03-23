    <div style={{ marginTop: "150px" }}>
      <Link to="/addContact">
        <button className="btn btn-contact">Add Contact</button>
      </Link>
      <table class="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.userid}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={`/update/${item.userid}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.userid)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.userid}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};



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
                            id="username"
                            value={name}
                            placeholder="Enter user_name"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="exampleInputPassword1"
                            value={password}
                            placeholder="Password"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputConfirmPassword1">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password1"
                            id="exampleInputConfirmPassword1"
                            value={password1}
                            placeholder="Re-enter Password"
                            onChange={handleInputChange}
                            onkeyup="myFunction()"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="UserStaffName">User Staff Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="userstaffname"
                            id="UserStaffName"
                            value={userstaffname}
                            placeholder="Enter user_staff_name"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="BranchName">BranchName</label>
                          <input
                            type="text"
                            className="form-control"
                            name="branchName"
                            id="BranchName"
                            value={branchName}
                            placeholder="Enter BranchName"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="hidden"
                            id="custId"
                            name="custId"
                            value="3487"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="hidden"
                            id="custId"
                            name="custId"
                            value="3487"
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
                          state.password === "" ||
                          !(state.password === state.password1)
                        ) {
                          return (
                            <div>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled="true"
                              >
                                Save{" "}
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
                                Save{" "}
                              </button>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </div>
    </div>