import React from 'react'
import {Button} from 'antd-mobile'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      board: ['Eric', 'May', 'Panpan']
    }
  }

  render(){
    const mainCareer = 'Design'
    return(
      <div>
        <h1>May Career, /n,Main: {mainCareer}</h1>
        <h2>Board Member:</h2>
        {this.state.board.map(v=>{
          return <li key={v}>{v}</li>
        })}

        <h3>Other Department:</h3>
        <Tech Leader='John'/>
        <Illustration Leader='Cathy'></Illustration>
      </div>
    )

  }
}
function Illustration(props){
  return <h3>Leader: {props.Leader}; Illustration</h3>
}


class Tech extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      member: ['dada','xx','yiwai']
    }
    this.addMember = this.addMember.bind(this)
  }
  componentWillMount(){
    console.log('Init')
  }
  componentDidMount(){
    console.log('Did')
  }
  componentWillReceiveProps(){
    console.log('Receive Props')
  }
  addMember(){
    console.log('Add new Member')
    this.setState ({
      member: [...this.state.member, 'NewMem'+ Math.random()]
    })
  }
  render(){
    console.log('Doing')
    const field= 'react, Vues, Angular'
    
    return (
      <div>
        <h3>Leader: {this.props.Leader}; Web Design : {field} </h3>
        {this.state.member.map(v=>{return <li key={v}>{v}</li>})}
        <Button type="primary" onClick={this.addMember}>Add Member</Button>
      </div>
    )

  }
}


export default App