import React, { Component } from "react";

import Counter from "./Counter.js";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onRemove={this.props.onRemove}
            onIncrement={this.props.onIncrement}
            onReduce={this.props.onReduce}
            counter={counter}
          >
            <h4>Product name</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
