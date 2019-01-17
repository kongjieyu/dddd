import React from 'react'
import {Button, Progress} from 'antd-mobile'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsyn } from './index.redux.js'
import axios from 'axios'
import {storage} from '/Users/may/Desktop/Hobbie/my-app/src/firebase'

// const mapStateToProps = (state)=>{
//     return {num: state}
// }
// const actionCreators = { addGun, removeGun, addGunAsyn }

// App = connect(mapStateToProps, actionCreators)(App)
@connect(
    state=>({num:state.counter}), 
    { addGun, removeGun, addGunAsyn})
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image: null,
            url: null,
            progress: 0
        }
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }
    stateGet=()=>{
        console.log(this.state)
    }

    fileSelectedHandler = event =>{
            console.log('FileSelect')
            console.log(event.target.files[0])

            console.log(this.state)
            if(event.target.files[0]){
                const image = event.target.files[0]
                this.setState(()=>({image}))
            }
        }
    fileUploadHandler = () =>{
        console.log(this.state)
        const {image} = this.state
        const upLoadTask =  storage.ref(`images/${image.name}`).put(image);
        // upLoadTask.on('stage_changed', progress, error, complete)
        upLoadTask.on('state_changed', 
        (snapshot)=>{
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
            this.setState({progress})
        }, 
        (error)=>{
            //error function
            console.log(error)
        }, 
        ()=>{
            //complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                console.log(url)
                this.setState({url})
            })
        })
    }
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
            <Button type="primary" onClick={addGun}>申请武器</Button>
            <Button type="primary" onClick={removeGun}>上交武器</Button>
            <Button type="primary" onClick={()=>addGunAsyn()}>拖两天再给</Button>
            <input type="file" onChange={this.fileSelectedHandler}/>
            <div className="show-info">
                <div className="progress"><Progress percent={this.state.progress} max="100" position="normal" /></div>
                <div aria-hidden="true">{this.state.progress}%</div>
            </div>
            <br/>
            <br/>
            <br/>
            <Button onClick={this.fileUploadHandler}>Upload</Button>
            <Button onClick={this.stateGet}>State</Button>
            <img src={this.state.url||'https://via.placeholder.com/300'} alt="Upload Picture" height="300px"/>
        </div>)

    }
}


export default App