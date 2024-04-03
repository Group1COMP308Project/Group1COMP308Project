// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AuthendicationMicroFrondend from './components/AuthendicationMicroFrondend';
// import NurseDashboard from './components/NurseDashboard';
// import PatientDashboard from './components/PatientDashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<AuthendicationMicroFrondend />} />
//         <Route path="/nurse-dashboard" element={<NurseDashboard />} />
//         <Route path="/patient-dashboard" element={<PatientDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
