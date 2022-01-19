import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Admins from "./pages/Admins"
import AllCoaches from "./pages/AllCoaches"
import Coaches from "./pages/Coaches"
import Inspectors from "./pages/Inspectors"
import Login from "./pages/Login"
import LoginInspector from "./pages/LoginInspector"
import Users from "./pages/Users"
import DrivingSchoolContext from "./utils/DrivingSchoolContext"
import firebase from "./utils/firebase"

function App() {
  const [admins, setAdmins] = useState([])
  const [users, setUsers] = useState([])
  const [inspectors, setInspectors] = useState([])
  const [allcoaches, setAllCoaches] = useState([])
  const [coaches, setCoaches] = useState([])
  const [profile, setProfile] = useState([])
  const navigate = useNavigate()

  const getProfile = async () => {
    const response = await axios.get("https://api-driving-school.herokuapp.com/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    getAdmins()
    getUsers()
    getCoaches()
    getInspectors()
    getAllCoaches()
    setProfile(response.data)
    console.log(response.data)
  }

  const getAdmins = async () => {
    const response = await axios.get("https://api-driving-school.herokuapp.com/api/auth/admins", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setAdmins(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("https://api-driving-school.herokuapp.com/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setUsers(response.data)
  }

  const getInspectors = async () => {
    const response = await axios.get("https://api-driving-school.herokuapp.com/api/inspectors", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setInspectors(response.data)
  }
  const getAllCoaches = async () => {
    const response = await axios.get("https://api-driving-school.herokuapp.com/api/coaches/all-coaches", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setAllCoaches(response.data)
  }

  const getCoaches = async () => {
    const response = await axios.get("https://api-driving-school.herokuapp.com/api/coaches/interview", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setCoaches(response.data)
  }

  useEffect(() => {
    getProfile()
    getAdmins()
    getUsers()
    getInspectors()
    getAllCoaches()
    getCoaches()
  }, [])

  const deleteUser = async userId => {
    try {
      await axios.delete(`https://api-driving-school.herokuapp.com/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteInspector = async inspectorId => {
    try {
      await axios.delete(`https://api-driving-school.herokuapp.com/api/inspectors/${inspectorId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("inspector deleted")
      getInspectors()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteCoach = async coachId => {
    try {
      await axios.delete(`https://api-driving-school.herokuapp.com/api/coaches/${coachId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("coache deleted")
      getCoaches()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://api-driving-school.herokuapp.com/api/auth/login/admin", adminBody)
      localStorage.tokenDashboard = response.data
      toast.success("login success")
      getProfile()
      navigate("/admins")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const loginInspector = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const inspectorBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://api-driving-school.herokuapp.com/api/auth/login/inspector", inspectorBody)
      localStorage.tokenDashboard = response.data
      toast.success("login success")
      getProfile()
      navigate("/coaches")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const image = form.elements.avatar.files[0];
      let imageUrl
      if (image) {
      const imageRef = firebase
        .storage()
        .ref("images").child(`${image.lastModified}-${image.name}-${image.size}`);
      await imageRef.put(image);
       imageUrl = await imageRef.getDownloadURL();
      }
      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: imageUrl || undefined,
        gender: form.elements.gender.value,
        mobileNumber: form.elements.mobileNumber.value,
        anotherMobileNumber: form.elements.anotherMobileNumber.value,
      }
      await axios.post(`https://api-driving-school.herokuapp.com/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addInspector = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const image = form.elements.avatar.files[0];
      let imageUrl
      if (image) {
      const imageRef = firebase
        .storage()
        .ref("images").child(`${image.lastModified}-${image.name}-${image.size}`);
      await imageRef.put(image);
       imageUrl = await imageRef.getDownloadURL();
      }

      const inspectorBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: imageUrl || undefined,
        gender: form.elements.gender.value,
        mobileNumber: form.elements.mobileNumber.value,
        anotherMobileNumber: form.elements.anotherMobileNumber.value,
      }
      await axios.post(`https://api-driving-school.herokuapp.com/api/inspectors/add-inspector`, inspectorBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getInspectors()
      toast.success("add inspector success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editInterviewVerified = async (coachId, interviewVerified) => {
    try {
      const interviewVerifiedBody = {
        interviewVerified,
      }
      await axios.put(`https://api-driving-school.herokuapp.com/api/coaches/${coachId}`, interviewVerifiedBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getCoaches()
      toast.success("edit interview Verified success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addInterview = async (e, coachId) => {
    e.preventDefault()
    try {
      const form = e.target

      const interviewBody = {
        date: form.elements.date.value,
      }
      await axios.post(`https://api-driving-school.herokuapp.com/api/coaches/${coachId}/interview`, interviewBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getCoaches()
      toast.success("add interview success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboard")
    setCoaches([])
  }
  const store = {
    profile,
    admins,
    users,
    deleteUser,
    inspectors,
    deleteInspector,
    allcoaches,
    deleteCoach,
    login,
    addAdmin,
    addInspector,
    loginInspector,
    coaches,
    editInterviewVerified,
    addInterview,
    logout,
  }

  return (
    <DrivingSchoolContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route
              path="/admins"
              element={profile.role === "Admin" && localStorage.tokenDashboard ? <Admins /> : <Login />}
            />
            <Route
              path="/trainees"
              element={profile.role === "Admin" && localStorage.tokenDashboard ? <Users /> : <Login />}
            />
            <Route
              path="/inspectors"
              element={profile.role === "Admin" && localStorage.tokenDashboard ? <Inspectors /> : <Login />}
            />
            <Route
              path="/allCoaches"
              element={profile.role === "Admin" && localStorage.tokenDashboard ? <AllCoaches /> : <Login />}
            />
            <Route path="/coaches" element={localStorage.tokenDashboard ? <Coaches /> : <LoginInspector />} />
            <Route path="/loginInspector" element={<LoginInspector />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </DrivingSchoolContext.Provider>
  )
}

export default App
