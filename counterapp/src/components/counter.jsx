import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   //     console.log("constructor :: this = ", this);
  //   //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // state = {
  //   value: this.props.counter.value
  //   //tags: ["tag1", "tag2", "tag3"]
  // };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  // handleIncrement = cId => {
  //   console.log("Increment the counter!!", cId); //this
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDelete(cId) {
  //   console.log("delete this : ", cId);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter- rendered");
    //    console.log("props", this.props);
    return (
      <React.Fragment>
        {/* <h4>{this.props.id}</h4> */}
        <h4> </h4>
        <span
          //style={this.styles}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          // onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  //{this.renderTags()} -> before react.fragment

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { value } = this.state; //object destructuring
    const { value } = this.props.counter; //object destructuring
    return value === 0 ? <h3>Zero</h3> : value;
  }
}
export default Counter;
