import React from 'react';
import {Routes,Route} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import Promotion from './pages/Promotion';
import Calender from './pages/Calender';
import Attendance from './pages/Attendance';
import Employees from './pages/Employees';
import Payroll from './pages/Payroll';
import Report from './pages/Report';
import Performance from './pages/Performance';
import Sample from './pages/Sample';
// import Attendance from './pages/Attendance';



const App = () => {
  return (
    
   <RootLayout>
    <Sample/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/attendance" element={<Attendance/>} />
      <Route path="/policies" element={<Policies/>} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/calender" element={<Calender/>} />
      <Route path="/employees/:eID" element={<Employees/>}/>
      <Route path="/payroll/:pID" element={<Payroll/>}/>
      <Route path="/report/:rID" element={<Report/>}/>
      <Route path="/performance/:pcID" element={<Performance/>}/>
    
    </Routes>
   
   </RootLayout>

  )
}

export default App
