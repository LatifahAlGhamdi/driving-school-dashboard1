import { Button, ListGroup, Modal } from "react-bootstrap"

function InspectorViewModal(props) {
  const { show, setShow, inspector } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Inspector</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {inspector.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {inspector.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {inspector.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Avatar:</strong>{" "}
            <img src={inspector.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} alt="" />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Gender:</strong> {inspector.gender}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Mobile Number:</strong> {inspector.mobileNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Another Mobile Number:</strong> {inspector.anotherMobileNumber}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Rol:</strong> {inspector.role}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InspectorViewModal
