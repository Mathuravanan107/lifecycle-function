import React ,{useEffect, useState}from 'react'
import { ChildFun } from './ChildFun'

const ParentFun = () => {
    const [name,setName]=useState("Mathu");
    const [age,setAge]=useState(34);
    const [show,setShow]=useState(true);
   //componentsDidMount
   useEffect(()=>{
      console.log("componentDidMount");
   },[]);

   useEffect(()=>{
   //componentDidupdate
    console.log("componentDidUpdate",name);
 },[name,age]);

  return (
    <div>{name}
    <button onClick={()=>setName("Mathuravanan Msd")}>Update Now</button>
    <button onClick={()=>setShow(!show)}>Show or Hidden</button>
        {show ?<ChildFun />:null}
    </div>
  )
}

export default ParentFun