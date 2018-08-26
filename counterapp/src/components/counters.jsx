import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // withListType() {
  //   return (
  //     <ul>
  //       {this.state.counters.map(c => (
  //         <li key={c.id}>
  //           <Counter
  //             key={c.id}
  //             value={c.value}
  //             id={c.id}
  //             //selected={true} />
  //           >
  //             (/* <h4>Counter #{c.id}</h4> */)
  //           </Counter>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("Counters- rendered");
    // object destructuring
    const { counters, onReset, onIncrement, onDelete } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            // value={c.value}
            // id={c.id}
            counter={c}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
