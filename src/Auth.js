import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux.js'
import {Route, Link, Redirect, Switch } from "react-router-dom"

@connect(
    state=>state.auth,
    {login}
)
class Auth extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const login = this.props.login
        console.log(this.props)
        return (
            <div>
                {this.props.isAuth?<Redirect to='/dashboard'></Redirect>:null}
                <h2>需要登陆</h2>
                <button onClick={()=>login()}>登陆</button>
            </div>
        )

    }
}
export default Auth