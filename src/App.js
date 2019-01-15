import React from 'react'
import {Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsyn } from './index.redux.js'
class App extends React.Component{
    render(){
        // const store = this.props.store
        // const num = store.getState()
        const num = this.props.num
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        const addGunAsyn = this.props.addGunAsyn
        return (
        <div>   
            <h1>当前机枪数{num}</h1>
            <Button type="primary" onClick={()=>addGun()}>申请武器</Button>
            <Button type="primary" onClick={()=>removeGun()}>上交武器</Button>
            <Button type="primary" onClick={()=>addGunAsyn()}>拖两天再给</Button>
        </div>)

    }
}

const mapStateToProps = (state)=>{
    return {num: state}
}
const actionCreators = { addGun, removeGun, addGunAsyn }

App = connect(mapStateToProps, actionCreators)(App)
export default App