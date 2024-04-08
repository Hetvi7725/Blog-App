
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Singleblog(){
    let data = useParams();
    console.log(data);
    let [postdata,setPostdata] = useState({});

    useEffect(()=>{
        let SinglePost=()=>{

            setTimeout(()=>{
                fetch("http://localhost:3000/blog/" + data.id)
                .then(async (res)=>{
                    let post=(await res.json());
                    setPostdata(post);
                })
                .catch( (err)=>{
                    console.log(err);
                });
            },1000)
        }


        SinglePost();
    })

    return(
        <div>
            <Container>
                <Row>
                    <h1 style={{fontSize:"40px"}}>Blog Details</h1>
                    <div className="box" style={{height:"500px",margin:"20px",border:"2px solid"}}>
                        <Col sm={6}>
                        <img src={postdata.image} width="100%" height={500} style={{borderRadius:"10px"}}/>
                        </Col>
                        <Col sm={6}>
                            <div style={{padding:"20px"}}>
                                <h1 style={{fontSize:"35px"}}>{postdata.title}</h1>
                                <p>{postdata.description}</p>
                                <p>Categary : {postdata.categary}</p>
                                <img src="https://static-00.iconduck.com/assets.00/clock-icon-512x512-u3m4aqxv.png" width={20} height={20}/><p>{postdata.date}</p>
                                <img src="https://www.freeiconspng.com/thumbs/like-icon-png/like-icon-png-6.png" width={20} height={20}/><p>{postdata.like}</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/2902/2902475.png" width={20} height={20} /><p>{postdata.rating} /10</p>
                            </div>
                        </Col>  
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Singleblog;