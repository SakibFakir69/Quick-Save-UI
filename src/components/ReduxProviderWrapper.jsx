


"use client"


import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function ReduxProviderWrapper({children}) {
  return (
    <div>

        <Provider store={store}>
            {children}

        </Provider>
      
    </div>
  )
}

export default ReduxProviderWrapper
