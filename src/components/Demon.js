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



export const Modal1 = ({ src, alt,  onClose }) => {
  return (
    <div className="modalImage">
      <span className="close1" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content1" src={src} alt={alt} />
    </div>
  )
}


function Demon() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => setIsOpen(true);

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
      //   console.log(acceptedFiles);
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
                        <td>{Number(file.size / 1024).toFixed(2)} kb</td>
                        <td onClick={() => deleteTask(index)}>
                          <RxCross2 className="delete-style" size={30} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                ) : (
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
                        <td>{Number(file.size / 1024).toFixed(2)} kb</td>
                        <td onClick={() => deleteTask(index)}>
                          <RxCross2 className="delete-style" size={30} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
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
          <Navbar.Brand href="#home">Drag n Drop</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <AiOutlinePlus
              className="plus-icon"
              size={40}
              onClick={handleShow}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* {document ? images : console.log("jhgfdx")} */}

      {document
        ? u.map((file, index) => {
            return tyuObject[index] === "pdf" ? (
              <div className="card mb-3  mx-5 shadow p-3 mb-5 bg-body rounded mx-auto card-sytle">
                <div className="row g-3 ">
                  <div className="col-md-4">
                    <img
                      className="image-style"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
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
                        {Number(file.size / 1024).toFixed(2)} kb
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card mb-3  mx-5 shadow p-3 mb-5 bg-body rounded mx-auto card-sytle">
                <div className="row g-3 ">
                  <div className="col-md-4 container">
                    <img
                      className="image-style"
                      onClick={showModal}
                      src={file.preview}
                      alt=""
                    />
                    {isOpen && (
                      <Modal1
                        src={file.preview}
                        alt=""
                        onClose={() => setIsOpen(false)}
                      />
                    )}
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
                        {Number(file.size / 1024).toFixed(2)} kb
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : console.log("kjkhgf")}
    </>
  );
}

export default Demon;
