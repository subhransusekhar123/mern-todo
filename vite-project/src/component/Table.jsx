import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Update from "./Update";

const Table = ({ update }) => {
  const [data, setData] = useState([]);
  const [updata, setUpdata] = useState({
    work: "",
    name: "",
  });
  const [render,setRender] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      //   debugger
      await axios.get("http://localhost:5000").then((res) => {
        console.log(res);
        setData(res.data); //pass
      });

      console.log(data);
    })();
  }, [render]);

  //delete handler
  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`).then((res) => {
      console.log(res);
      setRender(res)
    });
  };

  const updateHandler = async (id) => {
    await axios.get(`http://localhost:5000/${id}`).then((res) => {
      console.log(res);
      setUpdata(res.data);
    });
    console.log(updata);

    // navigate("/update");
  };

  const changeHandler = (e) => {
    setUpdata({
      ...updata,
      [e.target.name]: e.target.value,
    });

    console.log(updata);
  };

  const sendData = async () => {
    console.log("check mik testing 123", updata);
    await axios
      .put(`http://localhost:5000/${updata._id}`, updata)
      .then((res) => setRender(res))
      .catch((err) => console.log(err));
      

  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">work</th>
            <th scope="col">update</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{ele.work}</td>
                <td>{ele.name}</td>
                <td>
                  <div
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => updateHandler(ele._id)}
                  >
                    update
                  </div>
                </td>
                <td>
                  <div
                    className="btn btn-warning"
                    onClick={() => deleteHandler(ele._id)}
                  >
                    delete
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        class="btn btn-primary"
       
      >
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id=""
                  value={updata.name}
                  placeholder="insert name"
                  onChange={changeHandler}
                />
              </div>

              <input
                type="text"
                name="work"
                id=""
                value={updata.work}
                placeholder="your work"
                onChange={changeHandler}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={sendData}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
