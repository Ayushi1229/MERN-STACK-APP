//cards
import React from "react";

function Cards({ item }) {
  console.log(item);
  
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Chocolates" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              {/* <button className="btn btn-danger" onClick={()=>{
                const apiUrl = "localhost:4001/choco/"+item.id;

                fetch(apiUrl, {method:"DELETE"})
                .then(res=>res.json())
                .then(res=>{
                    navigate('/');
                })}}>Delete</button> */}
                {/* <h1>Name of the chocolate is = {item.name}</h1>
                <img src={item.image} /> */}
                <button className="btn btn-danger ms-2" onClick={() => handleDelete(item._id)}>Delete</button>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
