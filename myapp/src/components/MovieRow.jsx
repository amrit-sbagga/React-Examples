import React, { Component } from "react";

class MovieRow extends Component {
  constructor(props) {
    super(props);
    console.log("This is movie-row constructor");
  }

  //state = {};
  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img
                src={this.props.movie.poster_src}
                alt={this.props.movie.id}
                width="80"
              />
            </td>

            <td>
              {this.props.movie.title}
              <p>{this.props.movie.content}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
