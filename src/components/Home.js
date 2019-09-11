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
    console.log(dataJson);

    const yAxis = "country";
    const xAxis = this.state.value;
    //make dropdown array and remove country
    let Categories = Object.keys(dataJson[0]).filter(item => item !== "country");
    console.log(Categories);

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
    return (
      <div>
        <label>
          Pick your category:
          <select value={this.state.value} onChange={this.handleChange}>
            {Categories.map(item => {
              return <option value={item}>{startCase(item)}</option>;
            })}
          </select>
        </label>
        <HorizontalBar data={data} />
      </div>
    );
  }
}

export default Home;
