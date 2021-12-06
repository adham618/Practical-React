import './App.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'
function App() {
  const [startDate, setStartDate] = useState(null) // new Date()
  return (
    <div className="App">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/M/dd"
        // minDate={new Date()}
        // maxDate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay !== 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  )
}

export default App
