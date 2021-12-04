import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react-tostify
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      something went wrong !
      <button onClick={closeToast}>close</button>
    </div>
  )
}
function App() {

  // react-tostify
  const notify = () => toast(<CustomToast />);
  return (
    <div className="App">
      {/* react-tostify */}
      <button onClick={notify}>Notify me</button>
      <ToastContainer />
      {/* react-modal */}
    </div>
  )
}

export default App
