/**
 * Created by Ori on 02/01/2017.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import Router from './Router';

class App extends Component {

    componentWillMount(){
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyANeRu5NisRbQhoBrpSdTPyQ5fiHwPXtl4',
            authDomain: 'manager-16a3f.firebaseapp.com',
            databaseURL: 'https://manager-16a3f.firebaseio.com',
            storageBucket: 'manager-16a3f.appspot.com',
            messagingSenderId: '162393588883'
        };
        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;