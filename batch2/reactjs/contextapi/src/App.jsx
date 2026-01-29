import React from 'react'
import Counter from './components/ReducerFun'
import UseMemoExample from './components/UseMemoExe'
import UseCallbackExample from './components/UseCallbackExe'
import CounterComponent from './components/CounterComponent'

const App = () => {
  return (
    <div>
      <Counter/>
      <UseMemoExample/>
      <UseCallbackExample/>
      <CounterComponent/>
    </div>
  )
}

export default App