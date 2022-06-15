import React,{useContext, useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { remove } from './cartSlice';
import {UserContext} from "../Todolist"


const Cart = () => {
   const user = useContext(UserContext);
    const dispatch=useDispatch();
    let products =useSelector((state)=>state.cart);
   

   const handleRemove=(item)=>{
       dispatch(remove(item))        
   }
   useEffect(()=>{
    console.log("userjd----,",user)
   })
   
  return (<>
   <div className='cartwrapper container'>
     {/* {
       user?.map((val)=>{
         return(
           <>
           <h1>{val}</h1>
           </>
         )

       }) */}
     
   <h3>Cart{products.length}</h3>
   <NavLink to="/"><button className='btn btn-warning'>Home page</button></NavLink>
   
    { products.map((item)=>{
          return(
          <>
            <div class="card" style={{ width: " 1000px" }}>
                  <img
                    src={item.image}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="card-body">
                    <p class="card-title">{item.title}</p>
                    <p class="card-title">{item.price}</p>
                    <p class="card-title">{item.description}</p>
                    <button className="btn btn-success" onClick={()=>handleRemove(item.id)}>remove</button>
                  </div>
                </div>
                </>)

        })
    }
   </div>
   </> )
}

export default Cart