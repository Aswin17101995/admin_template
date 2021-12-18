import react from "react";
import { useParams } from "react-router-dom";
function EditUser(props){ 
    let { id } = useParams();
   
    return <>
        <h1>
           
            Edit user page {id}
        </h1>
    </>
}

export default EditUser