import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieRow from "./components/MovieRow";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initializer");

    // const movies = [
    //   {
    //     id: "1",
    //     title: "Avengers: Infinity war",
    //     poster_path:
    //       "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //     content: "this is my first movie content"
    //   },
    //   {
    //     id: "2",
    //     title: "Avengers 2",
    //     poster_path:
    //       "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //     content: "this is my second movie content"
    //   },
    //   {
    //     id: "3",
    //     title: "Jurassic World: Fallen Kingdom",
    //     poster_path:
    //       "https://image.tmdb.org/t/p/w185_and_h278_bestv2/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
    //     content: "this is my third movie content"
    //   },
    //   {
    //     id: "4",
    //     title: "Deadpool2",
    //     poster_path:
    //       "https://image.tmdb.org/t/p/w185_and_h278_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    //     content: "this is my fourth movie content"
    //   }
    // ];

    // <React.Fragment key="111">
    //   <p key="3">This is my row4</p>
    // </React.Fragment>

    // var movieRows = [];
    // movies.forEach(movie => {
    //   //console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />;

    //   movieRows.push(movieRow);
    //   //movieRows.push(<p key={movie.id}>{movie.title}</p>);
    // });

    // this.state = {
    //   rows: movieRows
    //   //<React.Fragment key="111">{movies}</React.Fragment>
    // }

    this.state = {};

    this.performSearch("avengers");
  }

  performSearch(searchTerm) {
    console.log("perform search using movies db");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +
      searchTerm; //provide correct url
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetched data sucessfully");
        console.log(searchResults);

        var movieRows = [];
        const results = searchResults.results;
        results.forEach(movie => {
          console.log(movie.poster_path);
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("error fetching data : ", err);
      }
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="title-bar">
          <tbody>
            <tr>
              <td>
                <img src={logo} className="App-logo" alt="logo" width="80" />
              </td>
              <td width="8" />
              <td>
                <h2>MoviesDB Search</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter your search term"
          className="inputbox"
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
