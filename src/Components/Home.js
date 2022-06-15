import React, { useEffect, useState } from "react";
import { add } from "./store/cartSlice";
import { useDispatch,useSelector } from "react-redux";

const axios = require("axios").default;
const Home = () => {
  const dispatch=useDispatch();
  let todos =useSelector((state)=>state.todo);
  
  const [data, setData] = useState([]);
  useEffect(() => {
    const Getdata = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data));
    };
    Getdata();
  }, []);
  console.log("todo-----0",todos)

   const handleAdd=(item)=>{
     dispatch(add(item))

   }
  return (
    <>
    {todos.map((item)=>{
      return(<>

      <h1>{item}</h1>
      </>
      )
    })}
      <div className="container mt-5 d-flex justify-content-center ">
        <div className="row gy-2 mx-2">
          {data.map((item) => {
            return (
              <>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={item.image}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div class="card-body">
                    <p class="card-title">{item.title}</p>
                    <p class="card-title">{item.price}</p>
                    <p class="card-title text-truncate">{item.description}</p>
                    <div className="row">
                      <div className="col-md-6">
                    <p class="card-title text-warning"><span className="text-danger mx-2" >rating</span>{item.rating.rate}</p>
                    </div>
                    <div className="col-md-6">
                    <p class="card-title text-warning">{item.rating.count}</p>
                    </div>
                    </div>
                    <button className="btn btn-success card-title" onClick={()=>handleAdd(item)}>add to cart</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
