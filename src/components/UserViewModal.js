import { Button, ListGroup, Modal } from "react-bootstrap"

function UserViewModal(props) {
  const { show, setShow, user } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {user.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {user.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Avatar:</strong>{" "}
            <img src={user.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} alt="" />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Gender:</strong> {user.gender}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Mobile Number:</strong> {user.mobileNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Another Mobile Number:</strong> {user.anotherMobileNumber}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Rol:</strong> {user.role}
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

export default UserViewModal
