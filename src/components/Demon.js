import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./Demon.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Demon() {
  //Modal start

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Modal end

  //format start

  const [document, setdocument] = useState(false);

  //format end

  const [first, setfirst] = useState([]);
  const [data, setdata] = useState([]);

  const Swal = require("sweetalert2");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,audio/*,video/*",
    onDrop: (acceptedFiles) => {
      setfirst(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
 
    },
  });

  useEffect(() => {
    setdata([...data, first]);
  }, [first]);

  const u = data.flatMap((innerArray) => innerArray);
  //   console.log(u.map((t)=>t.preview))
  const images = u.map((file) => (
    <img className="image-style" key={file.name} src={file.preview} alt="img" />
  ));
  console.log(images);

  function deleteTask(path) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const u = data.flatMap((innerArray) => innerArray);

        u.splice(
          u.findIndex((e, i) => i === path),
          1
        );

        setdata(u);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  function HandleAdd() {
    debugger;
    setdocument(true);
    handleClose();
  }

  const tyu = u.map((file) => file.type.split("/").pop());

  const tyuObject = tyu.reduce((obj, value, index) => {
    obj[index] = value;
    return obj;
  }, {});

  console.log(tyuObject);

  console.log(tyuObject);

  console.log("kjhresgfbxncmgvjhgfdbhtrdfg", u);
 
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-style">
          <div className="drpArea" {...getRootProps()}>
            <input {...getInputProps()}></input>

            <div className="text">
              {" "}
              <AiOutlineCloudUpload size={60} />
              drag n drop here
            </div>
          </div>
          <br></br>
          <div>
            <table className="table">
              {/* <thead>
                <tr>
                  <th scope="col">icon </th>
                  <th scope="col">File</th>
                  <th scope="col">size</th>
                  <th scope="col">action</th>
                </tr>
              </thead> */}

              {u.map((file, index) => {
                return tyuObject[index] === "pdf" ? (
                  <>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="icon-style"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
                            alt="img"
                          />
                        </td>
                        <td>{file.path}</td>
                        {/* <td>{Number(file.size / 1024).toFixed(2)} </td> */}
                        <td>{convertSize(file.size, { accuracy: 2 })} </td>
                        <td onClick={() => deleteTask(index)}>
                          <RxCross2 className="delete-style" size={30} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                ) : tyuObject[index] === "webp"? 
                (
                  <>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="icon-style"
                            src={file.preview}
                            alt="img"
                          />
                        </td>
                        <td>{file.path}</td>
                        {/* <td>{(file.size / 1024).toFixed(2)} kb</td> */}
                        <td>{convertSize(file.size, { accuracy: 2 })}</td>
                        <td onClick={() => deleteTask(index)}>
                          <RxCross2 style={{ color: "red" }} size={30} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                )
                :tyuObject[index] === "mpeg"?



                (
                  <>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://i1.sndcdn.com/avatars-000312484264-af28qp-t500x500.jpg"
                            alt="img"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "5px",
                              marginLeft: "5px",
                            }}
                          />
                        </td>
                        <td>{file.path}</td>
                        {/* <td>{(file.size / 1024).toFixed(2)} kb</td> */}
                        <td>{convertSize(file.size, { accuracy: 2 })}</td>
                        <td onClick={() => deleteTask(index)}>
                          <RxCross2 style={{ color: "red" }} size={30} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                ):tyuObject[index] === "mp4"?
                (
                  <>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://img.freepik.com/free-vector/flat-clapperboard-icon_1063-38.jpg"
                            alt="img"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "5px",
                              marginLeft: "5px",
                            }}
                          />
                        </td>
                        <td>{file.path}</td>
                        {/* <td>{(file.size / 1024).toFixed(2)} kb</td> */}
                        <td>{convertSize(file.size, { accuracy: 2 })}</td>
                        <td onClick={() => deleteTask(index)}>
                          <RxCross2 className="delete-style" size={30} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                ):console.log("jghfcvhj")



              })}
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={HandleAdd}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar className="bg-body-tertiary   fixed-top">
        <Container>
          <Navbar.Brand  className="display-2   fs-1   text-success"    >Drag n Drop</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <AiOutlinePlus
              className="plus-icon   text-primary "
              size={40}
            
              onClick={handleShow}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* {document ? images : console.log("jhgfdx")} */}

      {document
        ? u.map((file, index) => {
            return tyuObject[index] === "pdf" ?
            
            
            (
              <div className="card mb-3  mx-5 shadow p-3 mb-5 bg-body rounded mx-auto card-sytle">
                <div className="row g-3 ">
                  <div className="col-md-4">
                    <iframe className="image-style"
                      src={file.preview}
                      title="mohan"
                    ></iframe>
                  </div>
                  <div className="col-md-8 ">
                    <div className="card-body">
                      <h3 class="card-title text-secondary">File Details</h3>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File</h5>
                        {file.path}
                      </p>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File Size</h5>
                        {convertSize(file.size, { accuracy: 2 })} 
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            ) 
            
            : tyuObject[index] === "webp"? 
            (
              <div className="card mb-3  mx-5 shadow p-3 mb-5 bg-body rounded mx-auto card-sytle">
                <div className="row g-3 ">
                  <div className="col-md-4 "    style={{ display:'grid' ,placeItems:'center'    }}  >
                    <img className="image-style"
                      src={file.preview}
                      alt="img"
                    ></img>




                    
                  </div>
                  <div className="col-md-8 ">
                    <div className="card-body">
                      <h3 class="card-title text-secondary">File Details</h3>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File</h5>
                        {file.path}
                      </p>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File Size</h5>
                        {convertSize(file.size, { accuracy: 2 })} 
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            ) 


            :tyuObject[index] === "mpeg"?



            (
          




<div className="card mb-3  mx-5 shadow p-3 mb-5 bg-body rounded mx-auto card-sytle">
                <div className="row g-3 ">
                  <div className="col-md-4    rdx      "  
      

        >
                    <audio className="image-style"
                      src={file.preview}
                 
                      controls
                    ></audio>
                  </div>
                  <div className="col-md-8 ">
                    <div className="card-body">
                      <h3 class="card-title text-secondary">File Details</h3>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File</h5>
                        {file.path}
                      </p>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File Size</h5>
                        {convertSize(file.size, { accuracy: 2 })} 
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>






     
            ) 
            
            
            
            
            :tyuObject[index] === "mp4"?
            (
              <div className="card mb-3  mx-5 shadow p-3 mb-5 bg-body rounded mx-auto card-sytle">
                <div className="row g-3 ">
                  <div className="col-md-4">
                    <img
                      className="image-style"
                      src={file.preview}
                      alt=""
                    ></img>
                  </div>
                  <div className="col-md-8 ">
                    <div className="card-body">
                      <h3 class="card-title text-secondary">File Details</h3>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File</h5>
                        {file.path}
                      </p>
                      <hr></hr>
                      <p className="card-text">
                        <h5 className="text-danger">File Size</h5>
                        {convertSize(file.size, { accuracy: 2 })} 
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            ) 
            
            :console.log("jghfcvhj")
          })
        : console.log("kjkhgf")}
    </>
  );
}

export default Demon;

