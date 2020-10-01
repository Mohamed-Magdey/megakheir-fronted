import React from 'react';
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';
import {Provider} from "react-redux";
import {configureStore} from '../store';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    </Provider>
);

export default App;
