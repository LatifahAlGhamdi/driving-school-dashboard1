import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import CoachViewModal from "./CoachViewModal"
import InspectorAddInterviewModal from "./InspectorAddInterviewModal"

function CoachesCell(props) {
  const { editInterviewVerified } = useContext(DrivingSchoolContext)
  const { coach } = props
  const [viewShow, setViewShow] = useState(false)
  const [addShow, setAddShow] = useState(false)
  const date = new Date(coach.dateOfBirth)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{coach._id}</td>
      <td>{coach.firstName}</td>
      <td>{coach.lastName}</td>
      <td>{coach.email}</td>
      <img src={coach.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt="" />
      <td>{coach.gender}</td>
      <td>{date.toLocaleDateString()}</td>
      <td>{coach.role}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="primary" className="me-2" onClick={() => setAddShow(true)}>
          Add Interview
        </Button>
        <Button variant="outline-success" className="me-2" onClick={() => editInterviewVerified(coach._id, true)}>
          Verify
        </Button>
        <Button variant="outline-danger" className="me-2" onClick={() => editInterviewVerified(coach._id, false)}>
          Refuse
        </Button>
      </td>
      <CoachViewModal show={viewShow} setShow={setViewShow} coach={coach} />
      <InspectorAddInterviewModal show={addShow} setShow={setAddShow} coachId={coach._id} />
    </tr>
  )
}

export default CoachesCell
