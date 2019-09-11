import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import data2 from "../data/data.json";

console.log(data2);

const data = {
  labels: data2.map(item => {
    return item.country;
  }),
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
}

export default Home;
