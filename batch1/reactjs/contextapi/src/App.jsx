import React from 'react'
import ReducerFun from './components/ReducerFun'
import UseMemoExample from './components/UseMemoEx'
import UseCallbackExample from './components/UseCallbackEzx'
import CounterComponent from './components/CounterComponent'

const App = () => {
  return (
    <div>
      <CounterComponent/>
      <UseMemoExample/>
      <UseCallbackExample/>
    </div>
  )
}

export default App