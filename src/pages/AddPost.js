import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AddPost() {
  const [post, setPost] = useState({});
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  function createPost() {
    axios
      .post(baseURL, {
        title: titleInput,
        body: bodyInput,
      })
      .then((response) => {
        setPost(response.data);
        setTitleInput("");
        setBodyInput("");
      });
  }

  const showPost = post.title && post.body;

  return (
    <div style={{ textAlign: "center" }}>
      {showPost ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <h3>New Post</h3>
      )}
      <div className="row text-center">
        <div className="col-md-6 mx-auto">
          <label>Title: </label>
          <Form.Control
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="Title"
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-6 mx-auto">
          <label>Body: </label>
          <Form.Control
            type="text"
            value={bodyInput}
            onChange={(e) => setBodyInput(e.target.value)}
            placeholder="Body"
          />
        </div>
      </div>
      <br></br>
      <Button onClick={createPost}>Create Post</Button>
    </div>
  );
}
