import { useParams } from "react-router-dom";

const Report= () => {
 const { rID } = useParams();
  return <h1>Build /{rID} </h1>;
};

export default Report;