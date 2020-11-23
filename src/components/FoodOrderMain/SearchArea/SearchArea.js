import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
class SearchArea extends Component {
  state = {
    format: "",
    price_range: {
      min: 500,
      max: 2000,
    },
    occassion: "",
  };
  setFormat = (event) => {
    this.setState({ format: event.target.value });
  };

  render() {
    return (
      <div>
        <div
          align="left"
          className="border"
          style={{ width: 250 }}
        >
          <b>Format: </b>
          <div className = "container" onChange={this.setFormat.bind(this)}>
            <input type="radio" value="Buffet" name="format" /> Buffet <br />
            <input
              type="radio"
              value="Mini-Buffet"
              name="format"
            /> Mini-Buffet <br />
            <input type="radio" value="Lunch-Box" name="format" /> Lunch Box{" "}
            <br />
            <input type="radio" value="Food-Trucks" name="format" /> Food Truck{" "}
            <br />
            <input type="radio" value="Top-up" name="format" /> Top Up <br />
          </div>
          <br></br>
          <b>Select Price Range: </b> <br /> 
          <form
            className="form"
            align="left"
            style={{ width: 150, margin: 30 }}
          >
            <InputRange
              maxValue={2000}
              minValue={500}
              formatLabel={(value) => `₹ ${value}`}
              value={this.state.price_range}
              onChange={(value) => this.setState({ price_range: value })}
            />
          </form>
          <br></br>
          <b>Occasion: </b>
          <div className = "container"
            onChange={(event) =>
              this.setState({ occassion: event.target.value })
            }
          >
            <input type="radio" value="Birthday" name="format" /> Birthday
            <br />
            <input
              type="radio"
              value="Baby-shower"
              name="format"
            /> Baby-shower <br />
            <input type="radio" value="House-warming" name="format" />
            House-warming <br />
            <input
              type="radio"
              value="House-party"
              name="format"
            /> House-party <br />
            <input type="radio" value="Society-event" name="Society-event" />
            Top Up <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArea;
