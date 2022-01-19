import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function InspectorAddInterviewModal(props) {
  const { show, setShow, coachId } = props
  const { addInterview } = useContext(DrivingSchoolContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => addInterview(e, coachId)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Interview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Date
            </Form.Label>
            <Col md="8">
              <Form.Control name="date" type="datetime-local"  required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Interview
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default InspectorAddInterviewModal
