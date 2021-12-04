import './App.css'
import { useState } from 'react'
import { SketchPicker } from 'react-color'

function App() {
  const [color, setColor] = useState('#FFF')
  const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? "close color picker" : "pick a color"}</button>
      {showColorPicker && (
        <SketchPicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
      )}
      <h2>you picked {color}</h2>
    </div>
  )
}

export default App