import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { Root, Container } from "native-base";

import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import { StackNavigator } from 'react-navigation';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAvczlWtDlOh9t4b7EF5_U8AZlGk80cau8',
            authDomain: 'manager-r.firebaseapp.com',
            databaseURL: 'https://manager-r.firebaseio.com',
            projectId: 'manager-r',
            storageBucket: 'manager-r.appspot.com',
            messagingSenderId: '435779693524'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Root>
                    <Router />
                </Root>
            </Provider>
        );
    }
}

export default App;