import {React,  useEffect, useState } from "react";
import Sign_up from "./sign-up/Sign_up";
// import Name from "./name/Name";



export default function App() {

//   const [data, setData] = useState([]);

//   console.log(data);

//   const handeler = data.map((item , index)=> <Name name={item} key={index}/>)

// useEffect(()=>{
//   fetch('https://api.imgflip.com/get_memes')
//   .then((res)=>res.json())
//   .then(((data)=> setData(data.data.memes.map((item)=> item.name))));
// },[])







  return (
    <div>
      {/* <h1 className="text-dark">hello{handeler}</h1> */}


      <Sign_up/>
    </div>
  );
}
