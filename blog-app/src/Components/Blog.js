import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";


function Blog(){

    let [post, setPost]=useState([]);
    let [categary, setcategary] = useState([]);
    let navigate = useNavigate();


    useEffect(()=>{
        

        let blogdata=()=>{
          axios.get("http://localhost:3000/blog")
                .then((res)=>{
                    setPost(res.data);
                })
                .catch( (err)=>{
                    console.log(err);
                });
        }



        let getcategary=()=>{
                axios.get("http://localhost:3000/categaries")
                .then((res)=>{
                    setcategary(res.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
        }

        blogdata();
        getcategary();
    },setPost)

    let filtercat=(cat)=>{
        setTimeout(()=>{
            let url="";
            cat == 'All'? url="http://localhost:3000/blog" : url = "http://localhost:3000/blog/?categary="+cat
            axios(url)
            .then((res)=>{
                setPost(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        },1000) 
    }

    return(
        <div style={{backgroundColor:" #dcdee2"}}>
            <Container>
                <Row>
                        <h1 style={{margin:"20px 0"}}>Blog</h1>
                        <div>
                            <button onClick={(e)=>filtercat('All')} style={{padding:"10px", margin:"5px", borderRadius:"10px",color:"black" , backgroundColor:"#b0b1b5",border:"0"}}>All</button>
                            {categary.map((v,i)=>{
                                return(
                                    <>
                                        <button onClick={(cat)=>filtercat(v.categary)} style={{padding:"10px", margin:"5px 5px 20px 5px", borderRadius:"10px",color:"black" , backgroundColor:"#b0b1b5",border:"0"}}>{v.categary}</button>
                                    </>
                                )
                            })}
                        </div>
                        <div style={{display:"flex" , flexWrap:"wrap"}}>
                            {post.map((v,i)=>{
                                return(
                                    <div style={{width:"400px", height:"550px", border:"3px solid ",position:"relative", backgroundColor:"white", borderRadius:"10px", margin:"10px"}}>
                                        <img src={v.image} width={395} height={250} style={{objectFit:"cover", borderRadius:"10px"}}/>
                                        <div style={{padding:"10px"}}>
                                            <h3>{v.title}</h3>
                                            <p>{v.description}</p>
                                            <Link to={"/Singleblog/" + v.id} style={{backgroundColor:"#67686a", marginTop:"20px", display:"inline-block",position:"absolute",left:"5%",bottom:"3%", color:"white", padding:" 15px 160px",borderRadius:"10px" , textDecoration:"none"}}>View</Link>
                                        </div>
                                    
                                    </div>
                                )
                            })}
                        </div>
                </Row>
            </Container>
            
        </div>
    )
    
}

export default Blog;