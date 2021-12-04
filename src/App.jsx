import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react-toastify
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      something went wrong !
      <button onClick={closeToast}>close</button>
    </div>
  )
}
function App() {

  // react-toastify
  const notify = () => toast(<CustomToast />);
  return (
    <div className="App">
      {/* react-toastify */}
      <button onClick={notify}>Notify me</button>
      <ToastContainer />
    </div>
  )
}

export default App
