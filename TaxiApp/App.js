/**
 * @format
 */
import MainScreen from './app/screen/MainScreen'
import {createStore,applyMiddleware}from 'redux';
import {Provider}from 'react-redux';
import thunk from 'redux-thunk';
import React,{ Component } from 'react';
import messageReducer from './app/redux/reducers/messageReducer';
const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
const store=createStoreWithMiddleware(messageReducer);
export default class App extends Component{
    render(){
        return(
             <Provider store={store}>
                <MainScreen/>
             </Provider>
        )
    }
}
