import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import InspectorsCell from "../components/InspectorsCell"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import AddIcon from "@mui/icons-material/Add"
import { Button } from "react-bootstrap"
import InspectorAddModal from "../components/InspectorAddModal"

function Inspectors() {
  const { inspectors } = useContext(DrivingSchoolContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Inspectors</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Inspector
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
            <th style={{ width: "12%" }}>mobileNumber</th>
            <th style={{ width: "9%" }}>Rol</th>
          </tr>
        </thead>
        <tbody>
          {inspectors.map(inspector => (
            <InspectorsCell key={inspector._id} inspector={inspector} />
          ))}
        </tbody>
      </Table>
      <InspectorAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Inspectors
