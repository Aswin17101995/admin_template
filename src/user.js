import react from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";
import { useContext } from "react";
function User(){
    let data =useContext(UserContext);
    let datali =data.userlist
    return (
      <>
        <div><Link to="/cuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i class="fas fa-download fa-sm text-white-50"></i> Create User</Link></div>
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                <tr><td><Link to="/profile/Aswin">Aswin</Link></td>
                <td>26</td>
                <td><div><Link to="/edituser/Aswin" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i class="fas fa-download fa-sm text-white-50"></i> Edit User</Link></div>
        </td>
                </tr>
               {
                   datali.map((item)=>{
                       return <tr>
                           <td>{item.name}</td>
                           <td>{item.age}</td>
                           <td><Link to="/edituser/Aswin" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i class="fas fa-download fa-sm text-white-50"></i> Edit User</Link></td>
                       </tr>
                   })
               }
            </table>
        </div>
      </>
    );
}

export default User