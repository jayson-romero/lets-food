import React, { useContext, useReducer,  } from 'react';
import {cartItems} from './data';
import reducer from './reducer';


const AppContext = React.createContext()

const initialState = {
   loading: false,
   cart: cartItems,
   total: 0,
   amount: 0,
}

const AppProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   return (
      <AppContext.Provider
        value={{
          ...state,
        }}
      >
        {children}
      </AppContext.Provider>
    )
}


export { AppContext, AppProvider  }