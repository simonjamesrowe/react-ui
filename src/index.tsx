import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';
import "./assets/css/style.css";
import "./assets/css/font.css";
import createAppStore, {IApplicationState} from "./state/Store";

type AppStore = ReturnType<typeof createAppStore>;

interface IProps {
    store: AppStore;
}

const Root = (props: IProps) => {
    return (
        <Provider store={props.store}>
            <App/>
        </Provider>
    );
};

const store = createAppStore();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Root store={store}/>
    </React.StrictMode>
);