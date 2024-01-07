import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AddPost() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!";

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Button onClick={createPost}>Create Post</Button>
    </div>
  );
}
