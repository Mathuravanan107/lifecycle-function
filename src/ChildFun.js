import React, { useEffect } from 'react'

export const ChildFun = () => {
    useEffect(()=>{
        console.log("ChildFun ComponentDidMount");
        const interval=setInterval(()=>{
            console.log("ChildFun Components");
        },2000)
        return()=>{
            console.log("componenetWillUnmount");
            clearInterval(interval);
        }
    },[])
  return (
    <div>Fabevy Technologies</div>
  )
};
