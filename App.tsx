import React from 'react';
import AppContainer from './src/components/app-container';
import Navigator from './src/'
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./src/stores/rootReducer";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default function App() {
  return (
  <Provider store={store}>
   <AppContainer>
      <Navigator  />
   </AppContainer>
  </Provider> 
  );
}


