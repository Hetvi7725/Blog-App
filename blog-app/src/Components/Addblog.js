import axios  from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function Addblog(){

    let [user , setuser] = useState({});

    let getinputvalue=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        setuser({...user , [name]:value});
    }

    let submitdata=(e)=>{
        e.preventDefault();
        console.log(user);
        axios.post("http://localhost:3000/blog",user)
        .then((res)=>{
            console.log(res.data);
            setuser({});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="formdata">
            <h1 style={{ marginTop:"50px"}}>Add Blog</h1>
                    <form method="post" onSubmit={(e)=>submitdata(e)}>
                            <table align="center">
                                    <tr>
                                        <td>Enter Title : </td>
                                        <td><input type="text" name="title" placeholder="Enter Your Title..." value={user.title?user.title:""}  onChange={(e)=>getinputvalue(e)}/></td>
                                    </tr><br/>
                                    <tr>
                                        <td>Enter Blogger Name : </td>
                                        <td><input type="text" name="name" placeholder="Enter Your Blogger Name..." value={user.name?user.name:""}  onChange={(e)=>getinputvalue(e)}/></td>
                                    </tr><br/>
                                    <tr>
                                        <td>Enter Description : </td>
                                        <td><input type="text" name="description" placeholder="Enter Your Description..." value={user.description?user.description:""}  onChange={(e)=>getinputvalue(e)}/></td>
                                    </tr><br/>
                                    <tr>
                                        <td>Enter Image Link : </td>
                                        <td><input type="text" name="image" placeholder="Enter Image Link..." value={user.image?user.image:""}  onChange={(e)=>getinputvalue(e)}/></td>
                                    </tr><br/>
                            </table>                           
                            <Link to="/blog"><input type="submit" name="submit" value="Add" className="btn1"/></Link>
                    </form>
        </div>                           
    )
}

export default Addblog;