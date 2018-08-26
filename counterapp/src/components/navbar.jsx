import React from "react";

//Stateless functional component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar- rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-secondary badge-pill">
          {/* {props.totalCounters} */}
          {/* {totalCounters} //object destructuring */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {

//   }
// }

export default NavBar;
