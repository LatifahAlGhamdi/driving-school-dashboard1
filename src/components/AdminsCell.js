import { useState } from "react"
import { Button } from "react-bootstrap"
import AdminViewModal from "./AdminViewModal"

function AdminsCell(props) {
  const { admin } = props
  const [viewShow, setViewShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{admin._id}</td>
      <td>{admin.firstName}</td>
      <td>{admin.lastName}</td>
      <td>{admin.email}</td>
      <img src={admin.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt="" />
      <td>{admin.gender}</td>
      <td>{admin.mobileNumber}</td>
      <td>{admin.role}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
      </td>
      <AdminViewModal show={viewShow} setShow={setViewShow} admin={admin} />
    </tr>
  )
}

export default AdminsCell
