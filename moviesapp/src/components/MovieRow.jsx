import React, { Component } from "react";

class MovieRow extends Component {
  constructor(props) {
    super(props);
    console.log("This is movie-row constructor");
  }

  viewMovie() {
    console.log("Trying to view movie...");
    console.log(this.props.movie.title);
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
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
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.content}</p>
              <input
                type="button"
                value="view"
                onClick={this.viewMovie.bind(this)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
