import react from "react";
import { useParams } from "react-router-dom";
function Profile(){
    let { id }=useParams();
    return <>
        Hello {id}
    </>
}

export default Profile