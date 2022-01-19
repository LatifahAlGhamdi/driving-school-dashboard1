import { useState } from "react"
import { Button } from "react-bootstrap"
import AllCoachDeleteModal from "./AllCoachDeleteModal"
import AllCoachViewModal from "./AllCoachViewModal"

function AllCoachesCell(props) {
  const { coach } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
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
        {coach.role === "Coach" ? (
          <Button variant="danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>
        ) : null}
      </td>
      <AllCoachViewModal show={viewShow} setShow={setViewShow} coach={coach} />
      <AllCoachDeleteModal show={deleteShow} setShow={setDeleteShow} coachId={coach._id} />
    </tr>
  )
}

export default AllCoachesCell
