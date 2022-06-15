import React, { useState,useEffect, createContext } from "react";
import Cart from "./store/Cart";
import { useSelector ,useDispatch} from 'react-redux'
import { Adding } from './store/todoSlice';
export const UserContext = createContext()

const Todolist = () => {
  const [input1, setinput1] = useState("");
  const[data1,setData1]=useState([]);
  const dispatch=useDispatch();
  let todos =useSelector((state)=>state.todo);

  const handleChange=(e)=>{
    setinput1(e.target.value) 
  }
  console.log("inputs",input1)
  const handleClick=(e)=>{  
   setData1((val)=>{
     return(
      [...data1,input1]
      )
   })
  }
  console.log("data----!",data1)
  const handleAdding=(item)=>{
    dispatch(Adding(item))        
  }  
  return (
    <>
    <UserContext.Provider value={data1}>
    <Cart/> 
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <input
              type="text"
              placeholder="enter here"
              className="form-control-lg w-50 h-25 m-5 "
              onChange={handleChange}  
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <br />
          <div className="col-6">
            <button className="bg-danger fs-5 mt-3" onClick={()=>{handleClick();handleAdding(input1)}}>Add</button>
           {data1.map((item,index)=>{
             return(
               <div key={index}><h1>{index}{item}</h1></div>
             )
           })}
          </div>
        </div>
       </div>
      </UserContext.Provider>
    </>
  );
};
export default Todolist;