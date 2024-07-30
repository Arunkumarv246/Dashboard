
import { useParams } from 'react-router-dom'
useParams
const Performance = () => {
    const {pcID}=useParams()
  return (
    <h1>Performance/{pcID}</h1>
  )
}

export default Performance