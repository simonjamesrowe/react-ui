import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';
import "./assets/css/style.css";
import "./assets/css/font.css";
import {Store} from "redux";
import configureStore, {IApplicationState} from "./state/Store";

interface IProps {
    store: Store<IApplicationState>;
}

const Root = props => {
    return (
        <Provider store={props.store}>
            <App/>
        </Provider>
    );
};
const store = configureStore();
ReactDOM.render(<Root store={store}/>, document.getElementById(
    "root"
) as HTMLElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
