import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Patient from './pages/Patient'
import Doctor from './pages/Doctor'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="patient" element={<Patient />} />
        <Route path="doctor" element={<Doctor />} />
      </Route>
    </Routes>
  )
}

export default App

