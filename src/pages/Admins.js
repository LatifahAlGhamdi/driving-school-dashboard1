import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import AddIcon from "@mui/icons-material/Add"
import { Button } from "react-bootstrap"
import AdminAddModal from "../components/AdminAddModal"
import AdminsCell from "../components/AdminsCell"

function Admins() {
  const { admins } = useContext(DrivingSchoolContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Admins</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Admin
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>First Name</th>
            <th style={{ width: "9%" }}>Last Name</th>
            <th style={{ width: "9%" }}>Email</th>
            <th style={{ width: "9%" }}>Avatar</th>
            <th style={{ width: "9%" }}>gender</th>
            <th style={{ width: "18%" }}>mobileNumber</th>
            <th style={{ width: "9%" }}>Rol</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <AdminsCell key={admin._id} admin={admin} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Admins
