import { useRef, useState } from 'react'
import IdleTimer, { useIdleTimer } from 'react-idle-timer/modern'
import Modal from 'react-modal'

Modal.setAppElement("#root")

const IdleTimerContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [ModelIsOpen, setModelIsOpen] = useState(false)
  const IdleTimerRef = useRef(null)
  const sessionTimeOutRef = useRef(null)

  const onIdle = () => {
    console.log("idlw")
    setModelIsOpen(true)
    sessionTimeOutRef.current = setTimeout(logOut, 5000)
  }
  const logOut = () => {
    setModelIsOpen(false)
    clearTimeout(sessionTimeOutRef.current)
    setIsLoggedIn(false)
  }
  const stayActive = () => {
    setModelIsOpen(false);
    clearTimeout(sessionTimeOutRef.current)
  }

  return (
    <div>
      {isLoggedIn ? <h2>Hello adham</h2> : <h2>hello guset</h2>}
      <Modal isOpen={ModelIsOpen}>
        <h2>you have been idle for a while!</h2>
        <p>you will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>keep me signed</button>
        </div>
      </Modal>
      <IdleTimer ref={IdleTimerRef} timeout={5 * 1000} onIdle={onIdle} />
    </div>
  )
}

export default IdleTimerContainer
