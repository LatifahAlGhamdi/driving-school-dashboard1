import { useContext } from "react"
import { Table } from "react-bootstrap"
import CoachesCell from "../components/CoachesCell"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function Coaches() {
  const { coaches } = useContext(DrivingSchoolContext)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Coaches</h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>First Name</th>
            <th style={{ width: "9%" }}>Last Name</th>
            <th style={{ width: "9%" }}>Email</th>
            <th style={{ width: "9%" }}>Avatar</th>
            <th style={{ width: "9%" }}>Gender</th>
            <th style={{ width: "18%" }}>Date Of Birth</th>
            <th style={{ width: "9%" }}>Rol</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map(coach => (
            <CoachesCell key={coach._id} coach={coach} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Coaches
