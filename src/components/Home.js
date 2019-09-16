import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import dataJson from "../data/data.json";
import startCase from "lodash/startCase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "lifeExpectancy"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const yAxis = "country";
    const xAxis = this.state.value;
    //make dropdown array and remove country
    let Categories = Object.keys(dataJson[0]).filter(item => item !== "country");

    const data = {
      labels: dataJson.map(item => {
        return item[yAxis];
      }),
      datasets: [
        {
          label: startCase(xAxis),
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: dataJson.map(item => {
            return item[xAxis];
          })
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontSize: 20
        },
        onClick: e => e.stopPropagation(),
        position: "bottom"
      },

      scales: {
        yAxes: [
          {
            gridLines: {
              offsetGridLines: true
            },
            ticks: {
              fontSize: 14
            }
          }
        ]
      }
    };

    return (
      <div className="container">
        <div className="center">
          <select value={this.state.value} onChange={this.handleChange}>
            {Categories.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {startCase(item)}
                </option>
              );
            })}
          </select>
        </div>
        <HorizontalBar data={data} options={options} />
      </div>
    );
  }
}

export default Home;
