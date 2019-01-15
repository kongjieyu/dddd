// import { createStore } from 'redux'

// function counter(state=0, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return state+1
//         case 'DECREMENT':
//             return state-1
//         default:
//             return 10
//     }
// }

// let store = createStore(counter)

// const init = store.getState()
// console.log(init)

// store.subscribe(() => console.log(store.getState()))

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })

import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {counter,addGun, removeGun, addGunAsyn} from './index.redux.js'

const reduxDevTools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevTools
    )
)


ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'))


