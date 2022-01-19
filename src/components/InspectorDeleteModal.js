import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function InspectorDeleteModal(props) {
  const { deleteInspector } = useContext(DrivingSchoolContext)
  const { show, setShow, inspectorId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Inspector</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Inspector ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteInspector(inspectorId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InspectorDeleteModal
