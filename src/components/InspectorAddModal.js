import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function InspectorAddModal(props) {
  const { show, setShow } = props
  const { addInspector } = useContext(DrivingSchoolContext)
  const gender = [
    "male",
    "female",
  ]
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addInspector}>
        <Modal.Header closeButton>
          <Modal.Title>Add Inspector</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="file" accept="image/jpeg, image/png" name="avatar" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Gender
            </Form.Label>
            <Col md="8">
            <Form.Select name="gender">
              {gender.map(type=>(
                <option value={type}>{type}</option>
              ))}


            </Form.Select>
              {/* <Form.Control type="text" name="gender" required /> */}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Mobile Number
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="mobileNumber" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Another Mobile Number
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="anotherMobileNumber" />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Inspector
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default InspectorAddModal
