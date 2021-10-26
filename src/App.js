import React from 'react'
import Effect from "./components/Effect";
import State from "./components/State";
import Ref from "./components/Ref";
import Custom from "./components/Custom"
import Memorize from "./components/memos/Memorize"
const App = () => {
  return (
    <div className="container text-center">
      <>
      <Custom />
      </>
      <>
      <Memorize />
      </>
      <>
      <State />
      </>
      <>
      <Effect />
      </>
      <>
      <Ref />
      <br />
      </>

    </div>


  )
}

export default App
