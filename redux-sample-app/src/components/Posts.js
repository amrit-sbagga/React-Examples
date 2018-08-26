import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    console.log("Posts");
  }

  state = { posts: [] };

  componentWillMount() {
    console.log("Posts - componentWillMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      //   .then(data => console.log(data));
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h2>Posts</h2>
        {postItems}
      </div>
    );
  }
}

export default Posts;
