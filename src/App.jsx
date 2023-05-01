import React, { useEffect, useState } from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isChecked: true,
  });

  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
  }

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="container rounded shadow-sm p-4 mt-5">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out for newsletters"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Form is successfully submitted ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name - {formData.name}</p>
          <p>Email - {formData.email}</p>
          <p>Password - {formData.password}</p>
          <p>Send NewsLetter - {formData.isChecked ? "Yes" : "No"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
