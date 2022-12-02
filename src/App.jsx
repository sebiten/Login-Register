import { Login } from "./components/Login/Login"
import { NavBar } from "./components/Navbar/NavBar"
import { Register } from "./components/Register/Register"
import styled from 'styled-components'


function App() {

  return (
    <Container>
      {/* <Login /> */}
      <Register />
      <NavBar />
    </Container>
  )
}

export const Container = styled.div`
  width: 500px;
  height: 100%;
  margin: 0 auto;
`

export default App
