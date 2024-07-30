import React from 'react'
import { useParams } from 'react-router-dom'
useParams
const Payroll = () => {
    const {pID}=useParams()
  return (
    <h1>Payroll/{pID}</h1>
  )
}

export default Payroll
