import React, { Component } from "react";
import RecentOrders from "./RecentOrders/RecentOrders";
import SearchArea from "./SearchArea/SearchArea";
import SearchResults from "./SearchResults/SearchResults";
class FoodOrderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className = "container" >
        <h3 align="left">Recent Orders</h3>
        <RecentOrders /> <br />
        <div style={{ display: "flex"}}>
          <div>
            <h3 align="left">Filters</h3> <br />
            <SearchArea />
          </div>
          <div>
            <h3 align="left">Search Results</h3> <br />
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodOrderMain;
