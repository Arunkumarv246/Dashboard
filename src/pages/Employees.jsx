import React from 'react'
import { useParams } from 'react-router-dom'
const Employees = () => {

    const {eID} = useParams()
  return (
     
     <h1>Employees/{eID}</h1>
   
  )
}

export default Employees
