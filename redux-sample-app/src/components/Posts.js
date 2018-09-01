import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/postAction";

class Posts extends Component {
  //moved to redux part
  // constructor(props) {
  //   super(props);
  //   console.log("Posts");
  // }

  //moved to redux part
  // state = { posts: [] };

  //moved code to redux part
  // componentWillMount() {
  //   console.log("Posts - componentWillMount");
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     //   .then(data => console.log(data));
  //     .then(data => this.setState({ posts: data }));
  // }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    //const postItems = this.state.posts.map(post => (
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items, //key name should be samme as rootreducer i.e, in reducer/index.js
  newPost: state.posts.item
});

//export default Posts;
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
