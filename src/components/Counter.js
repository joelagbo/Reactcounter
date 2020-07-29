import React, { Component } from "react";

class Counter extends Component {
  editCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.editBadge()}>
          {this.editCount(this.props.counter.value)}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onReduce(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onRemove(this.props.counter.id)}
        >
          Remove item
        </button>
      </div>
    );
  }

  editBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
