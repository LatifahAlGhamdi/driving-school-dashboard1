import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function AllCoachDeleteModal(props) {
  const { deleteCoach } = useContext(DrivingSchoolContext)
  const { show, setShow, coachId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Coach</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Coach ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCoach(coachId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AllCoachDeleteModal
