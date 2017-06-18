import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './store/store';
import Rabbit from './components/rabbit';
import Hunter from './components/hunter';
import Layout from './components/layout';

var ReactDispatcher = require('flux-react-dispatcher');


var Dispatcher = new ReactDispatcher();
var store = new Store();

Dispatcher.register(store, store.reduce);

ReactDOM.render(
    <Layout>
        <Rabbit dispatcher={Dispatcher}/>
        <Hunter store={store}/>
    </Layout>, 
    document.getElementById('root'));

