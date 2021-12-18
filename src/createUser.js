import react from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
function CUser(){
    let data =useContext(UserContext);
    console.log(data)
    return <>
        <div><h1>Hello user create</h1></div>
        <div class="container">
            <div className="row">
                <input className="form-control" type="text" name="name" placeholder="Name"></input>
            </div>
            <div className="row">
                <input className="form-control" type="number" name="age" placeholder="Age"></input>
            </div>
        </div>
        <button className="btn btn-primary" onClick={()=>{
            data.setuser([...data.userlist,{name:"person1 ",age:"23"}])
        }}> Submit</button>
    </>
}

export default CUser;