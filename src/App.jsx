import './App.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
function App() {

  return (
    <div className="App">
      <Tippy content="hello">
        <button>Hover</button>
      </Tippy>
    </div>
  )
}

export default App
