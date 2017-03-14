import React    from 'react';
import ReactDOM from 'react-dom';

import { createStore }  from 'redux'
import { Provider }     from 'react-redux'

import allReducers  from './reducers'

import AppContainer from './containers/appContainer';

import './css/index.css';

import { persistStore, autoRehydrate } from 'redux-persist'

const store = createStore(allReducers, undefined, autoRehydrate())

persistStore(store)
//persistStore(store, {blacklist: ['app']})// on indique le nom de la clé du reducer à blacklister
//persistStore(store).purge() : si vous voulez "purger" ce que vous avez enregistré

ReactDOM.render(
    <Provider store={ store }>

        <AppContainer title="HappyDrink"/>

    </Provider>,

    document.getElementById('root')
)
