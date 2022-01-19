import { useState } from "react"
import { Button } from "react-bootstrap"
import InspectorDeleteModal from "./InspectorDeleteModal"
import InspectorViewModal from "./InspectorViewModal"

function InspectorsCell(props) {
  const { inspector } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{inspector._id}</td>
      <td>{inspector.firstName}</td>
      <td>{inspector.lastName}</td>
      <td>{inspector.email}</td>
      <img src={inspector.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt="" />
      <td>{inspector.gender}</td>
      <td>{inspector.mobileNumber}</td>
      <td>{inspector.role}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        {inspector.role === "Inspector" ? (
          <Button variant="danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>
        ) : null}
      </td>
      <InspectorViewModal show={viewShow} setShow={setViewShow} inspector={inspector} />
      <InspectorDeleteModal show={deleteShow} setShow={setDeleteShow} inspectorId={inspector._id} />
    </tr>
  )
}

export default InspectorsCell
