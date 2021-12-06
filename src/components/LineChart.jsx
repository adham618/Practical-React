import { Line } from "react-chartjs-2"

const LineChart = () => {
  const data =
  {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales for 2020 (M)',
        data: [3, 2, 2, 1, 5],
      },
      {
        label: 'Sales for 2019 (M)',
        data: [1, 3, 2, 2, 3],
      }
    ]
  }
  const options = {
    title=""
  }
  return (
    <div>
      <Line
        // datasetIdKey='id'
        data={data}
        options={options}
      />
    </div>
  )
}

export default LineChart
