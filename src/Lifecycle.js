import React, { Component } from 'react'

export default class Lifecycle extends Component {
constructor(){
  console.log("constructor");
    super();
    this.state={
      name:'Mathu',
      

    }
    console.log("constructor");
}
  updateName(){
    this.setstate({name:'Mathuravanan'})
  }
 componentDidMount(){
    console.log("componentdidmount")
 }
 componentDidUpdate(){
     console.log("componentdidupdate")
 }
  render() {
    console.log("render")
    return (
      <div><h2>{this.state.name}</h2>
       <button onClick={()=>this.setstate({name:'MSD Mathuravanan'})}>Update</button>
       <button onClick={()=>this.updateName.bind(this)}>Update now</button>
      </div>
    )
  }
}
