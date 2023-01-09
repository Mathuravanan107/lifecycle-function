import React, { Component } from 'react'
import Secoundclass from './Secoundclass'

export class Firstclass extends Component {
  constructor(){
    console.log("constructor");
      super();
      this.state={
        name:'Mathu',
        city:'Tenkasi'
  
      }
      console.log("constructor");
  }
    updateName(){
      this.setState({city:'chennai'})
    }
   componentDidMount(){
      console.log("componentdidmount")
   }
   componentWillUnmount(){
       console.log("componentWillUnmount")
   }
  render() {
    return (
      <div><h2>{this.state.name}{this.state.city}</h2>
      <button onClick={()=>this.setState({name:'MSD Mathuravanan'})}>Update</button>
      <button onClick={this.updateName.bind(this)}>Update city</button>
      <button onClick={()=> this.setState({show:!this.state.show})}>hidden or Show</button>
      {this.state.show? <Secoundclass />: null}
     </div>
    )
  }
}

export default Firstclass