import React from 'react'
import {Button} from 'antd-mobile'
import {addGun} from './index.redux.js'
class App extends React.Component{
    render(){
        const store = this.props.store
        const num = store.getState()
        return (
        <div>   
            <h1>当前机枪数{num}</h1>
            <Button type="primary" onClick={()=>store.dispatch(addGun())}>申请武器</Button>
        </div>)

    }
}
export default App