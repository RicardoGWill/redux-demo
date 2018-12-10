import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
  render(){

    // Step 1: Create Reducer (state, action)
    const reducer = function(state, action) {
      if(action.type === "War"){
        return action.payload
      }
      if(action.type === "Riot"){
        return action.payload
      }
      return state;
    }

    // Step 2: Create Store (reducer, state)
    const store = createStore(reducer, "Peace");

    // Step 3: Subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    })

    // Step 4: Dispatch Action
    store.dispatch({type: "War", payload: "Warship"})
    store.dispatch({type: "Riot", payload: "Tear Gas"})

    return(
      <div>
        Test
      </div>
    );
  }
}

export default ReduxDemo;
