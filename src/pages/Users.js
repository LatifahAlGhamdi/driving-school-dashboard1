import { useContext } from "react"
import { Table } from "react-bootstrap"
import UsersCell from "../components/UsersCell"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function Users() {
  const { users } = useContext(DrivingSchoolContext)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Trainees</h1>
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
          {users.map(user => (
            <UsersCell key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Users
