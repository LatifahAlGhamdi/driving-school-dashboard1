import { Button, ListGroup, Modal } from "react-bootstrap"

function CoachViewModal(props) {
  const { show, setShow, coach } = props
  const date = new Date(coach?.interview?.date)
  const dateBirth = new Date(coach.dateOfBirth)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Coach</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {coach.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {coach.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {coach.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Avatar:</strong>{" "}
            <img src={coach.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} alt="" />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Gender:</strong> {coach.gender}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Date Of Birth:</strong> {dateBirth.toLocaleDateString()}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>National ID Or IqamaNumber:</strong> {coach.nationalIDOrIqamaNumber}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Mobile Number:</strong> {coach.mobileNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Another Mobile Number:</strong> {coach.anotherMobileNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Experience:</strong> {coach.experience}
          </ListGroup.Item>
          <ListGroup.Item>
          <a href={coach.curriculumVitae} target="_blank" ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cv-294-1108422.png" alt="" style={{ width:"40px", marginRight:"5px", marginBottom:"15px" }}/></a>
          </ListGroup.Item>
          {coach.interview ? (
            <ListGroup.Item>
              <strong>Interview:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <h6>Date</h6>
                  {date.toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          ) : null}

          <ListGroup.Item>
            <strong>Interview Verified:</strong> {coach.interviewVerified ? "true" : "false"}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Rol:</strong> {coach.role}
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

export default CoachViewModal
