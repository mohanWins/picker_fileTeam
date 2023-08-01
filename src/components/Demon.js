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

  const [first, setfirst] = useState([]);
  const [data, setdata] = useState([]);

  const Swal = require("sweetalert2");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,audio/*,video/*",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
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
    <img
      key={file.name}
      src={file.preview}
      alt="img"
      style={{ width: "200px", height: "200px", borderRadius: "10px" }}
    />
  ));
  // console.log(images)

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

  // images.map((t)=>t.key.split(".").pop())

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "grid", placeItems: "center" }}>
          <div className="drpArea" {...getRootProps()}>
            <input {...getInputProps()}></input>

            <div className="text">
              {" "}
              <AiOutlineCloudUpload size={60} />
              drag n drop here
            </div>
          </div>

          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id </th>
                  <th scope="col">File</th>
                  <th scope="col">size</th>
                  <th scope="col">action</th>
                </tr>
              </thead>

              {u.map((file, index) => (
                <>
                  <tbody>
                    <tr>
                      <th scope="row">{index === 0 ? 1 : index + 1}</th>
                      <td>{file.path}</td>
                      <td>{file.size / 1024} kb</td>
                      <td onClick={() => deleteTask(index)}>
                        <RxCross2 style={{ color: "red" }} size={30} />
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Drag n Drop</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <AiOutlinePlus
              style={{ cursor: "pointer" }}
              size={40}
              onClick={handleShow}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="mt-5  d-flex justify-content-center   "></div>
    </>
  );
}

export default Demon;
