import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AddPost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [showPostAdded, setShowPostAdded] = useState(false);

  function createPost() {
    axios
      .post(baseURL, {
        title: post.title,
        body: post.body,
      })
      .then((response) => {
        setPost({
          title: "",
          body: "",
        });
        setShowPostAdded(true);
      });
  }

  const clearMessage = () => {
    setShowPostAdded(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>New Post</h3>

      <div className="row text-center">
        <div className="col-md-6 mx-auto">
          <label>Title: </label>
          <Form.Control
            type="text"
            value={post.title}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
              clearMessage();
            }}
            placeholder="Title"
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-6 mx-auto">
          <label>Body: </label>
          <Form.Control
            type="text"
            value={post.body}
            onChange={(e) => {
              setPost({ ...post, body: e.target.value });
              clearMessage();
            }}
            placeholder="Body"
          />
        </div>
      </div>
      <br />
      <Button onClick={createPost}>Create Post</Button>
      <div>{showPostAdded && <span>New Post Added.</span>}</div>
    </div>
  );
}
