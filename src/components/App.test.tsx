import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "@/reducers";

it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer)

    ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
