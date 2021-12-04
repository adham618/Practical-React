import './App.css'
import CountUp, { useCountUp } from 'react-countup';
import { useRef } from 'react';


function App() {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({ ref: countUpRef, duration: 5, end: 10000, startOnMount: false })
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <div>
        <div ref={countUpRef} />
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>PauseResume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <CountUp end={100} />
      <br />
      <CountUp end={100} duration={5} />
      <br />
      <CountUp start={500} end={1000} duration={5} />
      <br />
      <h1 style={{ fontSize: '5rem' }}>
        <CountUp start={500} end={1000} duration={5} />
      </h1>
      <h1>
        <CountUp start={1000} end={5} duration={5} prefix='$' decimals={2} />
      </h1>
      <h1>
        <CountUp start={1000} end={5} duration={5} suffix=" USD" decimals={2} />
      </h1>
    </div>
  )
}

export default App
