import { useContext } from "react"
import { Table } from "react-bootstrap"
import AllCoachesCell from "../components/AllCoachesCell"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function AllCoaches() {
  const { allcoaches } = useContext(DrivingSchoolContext)

  return (
    <>
      <h1 style={{ marginTop: 10 }}>All Coaches</h1>
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
          {allcoaches.map(coach => (
            <AllCoachesCell key={coach._id} coach={coach} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AllCoaches
