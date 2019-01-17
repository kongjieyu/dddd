import React from 'react'
import App from './App.js'
import {Route, Link, Redirect, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { logout } from './Auth.redux.js'
// const Art = (props)=>{
//     console.log(props)
//     return (
//         <div>
//             {props.location.pathname}
//             <h2>ART Department</h2>
//         </div>
//     )
// }
function Art(){
    return <h2>Art Department</h2>
}

const Tech = ()=>{
    return <h2>TECH Department</h2>
}
const Test = ()=>{
    return <h2>Test Department</h2>
}
// class Tech extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props)
//         return (
//             <div>
//             {this.props.location.pathname}
//             <h2>TECH Department</h2>
//             </div>
//         )

//     }
// }

// class Test extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props)
//         // this.props.history.push('/tech')
//         return (
//             <div>
//             <h2>测试组件 {this.props.location.pathname}</h2>
//             </div>
//         )

//     }
// }
@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        const match = this.props.match
        console.log(match)
        const logout = this.props.logout
        const RedirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/art`}>Art</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/tech`}>Tech</Link>
                    </li>

                </ul>
                    <Route path={`${match.url}/`} exact component={App}></Route>
                    <Route path={`${match.url}/art`} exact component={Art}></Route>
                    <Route path={`${match.url}/tech`} exact component={Tech}></Route>
                    {this.props.isAuth?<button onClick={logout}>Logout</button>:null}
                    
            </div>
        )
        return this.props.isAuth?app:RedirectToLogin

    }
}
export default Dashboard