import './App.css'
import Modal from 'react-modal';
import { useState } from 'react';

// react-modal
Modal.setAppElement('#root');
// custom styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'orange'
  },
  overlay: {
    background: 'grey'
  }
};

function App() {
  const [modelIsOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal
        isOpen={modelIsOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <h2>Modal title</h2>
        <p>modal body</p>
        <button onClick={() => setIsOpen(false)}>close</button>
      </Modal>
    </div>
  )
}

export default App
