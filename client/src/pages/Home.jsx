import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {useSelector} from "react-redux"
import { addtoCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {
    const [product,setproduct]=useState([]);
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart.value)
    const loadData=async()=>{
        let api ="https://fakestoreapi.com/products";
        const response= await axios.get(api);
        setproduct(response.data);
    }

    useEffect(()=>{
     loadData();
    },[])

const ans=product.map((item)=>{
    return(
        <>
        <div className='card1' style={{width:"300px",margin:"20px",padding:"20px",borderRadius:"20px",backgroundColor:"rgb(235, 243, 244)" }}>
    <div>
  <img src={item.image} alt="" height={250} width={260} style={{borderRadius:"20px", border:"2px solid black", padding:"10px"}} />
    </div>
       <ListGroup className="list-group-flush">
            <div style={{height:"250px", paddingTop:"20px"}}>
            <h4 style={{color:"black"}}>{item.title} </h4>  
            <p> <b>Category :</b>  {item.category}</p>
            {/* <p>Description : {item.description}</p> */}
            <p><b> Price :</b> ${item.price}  </p>
            <p><b>stock: </b>{item.rating.count}</p>
            </div>    
</ListGroup>

               <Button variant="primary" onClick={()=>{ dispatch(addtoCart({...item,quantity:1}))}} >Add to Cart</Button>  
        </div>
        
        </>
    )
})


  return (
   <>
   <div className='container'>
    <h3 style={{textAlign:"center",marginTop:"10px",color:"blue"}} >All product</h3>
<div className='cardcont'>
{ans}

</div>
   </div>
   <ToastContainer />
   </>
  )
}

export default Home

