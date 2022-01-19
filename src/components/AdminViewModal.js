import { Button, ListGroup, Modal } from "react-bootstrap"

function AdminViewModal(props) {
  const { show, setShow, admin } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Admin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {admin.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {admin.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {admin.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Avatar:</strong>{" "}
            <img src={admin.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} alt="" />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Gender:</strong> {admin.gender}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Mobile Number:</strong> {admin.mobileNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Another Mobile Number:</strong> {admin.anotherMobileNumber}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Rol:</strong> {admin.role}
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

export default AdminViewModal
